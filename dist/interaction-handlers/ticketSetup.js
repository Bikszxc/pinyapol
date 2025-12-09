"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketSetupSelectHandler = exports.TicketSetupModalHandler = exports.TicketSetupHandler = void 0;
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
            case 'ticket-setup-add-cat':
                await this.handleAddCategory(interaction);
                break;
            case 'ticket-setup-rem-cat':
                await this.handleRemoveCategoryPrompt(interaction);
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
    async handleRefresh(interaction) {
        await interaction.deferUpdate(); // Acknowledge button press
        const settings = await prisma_1.prisma.ticketSettings.findUnique({
            where: { guildId: interaction.guildId },
            include: { categories: true }
        });
        if (!settings)
            return;
        const embed = new discord_js_1.EmbedBuilder()
            .setColor('Blue')
            .setTitle('🎫 Ticket System Dashboard')
            .setDescription('Configure your server\'s ticket system here.')
            .addFields({ name: '📄 Welcome Message', value: settings.welcomeMessage || 'Default: "Hello! Please describe your issue."' }, {
            name: '📂 Categories',
            value: settings.categories.length > 0
                ? settings.categories.map(c => `• ${c.emoji || ''} **${c.name}** (Role: ${c.roleId ? `<@&${c.roleId}>` : 'None'})`).join('\n')
                : 'No categories set (Default ticket mode.)'
        })
            .setFooter({ text: 'Use the buttons below to modify settings.' });
        const row1 = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
            .setCustomId('ticket-setup-msg')
            .setLabel('Edit Message')
            .setStyle(discord_js_1.ButtonStyle.Primary)
            .setEmoji('✏️'), new discord_js_1.ButtonBuilder()
            .setCustomId('ticket-setup-add-cat')
            .setLabel('Add Category')
            .setStyle(discord_js_1.ButtonStyle.Success)
            .setEmoji('➕'), new discord_js_1.ButtonBuilder()
            .setCustomId('ticket-setup-rem-cat')
            .setLabel('Remove Category')
            .setStyle(discord_js_1.ButtonStyle.Danger)
            .setEmoji('➖')
            .setDisabled(settings.categories.length === 0), new discord_js_1.ButtonBuilder()
            .setCustomId('ticket-setup-refresh')
            .setLabel('Refresh')
            .setStyle(discord_js_1.ButtonStyle.Secondary)
            .setEmoji('🔄'));
        await interaction.editReply({ embeds: [embed], components: [row1] });
    }
}
exports.TicketSetupHandler = TicketSetupHandler;
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
            return interaction.reply({ content: 'Welcome message updated! Click "Refresh" on the dashboard to see changes.', flags: [discord_js_1.MessageFlags.Ephemeral] });
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
            return interaction.reply({ content: `Category "**${name}**" added! Click "Refresh" on the dashboard to see changes.`, flags: [discord_js_1.MessageFlags.Ephemeral] });
        }
    }
}
exports.TicketSetupModalHandler = TicketSetupModalHandler;
class TicketSetupSelectHandler extends framework_1.InteractionHandler {
    constructor(ctx, options) {
        super(ctx, {
            ...options,
            interactionHandlerType: framework_1.InteractionHandlerTypes.SelectMenu
        });
    }
    parse(interaction) {
        if (interaction.customId !== 'ticket-setup-rem-cat-select') {
            return this.none();
        }
        return this.some();
    }
    async run(interaction) {
        const categoryId = interaction.values[0];
        await prisma_1.prisma.ticketCategory.delete({
            where: { id: categoryId }
        });
        return interaction.update({ content: 'Category removed! Click "Refresh" on the dashboard to see changes.', components: [] });
    }
}
exports.TicketSetupSelectHandler = TicketSetupSelectHandler;
//# sourceMappingURL=ticketSetup.js.map