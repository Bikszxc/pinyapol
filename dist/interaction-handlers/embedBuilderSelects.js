"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedBuilderSelectHandler = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const prisma_1 = require("../lib/prisma");
const embedBuilderButtons_1 = require("./embedBuilderButtons");
class EmbedBuilderSelectHandler extends framework_1.InteractionHandler {
    constructor(ctx, options) {
        super(ctx, {
            ...options,
            interactionHandlerType: framework_1.InteractionHandlerTypes.SelectMenu
        });
    }
    parse(interaction) {
        if (!interaction.customId.startsWith('embed-'))
            return this.none();
        return this.some();
    }
    async run(interaction) {
        if (interaction.isChannelSelectMenu() && interaction.customId === 'embed-send-select') {
            const channel = interaction.channels.first();
            const embed = interaction.message.embeds[0];
            try {
                await channel.send({ embeds: [embed] });
                await interaction.reply({ content: `Embed sent to ${channel}!`, flags: [discord_js_1.MessageFlags.Ephemeral] });
                setTimeout(() => interaction.deleteReply().catch(() => { }), 5000);
                // Restore buttons
                await interaction.message.edit({ components: (0, embedBuilderButtons_1.getBuilderButtons)() });
            }
            catch (error) {
                await interaction.reply({ content: 'Failed to send embed. Check permissions.', flags: [discord_js_1.MessageFlags.Ephemeral] });
            }
        }
        if (interaction.isStringSelectMenu() && interaction.customId === 'embed-load-select') {
            const id = interaction.values[0];
            const saved = await prisma_1.prisma.customEmbed.findUnique({ where: { id } });
            if (!saved) {
                await interaction.reply({ content: 'Embed not found.', flags: [discord_js_1.MessageFlags.Ephemeral] });
                setTimeout(() => interaction.deleteReply().catch(() => { }), 5000);
                return;
            }
            const loadedEmbed = new discord_js_1.EmbedBuilder(saved.data);
            await interaction.update({ embeds: [loadedEmbed], components: (0, embedBuilderButtons_1.getBuilderButtons)() });
        }
    }
}
exports.EmbedBuilderSelectHandler = EmbedBuilderSelectHandler;
//# sourceMappingURL=embedBuilderSelects.js.map