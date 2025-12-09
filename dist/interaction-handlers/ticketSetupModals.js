"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketSetupModalHandler = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const prisma_1 = require("../lib/prisma");
class TicketSetupModalHandler extends framework_1.InteractionHandler {
    constructor(ctx, options) {
        super(ctx, {
            ...options,
            interactionHandlerType: framework_1.InteractionHandlerTypes.ModalSubmit
        });
    }
    parse(interaction) {
        if (!interaction.customId.startsWith('ticket-setup-')) {
            return this.none();
        }
        return this.some();
    }
    async run(interaction) {
        if (!interaction.guildId)
            return;
        if (interaction.customId === 'ticket-setup-msg-modal') {
            const message = interaction.fields.getTextInputValue('message');
            await prisma_1.prisma.ticketSettings.update({
                where: { guildId: interaction.guildId },
                data: { welcomeMessage: message }
            });
            await interaction.reply({ content: 'Welcome message updated! Click "Refresh" on the dashboard to see changes.', flags: [discord_js_1.MessageFlags.Ephemeral] });
            setTimeout(() => interaction.deleteReply().catch(() => { }), 5000);
            return;
        }
        if (interaction.customId === 'ticket-setup-panel-msg-modal') {
            const message = interaction.fields.getTextInputValue('message');
            await prisma_1.prisma.ticketSettings.update({
                where: { guildId: interaction.guildId },
                data: { ticketPanelMessage: message }
            });
            await interaction.reply({ content: 'Ticket panel message updated! Click "Refresh" on the dashboard to see changes.', flags: [discord_js_1.MessageFlags.Ephemeral] });
            setTimeout(() => interaction.deleteReply().catch(() => { }), 5000);
            return;
        }
        if (interaction.customId === 'ticket-setup-add-cat-modal') {
            const name = interaction.fields.getTextInputValue('name');
            const emoji = interaction.fields.getTextInputValue('emoji');
            const roleId = interaction.fields.getTextInputValue('roleId');
            const settings = await prisma_1.prisma.ticketSettings.findUnique({ where: { guildId: interaction.guildId } });
            if (!settings)
                return;
            await prisma_1.prisma.ticketCategory.create({
                data: {
                    ticketSettingsId: settings.id,
                    name,
                    emoji: emoji || null,
                    roleId: roleId || null
                }
            });
            await interaction.reply({ content: `Category "**${name}**" added! Click "Refresh" on the dashboard to see changes.`, flags: [discord_js_1.MessageFlags.Ephemeral] });
            setTimeout(() => interaction.deleteReply().catch(() => { }), 5000);
            return;
        }
    }
}
exports.TicketSetupModalHandler = TicketSetupModalHandler;
//# sourceMappingURL=ticketSetupModals.js.map