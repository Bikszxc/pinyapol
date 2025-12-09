import { Command } from '@sapphire/framework';
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } from 'discord.js';
import { checkAdminAndReply } from '../../lib/checkAdmin';

export class EmbedCommand extends Command {
    public constructor(context: Command.LoaderContext, options: Command.Options) {
        super(context, {
            ...options,
            name: 'embed',
            description: 'Create and manage custom embeds.'
        });
    }

    public override registerApplicationCommands(registry: Command.Registry) {
        registry.registerChatInputCommand((builder) =>
            builder
                .setName(this.name)
                .setDescription(this.description)
                .addSubcommand((command) =>
                    command
                        .setName('builder')
                                                .setDescription('Open the interactive embed builder.')
                                        ),
                        			{ guildIds: ['878242949115310110', '1430185547619500074'] } // Your actual Guild ID
                        		);    }

    public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
        if (!interaction.guildId) {
            return interaction.reply({ content: 'This command can only be used in a server.', flags: [MessageFlags.Ephemeral] });
        }

        if (!(await checkAdminAndReply(interaction))) return;

        const subcommand = interaction.options.getSubcommand();

        if (subcommand === 'builder') {
            return this.startBuilder(interaction);
        }
    }

    private async startBuilder(interaction: Command.ChatInputCommandInteraction) {
        await interaction.deferReply({ flags: [MessageFlags.Ephemeral] });

        const embed = new EmbedBuilder()
            .setTitle('New Embed')
            .setDescription('This is a preview of your new embed. Use the buttons below to edit it.')
            .setColor('Blue');

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
            new ButtonBuilder().setCustomId('embed-send').setLabel('Send to Channel').setStyle(ButtonStyle.Success).setEmoji('🚀')
        );

        return interaction.editReply({
            content: 'Use the controls below to build your embed.',
            embeds: [embed],
            components: [row1, row2, row3]
        });
    }
}
