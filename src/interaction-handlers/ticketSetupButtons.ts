import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import {
    ActionRowBuilder,
    ButtonInteraction,
    ButtonStyle,
    EmbedBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    StringSelectMenuBuilder,
    ButtonBuilder,
    MessageFlags,
    ChannelSelectMenuBuilder,
    ChannelType
} from 'discord.js';
import { prisma } from '../lib/prisma';

export class TicketSetupHandler extends InteractionHandler {
    public constructor(ctx: InteractionHandler.LoaderContext, options: InteractionHandler.Options) {
        super(ctx, {
            ...options,
            interactionHandlerType: InteractionHandlerTypes.Button
        });
    }

    public override parse(interaction: ButtonInteraction) {
        if (!interaction.customId.startsWith('ticket-setup-')) {
            return this.none();
        }
        return this.some();
    }

    public async run(interaction: ButtonInteraction) {
        if (!interaction.guildId) return;

        switch (interaction.customId) {
            case 'ticket-setup-msg':
                await this.handleEditMessage(interaction);
                break;
            case 'ticket-setup-panel-msg': // New case
                await this.handleEditPanelMessage(interaction);
                break;
            case 'ticket-setup-add-cat':
                await this.handleAddCategory(interaction);
                break;
            case 'ticket-setup-rem-cat':
                await this.handleRemoveCategoryPrompt(interaction);
                break;
            case 'ticket-setup-transcript':
                await this.handleTranscriptChannelPrompt(interaction);
                break;
            case 'ticket-setup-refresh':
                await this.handleRefresh(interaction);
                break;
        }
    }

    private async handleEditMessage(interaction: ButtonInteraction) {
        const modal = new ModalBuilder()
            .setCustomId('ticket-setup-msg-modal')
            .setTitle('Edit Welcome Message');

        const messageInput = new TextInputBuilder()
            .setCustomId('message')
            .setLabel('Welcome Message')
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Enter message... Use {user} for user mention, {role} for role mention.')
            .setRequired(true);

        const row = new ActionRowBuilder<TextInputBuilder>().addComponents(messageInput);
        modal.addComponents(row);

        await interaction.showModal(modal);
    }

    private async handleEditPanelMessage(interaction: ButtonInteraction) {
        const modal = new ModalBuilder()
            .setCustomId('ticket-setup-panel-msg-modal')
            .setTitle('Edit Panel Message');

        const messageInput = new TextInputBuilder()
            .setCustomId('message')
            .setLabel('Ticket Panel Message')
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Message shown on the ticket creation panel.')
            .setRequired(true);

        const row = new ActionRowBuilder<TextInputBuilder>().addComponents(messageInput);
        modal.addComponents(row);

        await interaction.showModal(modal);
    }

    private async handleAddCategory(interaction: ButtonInteraction) {
        const modal = new ModalBuilder()
            .setCustomId('ticket-setup-add-cat-modal')
            .setTitle('Add Ticket Category');

        const nameInput = new TextInputBuilder()
            .setCustomId('name')
            .setLabel('Category Name')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('e.g., General Support')
            .setRequired(true);

        const emojiInput = new TextInputBuilder()
            .setCustomId('emoji')
            .setLabel('Emoji (Optional)')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('e.g., 🛡️')
            .setRequired(false);

        const roleIdInput = new TextInputBuilder()
            .setCustomId('roleId')
            .setLabel('Role ID to Ping (Optional)')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('e.g., 878242949115310110')
            .setRequired(false);

        const row1 = new ActionRowBuilder<TextInputBuilder>().addComponents(nameInput);
        const row2 = new ActionRowBuilder<TextInputBuilder>().addComponents(emojiInput);
        const row3 = new ActionRowBuilder<TextInputBuilder>().addComponents(roleIdInput);

        modal.addComponents(row1, row2, row3);

        await interaction.showModal(modal);
    }

    private async handleRemoveCategoryPrompt(interaction: ButtonInteraction) {
        const categories = await prisma.ticketCategory.findMany({
            where: { ticketSettings: { guildId: interaction.guildId! } }
        });

        if (categories.length === 0) {
            return interaction.reply({ content: 'No categories to remove.', flags: [MessageFlags.Ephemeral] });
        }

        const selectMenu = new StringSelectMenuBuilder()
            .setCustomId('ticket-setup-rem-cat-select')
            .setPlaceholder('Select a category to remove')
            .addOptions(
                categories.map((c) => ({
                    label: c.name,
                    value: c.id,
                    emoji: c.emoji || undefined
                }))
            );

        const row = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(selectMenu);

        return interaction.reply({
            content: 'Select a category to remove:',
            components: [row],
            flags: [MessageFlags.Ephemeral]
        });
    }

    private async handleTranscriptChannelPrompt(interaction: ButtonInteraction) {
        const channelSelect = new ChannelSelectMenuBuilder()
            .setCustomId('ticket-setup-transcript-select')
            .setPlaceholder('Select a channel for transcripts')
            .setChannelTypes([ChannelType.GuildText]);

        const row = new ActionRowBuilder<ChannelSelectMenuBuilder>().addComponents(channelSelect);

        return interaction.reply({
            content: 'Select the channel where ticket transcripts should be sent:',
            components: [row],
            flags: [MessageFlags.Ephemeral]
        });
    }

    private async handleRefresh(interaction: ButtonInteraction) {
        await interaction.deferUpdate(); // Acknowledge button press

        const settings = await prisma.ticketSettings.findUnique({
            where: { guildId: interaction.guildId! },
            include: { categories: true }
        });

        const guildConfig = await prisma.guildConfig.findUnique({
            where: { guildId: interaction.guildId! }
        });

        if (!settings) return;

        const embed = new EmbedBuilder()
            .setColor('Blue')
            .setTitle('🎫 Ticket System Dashboard')
            .setDescription('Configure your server\'s ticket system here.')
            .addFields(
                { name: '📄 Welcome Message', value: settings.welcomeMessage || 'Default: "Hello! Please describe your issue."' },
                { name: '💬 Panel Message', value: settings.ticketPanelMessage || 'Default: "Click the button below to open a new support ticket."' }, // New field
                {
                    name: '📂 Categories',
                    value: settings.categories.length > 0
                        ? settings.categories.map(c => `• ${c.emoji || ''} **${c.name}** (Role: ${c.roleId ? `<@&${c.roleId}>` : 'None'})`).join('\n')
                        : 'No categories set (Default ticket mode.)'
                },
                {
                    name: '📝 Transcript Channel',
                    value: guildConfig?.logChannelId ? `<#${guildConfig.logChannelId}>` : 'Not set'
                }
            )
            .setFooter({ text: 'Use the buttons below to modify settings.' });

         const row1 = new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setCustomId('ticket-setup-msg')
                .setLabel('Edit Welcome Msg')
                .setStyle(ButtonStyle.Primary)
                .setEmoji('✏️'),
            new ButtonBuilder()
                .setCustomId('ticket-setup-panel-msg') // New Button
                .setLabel('Edit Panel Msg')
                .setStyle(ButtonStyle.Primary)
                .setEmoji('💬'),
            new ButtonBuilder()
                .setCustomId('ticket-setup-add-cat')
                .setLabel('Add Category')
                .setStyle(ButtonStyle.Success)
                .setEmoji('➕')
        );

        const row2 = new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setCustomId('ticket-setup-rem-cat')
                .setLabel('Remove Category')
                .setStyle(ButtonStyle.Danger)
                .setEmoji('➖')
                .setDisabled(settings.categories.length === 0),
            new ButtonBuilder()
                .setCustomId('ticket-setup-transcript')
                .setLabel('Transcript Channel')
                .setStyle(ButtonStyle.Secondary)
                .setEmoji('📜'),
            new ButtonBuilder()
                .setCustomId('ticket-setup-refresh')
                .setLabel('Refresh')
                .setStyle(ButtonStyle.Secondary)
                .setEmoji('🔄')
        );

        await interaction.editReply({ embeds: [embed], components: [row1, row2] });
    }
}
