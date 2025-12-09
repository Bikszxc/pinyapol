import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import { ButtonInteraction, ChannelType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageFlags, TextChannel } from 'discord.js';
import { prisma } from '../lib/prisma';

export class TicketCreateButtonHandler extends InteractionHandler {
    public constructor(ctx: InteractionHandler.LoaderContext, options: InteractionHandler.Options) {
        super(ctx, {
            ...options,
            interactionHandlerType: InteractionHandlerTypes.Button
        });
    }

    public override parse(interaction: ButtonInteraction) {
        if (interaction.customId !== 'ticket-create-button') {
            return this.none();
        }
        this.container.logger.debug(`[TicketCreate] Parsing interaction: ${interaction.customId}`);
        return this.some();
    }

    public async run(interaction: ButtonInteraction) {
        this.container.logger.debug(`[TicketCreate] Running interaction: ${interaction.customId}`);
        if (!interaction.guild || !interaction.channel) {
            return interaction.reply({ content: 'This command can only be used in a server channel.', flags: [MessageFlags.Ephemeral] });
        }

        const ticketSettings = await prisma.ticketSettings.findUnique({
            where: { guildId: interaction.guild.id }
        });

        if (!ticketSettings) {
            return interaction.reply({ content: 'Ticket system not configured for this server.', flags: [MessageFlags.Ephemeral] });
        }

        // Default behavior (No categories enabled, or direct creation)
        await interaction.deferReply({ flags: [MessageFlags.Ephemeral] });

        try {
            // Create a new private thread
            const thread = await (interaction.channel as TextChannel).threads.create({
                name: `ticket-${interaction.user.username}-${Date.now()}`,
                autoArchiveDuration: 1440, // 24 hours
                type: ChannelType.PrivateThread, // Make it a private thread
                reason: `Ticket created by ${interaction.user.tag}`
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
            const welcomeMsg = ticketSettings.welcomeMessage
                .replace(/{user}/g, interaction.user.toString())
                .replace(/{role}/g, ''); // No role to mention without a category

            const welcomeEmbed = new EmbedBuilder()
                .setColor('Blue')
                .setTitle('New Support Ticket')
                .setDescription(welcomeMsg)
                .setFooter({ text: `Ticket created by ${interaction.user.tag}` })
                .setTimestamp();

            const closeButton = new ButtonBuilder()
                .setCustomId('ticket-close-button')
                .setLabel('Close Ticket')
                .setStyle(ButtonStyle.Danger)
                .setEmoji('🔒');

            const actionRow = new ActionRowBuilder<ButtonBuilder>().addComponents(closeButton);

            await thread.send({
                content: `${interaction.user}, welcome!`,
                embeds: [welcomeEmbed],
                components: [actionRow]
            });

            await interaction.editReply({ content: `Your ticket has been created: ${thread.toString()}` });

            setTimeout(() => {
                interaction.deleteReply().catch(() => {});
            }, 5000);

            return;

        } catch (error) {
            this.container.logger.error('Error creating ticket:', error);
            return interaction.editReply({ content: 'Failed to create ticket. Please check my permissions.' });
        }
    }
}
