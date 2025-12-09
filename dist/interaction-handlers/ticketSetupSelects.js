"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketSetupSelectHandler = void 0;
const framework_1 = require("@sapphire/framework");
const prisma_1 = require("../lib/prisma");
class TicketSetupSelectHandler extends framework_1.InteractionHandler {
    constructor(ctx, options) {
        super(ctx, {
            ...options,
            interactionHandlerType: framework_1.InteractionHandlerTypes.SelectMenu
        });
    }
    parse(interaction) {
        if (interaction.customId !== 'ticket-setup-rem-cat-select' &&
            interaction.customId !== 'ticket-setup-transcript-select') {
            return this.none();
        }
        return this.some();
    }
    async run(interaction) {
        if (!interaction.guildId)
            return;
        if (interaction.isStringSelectMenu() && interaction.customId === 'ticket-setup-rem-cat-select') {
            const categoryId = interaction.values[0];
            await prisma_1.prisma.ticketCategory.delete({
                where: { id: categoryId }
            });
            await interaction.update({ content: 'Category removed! Click "Refresh" on the dashboard to see changes.', components: [] });
            setTimeout(() => interaction.deleteReply().catch(() => { }), 5000);
            return;
        }
        if (interaction.isChannelSelectMenu() && interaction.customId === 'ticket-setup-transcript-select') {
            const channelId = interaction.values[0];
            await prisma_1.prisma.guildConfig.upsert({
                where: { guildId: interaction.guildId },
                update: { logChannelId: channelId },
                create: {
                    guildId: interaction.guildId,
                    logChannelId: channelId
                }
            });
            await interaction.update({ content: `Transcript channel set to <#${channelId}>! Click "Refresh" on the dashboard to see changes.`, components: [] });
            setTimeout(() => interaction.deleteReply().catch(() => { }), 5000);
            return;
        }
    }
}
exports.TicketSetupSelectHandler = TicketSetupSelectHandler;
//# sourceMappingURL=ticketSetupSelects.js.map