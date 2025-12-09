"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedBuilderButtonHandler = void 0;
exports.getBuilderButtons = getBuilderButtons;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const prisma_1 = require("../lib/prisma");
// Helper to recreate the main builder buttons
function getBuilderButtons() {
    const row1 = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder().setCustomId('embed-edit-title').setLabel('Title').setStyle(discord_js_1.ButtonStyle.Secondary), new discord_js_1.ButtonBuilder().setCustomId('embed-edit-desc').setLabel('Description').setStyle(discord_js_1.ButtonStyle.Secondary), new discord_js_1.ButtonBuilder().setCustomId('embed-edit-color').setLabel('Color').setStyle(discord_js_1.ButtonStyle.Secondary), new discord_js_1.ButtonBuilder().setCustomId('embed-edit-author').setLabel('Author').setStyle(discord_js_1.ButtonStyle.Secondary), new discord_js_1.ButtonBuilder().setCustomId('embed-edit-footer').setLabel('Footer').setStyle(discord_js_1.ButtonStyle.Secondary));
    const row2 = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder().setCustomId('embed-edit-image').setLabel('Image').setStyle(discord_js_1.ButtonStyle.Secondary), new discord_js_1.ButtonBuilder().setCustomId('embed-edit-thumb').setLabel('Thumbnail').setStyle(discord_js_1.ButtonStyle.Secondary), new discord_js_1.ButtonBuilder().setCustomId('embed-add-field').setLabel('Add Field').setStyle(discord_js_1.ButtonStyle.Success), new discord_js_1.ButtonBuilder().setCustomId('embed-clear-fields').setLabel('Clear Fields').setStyle(discord_js_1.ButtonStyle.Danger));
    const row3 = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder().setCustomId('embed-save').setLabel('Save').setStyle(discord_js_1.ButtonStyle.Primary).setEmoji('💾'), new discord_js_1.ButtonBuilder().setCustomId('embed-load').setLabel('Load').setStyle(discord_js_1.ButtonStyle.Primary).setEmoji('📂'), new discord_js_1.ButtonBuilder().setCustomId('embed-send').setLabel('Send').setStyle(discord_js_1.ButtonStyle.Success).setEmoji('🚀'), new discord_js_1.ButtonBuilder().setCustomId('embed-bind').setLabel('Bind Command').setStyle(discord_js_1.ButtonStyle.Danger).setEmoji('🔗'));
    return [row1, row2, row3];
}
class EmbedBuilderButtonHandler extends framework_1.InteractionHandler {
    constructor(ctx, options) {
        super(ctx, {
            ...options,
            interactionHandlerType: framework_1.InteractionHandlerTypes.Button
        });
    }
    parse(interaction) {
        if (!interaction.customId.startsWith('embed-'))
            return this.none();
        this.container.logger.debug(`[EmbedBuilderButton] Parsing ${interaction.customId}`);
        return this.some();
    }
    async run(interaction) {
        this.container.logger.debug(`[EmbedBuilderButton] Running ${interaction.customId}`);
        try {
            // Cancel Button (Returns to main menu)
            if (interaction.customId === 'embed-cancel') {
                return await interaction.update({ components: getBuilderButtons() });
            }
            // Send Button -> Show Channel Select
            if (interaction.customId === 'embed-send') {
                const channelSelect = new discord_js_1.ChannelSelectMenuBuilder()
                    .setCustomId('embed-send-select')
                    .setPlaceholder('Select a channel to send this embed')
                    .setChannelTypes([discord_js_1.ChannelType.GuildText]);
                const row = new discord_js_1.ActionRowBuilder().addComponents(channelSelect);
                const cancelRow = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder().setCustomId('embed-cancel').setLabel('Cancel').setStyle(discord_js_1.ButtonStyle.Secondary));
                return await interaction.update({ components: [row, cancelRow] });
            }
            // Load Button -> Show Saved Embeds Select
            if (interaction.customId === 'embed-load') {
                const embeds = await prisma_1.prisma.customEmbed.findMany({ where: { guildId: interaction.guildId } });
                if (embeds.length === 0)
                    return await interaction.reply({ content: 'No saved embeds found.', flags: [discord_js_1.MessageFlags.Ephemeral] });
                const select = new discord_js_1.StringSelectMenuBuilder()
                    .setCustomId('embed-load-select')
                    .setPlaceholder('Select an embed to load')
                    .addOptions(embeds.map(e => ({ label: e.name, value: e.id })));
                const row = new discord_js_1.ActionRowBuilder().addComponents(select);
                const cancelRow = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder().setCustomId('embed-cancel').setLabel('Cancel').setStyle(discord_js_1.ButtonStyle.Secondary));
                return await interaction.update({ components: [row, cancelRow] });
            }
            // Save Button (Modal)
            if (interaction.customId === 'embed-save') {
                const modal = new discord_js_1.ModalBuilder().setCustomId('embed-save-modal').setTitle('Save Embed Preset');
                const input = new discord_js_1.TextInputBuilder().setCustomId('name').setLabel('Preset Name').setStyle(discord_js_1.TextInputStyle.Short).setRequired(true);
                modal.addComponents(new discord_js_1.ActionRowBuilder().addComponents(input));
                return await interaction.showModal(modal);
            }
            // Bind Button (Modal)
            if (interaction.customId === 'embed-bind') {
                const modal = new discord_js_1.ModalBuilder().setCustomId('embed-bind-modal').setTitle('Bind to Slash Command');
                const triggerInput = new discord_js_1.TextInputBuilder().setCustomId('trigger').setLabel('Command Name (e.g. rules)').setStyle(discord_js_1.TextInputStyle.Short).setRequired(true);
                const descInput = new discord_js_1.TextInputBuilder().setCustomId('description').setLabel('Description').setStyle(discord_js_1.TextInputStyle.Short).setRequired(true);
                modal.addComponents(new discord_js_1.ActionRowBuilder().addComponents(triggerInput), new discord_js_1.ActionRowBuilder().addComponents(descInput));
                return await interaction.showModal(modal);
            }
            // Clear Fields (Immediate)
            if (interaction.customId === 'embed-clear-fields') {
                const oldEmbed = interaction.message.embeds[0];
                const newEmbed = discord_js_1.EmbedBuilder.from(oldEmbed).setFields([]);
                return await interaction.update({ embeds: [newEmbed] });
            }
            // Modals for Editing
            const modal = new discord_js_1.ModalBuilder();
            const input = new discord_js_1.TextInputBuilder().setStyle(discord_js_1.TextInputStyle.Short);
            switch (interaction.customId) {
                case 'embed-edit-title':
                    modal.setCustomId('embed-edit-title-modal').setTitle('Edit Title');
                    input.setCustomId('value').setLabel('Title').setRequired(false);
                    break;
                case 'embed-edit-desc':
                    modal.setCustomId('embed-edit-desc-modal').setTitle('Edit Description');
                    input.setCustomId('value').setLabel('Description').setStyle(discord_js_1.TextInputStyle.Paragraph).setRequired(false);
                    break;
                case 'embed-edit-color':
                    modal.setCustomId('embed-edit-color-modal').setTitle('Edit Color');
                    input.setCustomId('value').setLabel('Hex Color (e.g. #FF0000)').setRequired(true);
                    break;
                case 'embed-edit-author':
                    modal.setCustomId('embed-edit-author-modal').setTitle('Edit Author');
                    input.setCustomId('value').setLabel('Author Name').setRequired(false);
                    break;
                case 'embed-edit-footer':
                    modal.setCustomId('embed-edit-footer-modal').setTitle('Edit Footer');
                    input.setCustomId('value').setLabel('Footer Text').setRequired(false);
                    break;
                case 'embed-edit-image':
                    modal.setCustomId('embed-edit-image-modal').setTitle('Edit Image');
                    input.setCustomId('value').setLabel('Image URL').setRequired(false);
                    break;
                case 'embed-edit-thumb':
                    modal.setCustomId('embed-edit-thumb-modal').setTitle('Edit Thumbnail');
                    input.setCustomId('value').setLabel('Thumbnail URL').setRequired(false);
                    break;
                case 'embed-add-field':
                    modal.setCustomId('embed-add-field-modal').setTitle('Add Field');
                    const nameInput = new discord_js_1.TextInputBuilder().setCustomId('name').setLabel('Field Name').setStyle(discord_js_1.TextInputStyle.Short).setRequired(true);
                    const valueInput = new discord_js_1.TextInputBuilder().setCustomId('value').setLabel('Field Value').setStyle(discord_js_1.TextInputStyle.Paragraph).setRequired(true);
                    const inlineInput = new discord_js_1.TextInputBuilder().setCustomId('inline').setLabel('Inline? (true/false)').setStyle(discord_js_1.TextInputStyle.Short).setRequired(false);
                    modal.addComponents(new discord_js_1.ActionRowBuilder().addComponents(nameInput), new discord_js_1.ActionRowBuilder().addComponents(valueInput), new discord_js_1.ActionRowBuilder().addComponents(inlineInput));
                    return await interaction.showModal(modal);
                default:
                    return;
            }
            modal.addComponents(new discord_js_1.ActionRowBuilder().addComponents(input));
            await interaction.showModal(modal);
        }
        catch (error) {
            this.container.logger.error(`[EmbedBuilderButton] Error:`, error);
        }
    }
}
exports.EmbedBuilderButtonHandler = EmbedBuilderButtonHandler;
//# sourceMappingURL=embedBuilderButtons.js.map