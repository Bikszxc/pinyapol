"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketSetupHandler = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const prisma_1 = require("../lib/prisma");
class TicketSetupHandler extends framework_1.InteractionHandler {
    constructor(ctx, options) {
        super(ctx, {
            ...options,
            interactionHandlerType: framework_1.InteractionHandlerTypes.Button
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
    async handleEditMessage(interaction) {
        const modal = new discord_js_1.ModalBuilder()
            .setCustomId('ticket-setup-msg-modal')
            .setTitle('Edit Welcome Message');
        const messageInput = new discord_js_1.TextInputBuilder()
            .setCustomId('message')
            .setLabel('Welcome Message')
            .setStyle(discord_js_1.TextInputStyle.Paragraph)
            .setPlaceholder('Enter message... Use {user} for user mention, {role} for role mention.')
            .setRequired(true);
        const row = new discord_js_1.ActionRowBuilder().addComponents(messageInput);
        modal.addComponents(row);
        await interaction.showModal(modal);
    }
    async handleEditPanelMessage(interaction) {
        const modal = new discord_js_1.ModalBuilder()
            .setCustomId('ticket-setup-panel-msg-modal')
            .setTitle('Edit Panel Message');
        const messageInput = new discord_js_1.TextInputBuilder()
            .setCustomId('message')
            .setLabel('Ticket Panel Message')
            .setStyle(discord_js_1.TextInputStyle.Paragraph)
            .setPlaceholder('Message shown on the ticket creation panel.')
            .setRequired(true);
        const row = new discord_js_1.ActionRowBuilder().addComponents(messageInput);
        modal.addComponents(row);
        await interaction.showModal(modal);
    }
    async handleAddCategory(interaction) {
        const modal = new discord_js_1.ModalBuilder()
            .setCustomId('ticket-setup-add-cat-modal')
            .setTitle('Add Ticket Category');
        const nameInput = new discord_js_1.TextInputBuilder()
            .setCustomId('name')
            .setLabel('Category Name')
            .setStyle(discord_js_1.TextInputStyle.Short)
            .setPlaceholder('e.g., General Support')
            .setRequired(true);
        const emojiInput = new discord_js_1.TextInputBuilder()
            .setCustomId('emoji')
            .setLabel('Emoji (Optional)')
            .setStyle(discord_js_1.TextInputStyle.Short)
            .setPlaceholder('e.g., 🛡️')
            .setRequired(false);
        const roleIdInput = new discord_js_1.TextInputBuilder()
            .setCustomId('roleId')
            .setLabel('Role ID to Ping (Optional)')
            .setStyle(discord_js_1.TextInputStyle.Short)
            .setPlaceholder('e.g., 878242949115310110')
            .setRequired(false);
        const row1 = new discord_js_1.ActionRowBuilder().addComponents(nameInput);
        const row2 = new discord_js_1.ActionRowBuilder().addComponents(emojiInput);
        const row3 = new discord_js_1.ActionRowBuilder().addComponents(roleIdInput);
        modal.addComponents(row1, row2, row3);
        await interaction.showModal(modal);
    }
    async handleRemoveCategoryPrompt(interaction) {
        const categories = await prisma_1.prisma.ticketCategory.findMany({
            where: { ticketSettings: { guildId: interaction.guildId } }
        });
        if (categories.length === 0) {
            return interaction.reply({ content: 'No categories to remove.', flags: [discord_js_1.MessageFlags.Ephemeral] });
        }
        const selectMenu = new discord_js_1.StringSelectMenuBuilder()
            .setCustomId('ticket-setup-rem-cat-select')
            .setPlaceholder('Select a category to remove')
            .addOptions(categories.map((c) => ({
            label: c.name,
            value: c.id,
            emoji: c.emoji || undefined
        })));
        const row = new discord_js_1.ActionRowBuilder().addComponents(selectMenu);
        return interaction.reply({
            content: 'Select a category to remove:',
            components: [row],
            flags: [discord_js_1.MessageFlags.Ephemeral]
        });
    }
    async handleTranscriptChannelPrompt(interaction) {
        const channelSelect = new discord_js_1.ChannelSelectMenuBuilder()
            .setCustomId('ticket-setup-transcript-select')
            .setPlaceholder('Select a channel for transcripts')
            .setChannelTypes([discord_js_1.ChannelType.GuildText]);
        const row = new discord_js_1.ActionRowBuilder().addComponents(channelSelect);
        return interaction.reply({
            content: 'Select the channel where ticket transcripts should be sent:',
            components: [row],
            flags: [discord_js_1.MessageFlags.Ephemeral]
        });
    }
    async handleRefresh(interaction) {
        await interaction.deferUpdate(); // Acknowledge button press
        const settings = await prisma_1.prisma.ticketSettings.findUnique({
            where: { guildId: interaction.guildId },
            include: { categories: true }
        });
        const guildConfig = await prisma_1.prisma.guildConfig.findUnique({
            where: { guildId: interaction.guildId }
        });
        if (!settings)
            return;
        const embed = new discord_js_1.EmbedBuilder()
            .setColor('Blue')
            .setTitle('🎫 Ticket System Dashboard')
            .setDescription('Configure your server\'s ticket system here.')
            .addFields({ name: '📄 Welcome Message', value: settings.welcomeMessage || 'Default: "Hello! Please describe your issue."' }, { name: '💬 Panel Message', value: settings.ticketPanelMessage || 'Default: "Click the button below to open a new support ticket."' }, // New field
        {
            name: '📂 Categories',
            value: settings.categories.length > 0
                ? settings.categories.map(c => `• ${c.emoji || ''} **${c.name}** (Role: ${c.roleId ? `<@&${c.roleId}>` : 'None'})`).join('\n')
                : 'No categories set (Default ticket mode.)'
        }, {
            name: '📝 Transcript Channel',
            value: (guildConfig === null || guildConfig === void 0 ? void 0 : guildConfig.logChannelId) ? `<#${guildConfig.logChannelId}>` : 'Not set'
        })
            .setFooter({ text: 'Use the buttons below to modify settings.' });
        const row1 = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
            .setCustomId('ticket-setup-msg')
            .setLabel('Edit Welcome Msg')
            .setStyle(discord_js_1.ButtonStyle.Primary)
            .setEmoji('✏️'), new discord_js_1.ButtonBuilder()
            .setCustomId('ticket-setup-panel-msg') // New Button
            .setLabel('Edit Panel Msg')
            .setStyle(discord_js_1.ButtonStyle.Primary)
            .setEmoji('💬'), new discord_js_1.ButtonBuilder()
            .setCustomId('ticket-setup-add-cat')
            .setLabel('Add Category')
            .setStyle(discord_js_1.ButtonStyle.Success)
            .setEmoji('➕'));
        const row2 = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
            .setCustomId('ticket-setup-rem-cat')
            .setLabel('Remove Category')
            .setStyle(discord_js_1.ButtonStyle.Danger)
            .setEmoji('➖')
            .setDisabled(settings.categories.length === 0), new discord_js_1.ButtonBuilder()
            .setCustomId('ticket-setup-transcript')
            .setLabel('Transcript Channel')
            .setStyle(discord_js_1.ButtonStyle.Secondary)
            .setEmoji('📜'), new discord_js_1.ButtonBuilder()
            .setCustomId('ticket-setup-refresh')
            .setLabel('Refresh')
            .setStyle(discord_js_1.ButtonStyle.Secondary)
            .setEmoji('🔄'));
        await interaction.editReply({ embeds: [embed], components: [row1, row2] });
    }
}
exports.TicketSetupHandler = TicketSetupHandler;
//# sourceMappingURL=ticketSetupButtons.js.map