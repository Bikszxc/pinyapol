import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import { StringSelectMenuInteraction, ChannelType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageFlags, TextChannel } from 'discord.js';
import { prisma } from '../lib/prisma';

export class TicketCategorySelectHandler extends InteractionHandler {
    public constructor(ctx: InteractionHandler.LoaderContext, options: InteractionHandler.Options) {
        super(ctx, {
            ...options,
            interactionHandlerType: InteractionHandlerTypes.SelectMenu
        });
    }

    public override parse(interaction: StringSelectMenuInteraction) {
        if (interaction.customId !== 'ticket-category-select') {
            return this.none();
        }
        return this.some();
    }

    public async run(interaction: StringSelectMenuInteraction) {
        if (!interaction.guild || !interaction.channel) {
            return interaction.reply({ content: 'This command can only be used in a server channel.', flags: [MessageFlags.Ephemeral] });
        }

        const categoryId = interaction.values[0];

        // Acknowledge the interaction to stop the loading state
        await interaction.deferUpdate();

        try {
             const category = await prisma.ticketCategory.findUnique({
                 where: { id: categoryId },
                 include: { ticketSettings: true }
             });

             if (!category) {
                 const msg = await interaction.followUp({ content: 'Category not found.', flags: [MessageFlags.Ephemeral] });
                 setTimeout(() => msg.delete().catch(() => {}), 5000);
                 return;
             }

             const ticketSettings = category.ticketSettings;

            // Create a new private thread
            const thread = await (interaction.channel as TextChannel).threads.create({
                name: `ticket-${category.name}-${interaction.user.username}`,
                autoArchiveDuration: 1440, // 24 hours
                type: ChannelType.PrivateThread, // Make it a private thread
                reason: `Ticket created by ${interaction.user.tag} (Category: ${category.name})`
            });

            // Add the user to the thread
            await thread.members.add(interaction.user.id);

            // Create ticket in database
            await prisma.ticket.create({
                data: {
                    ticketSettingsId: ticketSettings.id,
                    userId: interaction.user.id,
                    channelId: thread.id,
                    status: 'OPEN'
                }
            });

            // Replace placeholders in welcome message
            let welcomeMsg = ticketSettings.welcomeMessage
                .replace(/{user}/g, interaction.user.toString())
                .replace(/{role}/g, category.roleId ? `<@&${category.roleId}>` : '');

            const welcomeEmbed = new EmbedBuilder()
                .setColor('Blue')
                .setTitle(`New Ticket: ${category.name}`)
                .setDescription(welcomeMsg)
                .addFields({ name: 'Category', value: category.name })
                .setFooter({ text: `Ticket created by ${interaction.user.tag}` })
                .setTimestamp();

            const closeButton = new ButtonBuilder()
                .setCustomId('ticket-close-button')
                .setLabel('Close Ticket')
                .setStyle(ButtonStyle.Danger)
                .setEmoji('🔒');

            const actionRow = new ActionRowBuilder<ButtonBuilder>().addComponents(closeButton);

            let content = `${interaction.user}, welcome!`;
            if (category.roleId) {
                content += ` <@&${category.roleId}>`;
            }

            await thread.send({
                content: content,
                embeds: [welcomeEmbed],
                components: [actionRow]
            });

            // Reset the select menu on the panel by re-sending the same components
            await interaction.editReply({ components: interaction.message.components });

            // Send ephemeral confirmation
            const confirmationMsg = await interaction.followUp({ 
                content: `Your ticket has been created: ${thread.toString()}`, 
                flags: [MessageFlags.Ephemeral] 
            });
            
            setTimeout(() => {
                interaction.webhook.deleteMessage(confirmationMsg.id).catch(err => this.container.logger.debug('Failed to delete ephemeral followUp:', err));
            }, 5000);

            return;

        } catch (error) {
            this.container.logger.error('Error creating ticket from category:', error);
            const errorMsg = await interaction.followUp({ content: 'Failed to create ticket. Please check my permissions.', flags: [MessageFlags.Ephemeral] });
            setTimeout(() => interaction.webhook.deleteMessage(errorMsg.id).catch(() => {}), 5000);
            return;
        }
    }
}
