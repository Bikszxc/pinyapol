import { Command } from '@sapphire/framework';
import {
    ActionRowBuilder,
    ApplicationCommandOptionType,
    ButtonBuilder,
    ButtonStyle,
    ChannelType,
    EmbedBuilder,
    MessageFlags,
    TextChannel,
    StringSelectMenuBuilder
} from 'discord.js';
import { prisma } from '../../lib/prisma';
import { checkAdminAndReply } from '../../lib/checkAdmin';

export class TicketCommand extends Command {
    public constructor(context: Command.LoaderContext, options: Command.Options) {
        super(context, {
            ...options,
            name: 'ticket',
            description: 'Manage the modern ticket system for your server.'
        });
    }

    public override registerApplicationCommands(registry: Command.Registry) {
        registry.registerChatInputCommand((builder) =>
            builder
                .setName(this.name)
                .setDescription(this.description)
                .addSubcommand((command) =>
                    command
                        .setName('setup')
                        .setDescription('Open the interactive ticket system configuration dashboard.')
                )
                .addSubcommand((command) =>
                    command
                        .setName('panel')
                        .setDescription('Send the ticket creation panel to a specified channel.')
                        .addChannelOption((option) =>
                            option
                                .setName('channel')
                                .setDescription('The channel where the ticket panel will be sent.')
                                .setRequired(true)
                        )
                ),
            { guildIds: ['878242949115310110'] } // Your actual Guild ID
        );
    }

    public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
        if (!interaction.guildId) {
            return interaction.reply({ content: 'This command can only be used in a server.', flags: [MessageFlags.Ephemeral] });
        }

        if (!(await checkAdminAndReply(interaction))) return;

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

    private async handleSetup(interaction: Command.ChatInputCommandInteraction) {
        await interaction.deferReply({ flags: [MessageFlags.Ephemeral] });

        const settings = await prisma.ticketSettings.upsert({
            where: { guildId: interaction.guildId! },
            update: {},
            create: {
                guildId: interaction.guildId!
            },
            include: { categories: true }
        });

        const guildConfig = await prisma.guildConfig.findUnique({
            where: { guildId: interaction.guildId! }
        });

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
                        : 'No categories set (Default ticket mode).'
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

        return interaction.editReply({ embeds: [embed], components: [row1, row2] });
    }

    private async handlePanel(interaction: Command.ChatInputCommandInteraction) {
        const channel = interaction.options.getChannel('channel', true);

        if (channel.type !== ChannelType.GuildText) {
            return interaction.reply({ content: 'The selected channel must be a text channel.', flags: [MessageFlags.Ephemeral] });
        }

        const textChannel = channel as TextChannel;

        const settings = await prisma.ticketSettings.findUnique({
            where: { guildId: interaction.guildId! },
            include: { categories: true }
        });

        if (!settings) {
            return interaction.reply({ content: 'Ticket system not configured. Please run `/ticket setup` first.', flags: [MessageFlags.Ephemeral] });
        }

        let actionRow;
        if (settings.categories.length > 0) {
            // Debug logging for categories
            this.container.logger.debug(`[TicketPanel] Categories found: ${JSON.stringify(settings.categories)}`);

            // Display a select menu if categories exist
            const selectMenu = new StringSelectMenuBuilder()
                .setCustomId('ticket-category-select')
                .setPlaceholder('Select a category to open a ticket')
                .addOptions(
                    settings.categories.map((c) => ({
                        label: c.name,
                        value: c.id,
                        emoji: c.emoji && c.emoji.trim().length > 0 ? c.emoji : undefined
                    }))
                );
            actionRow = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(selectMenu);
        } else {
            // Fallback to a single button if no categories are defined
            const ticketButton = new ButtonBuilder()
                .setCustomId('ticket-create-button')
                .setLabel('Create a Ticket')
                .setStyle(ButtonStyle.Primary)
                .setEmoji('📩');
            actionRow = new ActionRowBuilder<ButtonBuilder>().addComponents(ticketButton);
        }
        
        const embed = new EmbedBuilder()
            .setColor('Blue')
            .setTitle('Support Tickets')
            .setDescription(settings.ticketPanelMessage || 'Click the button below to open a new support ticket.')
            .setFooter({ text: 'Please only open a ticket if you need assistance.' });

        try {
            const message = await textChannel.send({
                embeds: [embed],
                components: [actionRow]
            });

            await prisma.ticketSettings.upsert({
                where: { guildId: interaction.guildId! },
                update: { ticketPanelMessageId: message.id },
                create: {
                    guildId: interaction.guildId!,
                    ticketPanelMessageId: message.id
                }
            });

            await interaction.reply({ content: `Ticket panel sent to ${textChannel}.`, flags: [MessageFlags.Ephemeral] });
            setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
            return;
        } catch (error) {
            this.container.logger.error('Error sending ticket panel:', error);
            return interaction.reply({ content: 'Failed to send ticket panel. Please check my permissions in that channel.', flags: [MessageFlags.Ephemeral] });
        }
    }
}
