import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import {
    ActionRowBuilder,
    ButtonInteraction,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    EmbedBuilder,
    ChannelSelectMenuBuilder,
    ChannelType,
    StringSelectMenuBuilder,
    MessageFlags,
    ButtonBuilder,
    ButtonStyle
} from 'discord.js';
import { prisma } from '../lib/prisma';

// Helper to recreate the main builder buttons
export function getBuilderButtons() {
    const row1 = new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder().setCustomId('embed-edit-title').setLabel('Title').setStyle(ButtonStyle.Secondary),
        new ButtonBuilder().setCustomId('embed-edit-desc').setLabel('Description').setStyle(ButtonStyle.Secondary),
        new ButtonBuilder().setCustomId('embed-edit-color').setLabel('Color').setStyle(ButtonStyle.Secondary),
        new ButtonBuilder().setCustomId('embed-edit-author').setLabel('Author').setStyle(ButtonStyle.Secondary),
        new ButtonBuilder().setCustomId('embed-edit-footer').setLabel('Footer').setStyle(ButtonStyle.Secondary)
    );

    const row2 = new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder().setCustomId('embed-edit-image').setLabel('Image').setStyle(ButtonStyle.Secondary),
        new ButtonBuilder().setCustomId('embed-edit-thumb').setLabel('Thumbnail').setStyle(ButtonStyle.Secondary),
        new ButtonBuilder().setCustomId('embed-add-field').setLabel('Add Field').setStyle(ButtonStyle.Success),
        new ButtonBuilder().setCustomId('embed-clear-fields').setLabel('Clear Fields').setStyle(ButtonStyle.Danger)
    );

    const row3 = new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder().setCustomId('embed-save').setLabel('Save').setStyle(ButtonStyle.Primary).setEmoji('💾'),
        new ButtonBuilder().setCustomId('embed-load').setLabel('Load').setStyle(ButtonStyle.Primary).setEmoji('📂'),
        new ButtonBuilder().setCustomId('embed-send').setLabel('Send').setStyle(ButtonStyle.Success).setEmoji('🚀'),
        new ButtonBuilder().setCustomId('embed-bind').setLabel('Bind Command').setStyle(ButtonStyle.Danger).setEmoji('🔗')
    );
    return [row1, row2, row3];
}

export class EmbedBuilderButtonHandler extends InteractionHandler {
    public constructor(ctx: InteractionHandler.LoaderContext, options: InteractionHandler.Options) {
        super(ctx, {
            ...options,
            interactionHandlerType: InteractionHandlerTypes.Button
        });
    }

    public override parse(interaction: ButtonInteraction) {
        if (!interaction.customId.startsWith('embed-')) return this.none();
        this.container.logger.debug(`[EmbedBuilderButton] Parsing ${interaction.customId}`);
        return this.some();
    }

    public async run(interaction: ButtonInteraction) {
        this.container.logger.debug(`[EmbedBuilderButton] Running ${interaction.customId}`);
        try {
            // Cancel Button (Returns to main menu)
            if (interaction.customId === 'embed-cancel') {
                return await interaction.update({ components: getBuilderButtons() });
            }

            // Send Button -> Show Channel Select
            if (interaction.customId === 'embed-send') {
                const channelSelect = new ChannelSelectMenuBuilder()
                    .setCustomId('embed-send-select')
                    .setPlaceholder('Select a channel to send this embed')
                    .setChannelTypes([ChannelType.GuildText]);
                
                const row = new ActionRowBuilder<ChannelSelectMenuBuilder>().addComponents(channelSelect);
                const cancelRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
                    new ButtonBuilder().setCustomId('embed-cancel').setLabel('Cancel').setStyle(ButtonStyle.Secondary)
                );
                
                return await interaction.update({ components: [row, cancelRow] });
            }

            // Load Button -> Show Saved Embeds Select
            if (interaction.customId === 'embed-load') {
                const embeds = await prisma.customEmbed.findMany({ where: { guildId: interaction.guildId! } });
                if (embeds.length === 0) return await interaction.reply({ content: 'No saved embeds found.', flags: [MessageFlags.Ephemeral] });
                
                const select = new StringSelectMenuBuilder()
                    .setCustomId('embed-load-select')
                    .setPlaceholder('Select an embed to load')
                    .addOptions(embeds.map(e => ({ label: e.name, value: e.id })));
                
                const row = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select);
                const cancelRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
                    new ButtonBuilder().setCustomId('embed-cancel').setLabel('Cancel').setStyle(ButtonStyle.Secondary)
                );

                return await interaction.update({ components: [row, cancelRow] });
            }

            // Save Button (Modal)
            if (interaction.customId === 'embed-save') {
                const modal = new ModalBuilder().setCustomId('embed-save-modal').setTitle('Save Embed Preset');
                const input = new TextInputBuilder().setCustomId('name').setLabel('Preset Name').setStyle(TextInputStyle.Short).setRequired(true);
                modal.addComponents(new ActionRowBuilder<TextInputBuilder>().addComponents(input));
                return await interaction.showModal(modal);
            }

            // Bind Button (Modal)
            if (interaction.customId === 'embed-bind') {
                const modal = new ModalBuilder().setCustomId('embed-bind-modal').setTitle('Bind to Slash Command');
                const triggerInput = new TextInputBuilder().setCustomId('trigger').setLabel('Command Name (e.g. rules)').setStyle(TextInputStyle.Short).setRequired(true);
                const descInput = new TextInputBuilder().setCustomId('description').setLabel('Description').setStyle(TextInputStyle.Short).setRequired(true);
                modal.addComponents(
                    new ActionRowBuilder<TextInputBuilder>().addComponents(triggerInput),
                    new ActionRowBuilder<TextInputBuilder>().addComponents(descInput)
                );
                return await interaction.showModal(modal);
            }

            // Clear Fields (Immediate)
            if (interaction.customId === 'embed-clear-fields') {
                const oldEmbed = interaction.message.embeds[0];
                const newEmbed = EmbedBuilder.from(oldEmbed).setFields([]);
                return await interaction.update({ embeds: [newEmbed] });
            }

            // Modals for Editing
            const modal = new ModalBuilder();
            const input = new TextInputBuilder().setStyle(TextInputStyle.Short);

            switch (interaction.customId) {
                case 'embed-edit-title':
                    modal.setCustomId('embed-edit-title-modal').setTitle('Edit Title');
                    input.setCustomId('value').setLabel('Title').setRequired(false);
                    break;
                case 'embed-edit-desc':
                    modal.setCustomId('embed-edit-desc-modal').setTitle('Edit Description');
                    input.setCustomId('value').setLabel('Description').setStyle(TextInputStyle.Paragraph).setRequired(false);
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
                    const nameInput = new TextInputBuilder().setCustomId('name').setLabel('Field Name').setStyle(TextInputStyle.Short).setRequired(true);
                    const valueInput = new TextInputBuilder().setCustomId('value').setLabel('Field Value').setStyle(TextInputStyle.Paragraph).setRequired(true);
                    const inlineInput = new TextInputBuilder().setCustomId('inline').setLabel('Inline? (true/false)').setStyle(TextInputStyle.Short).setRequired(false);
                    modal.addComponents(
                        new ActionRowBuilder<TextInputBuilder>().addComponents(nameInput),
                        new ActionRowBuilder<TextInputBuilder>().addComponents(valueInput),
                        new ActionRowBuilder<TextInputBuilder>().addComponents(inlineInput)
                    );
                    return await interaction.showModal(modal);
                default:
                    return;
            }

            modal.addComponents(new ActionRowBuilder<TextInputBuilder>().addComponents(input));
            await interaction.showModal(modal);
        } catch (error) {
            this.container.logger.error(`[EmbedBuilderButton] Error:`, error);
        }
    }
}
