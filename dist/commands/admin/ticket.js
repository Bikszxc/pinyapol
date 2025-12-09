"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketCommand = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const prisma_1 = require("../../lib/prisma");
const checkAdmin_1 = require("../../lib/checkAdmin");
class TicketCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'ticket',
            description: 'Manage the modern ticket system for your server.'
        });
    }
    registerApplicationCommands(registry) {
        registry.registerChatInputCommand((builder) => builder
            .setName(this.name)
            .setDescription(this.description)
            .addSubcommand((command) => command
            .setName('setup')
            .setDescription('Open the interactive ticket system configuration dashboard.'))
            .addSubcommand((command) => command
            .setName('panel')
            .setDescription('Send the ticket creation panel to a specified channel.')
            .addChannelOption((option) => option
            .setName('channel')
            .setDescription('The channel where the ticket panel will be sent.')
            .setRequired(true))), { guildIds: ['878242949115310110', '1430185547619500074'] } // Your actual Guild ID
        );
    }
    async chatInputRun(interaction) {
        if (!interaction.guildId) {
            return interaction.reply({ content: 'This command can only be used in a server.', flags: [discord_js_1.MessageFlags.Ephemeral] });
        }
        if (!(await (0, checkAdmin_1.checkAdminAndReply)(interaction)))
            return;
        const subcommand = interaction.options.getSubcommand();
        switch (subcommand) {
            case 'setup':
                return this.handleSetup(interaction);
            case 'panel':
                return this.handlePanel(interaction);
            default:
                return interaction.reply({ content: 'Unknown subcommand.', ephemeral: true });
        }
    }
    async handleSetup(interaction) {
        await interaction.deferReply({ flags: [discord_js_1.MessageFlags.Ephemeral] });
        const settings = await prisma_1.prisma.ticketSettings.upsert({
            where: { guildId: interaction.guildId },
            update: {},
            create: {
                guildId: interaction.guildId
            },
            include: { categories: true }
        });
        const guildConfig = await prisma_1.prisma.guildConfig.findUnique({
            where: { guildId: interaction.guildId }
        });
        const embed = new discord_js_1.EmbedBuilder()
            .setColor('Blue')
            .setTitle('🎫 Ticket System Dashboard')
            .setDescription('Configure your server\'s ticket system here.')
            .addFields({ name: '📄 Welcome Message', value: settings.welcomeMessage || 'Default: "Hello! Please describe your issue."' }, { name: '💬 Panel Message', value: settings.ticketPanelMessage || 'Default: "Click the button below to open a new support ticket."' }, // New field
        {
            name: '📂 Categories',
            value: settings.categories.length > 0
                ? settings.categories.map(c => `• ${c.emoji || ''} **${c.name}** (Role: ${c.roleId ? `<@&${c.roleId}>` : 'None'})`).join('\n')
                : 'No categories set (Default ticket mode).'
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
        return interaction.editReply({ embeds: [embed], components: [row1, row2] });
    }
    async handlePanel(interaction) {
        const channel = interaction.options.getChannel('channel', true);
        if (channel.type !== discord_js_1.ChannelType.GuildText) {
            return interaction.reply({ content: 'The selected channel must be a text channel.', flags: [discord_js_1.MessageFlags.Ephemeral] });
        }
        const textChannel = channel;
        const settings = await prisma_1.prisma.ticketSettings.findUnique({
            where: { guildId: interaction.guildId },
            include: { categories: true }
        });
        if (!settings) {
            return interaction.reply({ content: 'Ticket system not configured. Please run `/ticket setup` first.', flags: [discord_js_1.MessageFlags.Ephemeral] });
        }
        let actionRow;
        if (settings.categories.length > 0) {
            // Debug logging for categories
            this.container.logger.debug(`[TicketPanel] Categories found: ${JSON.stringify(settings.categories)}`);
            // Display a select menu if categories exist
            const selectMenu = new discord_js_1.StringSelectMenuBuilder()
                .setCustomId('ticket-category-select')
                .setPlaceholder('Select a category to open a ticket')
                .addOptions(settings.categories.map((c) => ({
                label: c.name,
                value: c.id,
                emoji: c.emoji && c.emoji.trim().length > 0 ? c.emoji : undefined
            })));
            actionRow = new discord_js_1.ActionRowBuilder().addComponents(selectMenu);
        }
        else {
            // Fallback to a single button if no categories are defined
            const ticketButton = new discord_js_1.ButtonBuilder()
                .setCustomId('ticket-create-button')
                .setLabel('Create a Ticket')
                .setStyle(discord_js_1.ButtonStyle.Primary)
                .setEmoji('📩');
            actionRow = new discord_js_1.ActionRowBuilder().addComponents(ticketButton);
        }
        const embed = new discord_js_1.EmbedBuilder()
            .setColor('Blue')
            .setTitle('Support Tickets')
            .setDescription(settings.ticketPanelMessage || 'Click the button below to open a new support ticket.')
            .setFooter({ text: 'Please only open a ticket if you need assistance.' });
        try {
            const message = await textChannel.send({
                embeds: [embed],
                components: [actionRow]
            });
            await prisma_1.prisma.ticketSettings.upsert({
                where: { guildId: interaction.guildId },
                update: { ticketPanelMessageId: message.id },
                create: {
                    guildId: interaction.guildId,
                    ticketPanelMessageId: message.id
                }
            });
            await interaction.reply({ content: `Ticket panel sent to ${textChannel}.`, flags: [discord_js_1.MessageFlags.Ephemeral] });
            setTimeout(() => interaction.deleteReply().catch(() => { }), 5000);
            return;
        }
        catch (error) {
            this.container.logger.error('Error sending ticket panel:', error);
            return interaction.reply({ content: 'Failed to send ticket panel. Please check my permissions in that channel.', flags: [discord_js_1.MessageFlags.Ephemeral] });
        }
    }
}
exports.TicketCommand = TicketCommand;
//# sourceMappingURL=ticket.js.map