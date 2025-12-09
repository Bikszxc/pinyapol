"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketCreateButtonHandler = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const prisma_1 = require("../lib/prisma");
class TicketCreateButtonHandler extends framework_1.InteractionHandler {
    constructor(ctx, options) {
        super(ctx, {
            ...options,
            interactionHandlerType: framework_1.InteractionHandlerTypes.Button
        });
    }
    parse(interaction) {
        if (interaction.customId !== 'ticket-create-button') {
            return this.none();
        }
        this.container.logger.debug(`[TicketCreate] Parsing interaction: ${interaction.customId}`);
        return this.some();
    }
    async run(interaction) {
        this.container.logger.debug(`[TicketCreate] Running interaction: ${interaction.customId}`);
        if (!interaction.guild || !interaction.channel) {
            return interaction.reply({ content: 'This command can only be used in a server channel.', flags: [discord_js_1.MessageFlags.Ephemeral] });
        }
        const ticketSettings = await prisma_1.prisma.ticketSettings.findUnique({
            where: { guildId: interaction.guild.id }
        });
        if (!ticketSettings) {
            return interaction.reply({ content: 'Ticket system not configured for this server.', flags: [discord_js_1.MessageFlags.Ephemeral] });
        }
        // Default behavior (No categories enabled, or direct creation)
        await interaction.deferReply({ flags: [discord_js_1.MessageFlags.Ephemeral] });
        try {
            // Create a new private thread
            const thread = await interaction.channel.threads.create({
                name: `ticket-${interaction.user.username}-${Date.now()}`,
                autoArchiveDuration: 1440, // 24 hours
                type: discord_js_1.ChannelType.PrivateThread, // Make it a private thread
                reason: `Ticket created by ${interaction.user.tag}`
            });
            // Add the user to the thread
            await thread.members.add(interaction.user.id);
            // Create ticket in database
            await prisma_1.prisma.ticket.create({
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
            const welcomeEmbed = new discord_js_1.EmbedBuilder()
                .setColor('Blue')
                .setTitle('New Support Ticket')
                .setDescription(welcomeMsg)
                .setFooter({ text: `Ticket created by ${interaction.user.tag}` })
                .setTimestamp();
            const closeButton = new discord_js_1.ButtonBuilder()
                .setCustomId('ticket-close-button')
                .setLabel('Close Ticket')
                .setStyle(discord_js_1.ButtonStyle.Danger)
                .setEmoji('🔒');
            const actionRow = new discord_js_1.ActionRowBuilder().addComponents(closeButton);
            await thread.send({
                content: `${interaction.user}, welcome!`,
                embeds: [welcomeEmbed],
                components: [actionRow]
            });
            await interaction.editReply({ content: `Your ticket has been created: ${thread.toString()}` });
            setTimeout(() => {
                interaction.deleteReply().catch(() => { });
            }, 5000);
            return;
        }
        catch (error) {
            this.container.logger.error('Error creating ticket:', error);
            return interaction.editReply({ content: 'Failed to create ticket. Please check my permissions.' });
        }
    }
}
exports.TicketCreateButtonHandler = TicketCreateButtonHandler;
//# sourceMappingURL=ticketCreate.js.map