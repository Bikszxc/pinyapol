"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedCommand = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const checkAdmin_1 = require("../../lib/checkAdmin");
class EmbedCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'embed',
            description: 'Create and manage custom embeds.'
        });
    }
    registerApplicationCommands(registry) {
        registry.registerChatInputCommand((builder) => builder
            .setName(this.name)
            .setDescription(this.description)
            .addSubcommand((command) => command
            .setName('builder')
            .setDescription('Open the interactive embed builder.')), { guildIds: ['878242949115310110', '1430185547619500074'] } // Your actual Guild ID
        );
    }
    async chatInputRun(interaction) {
        if (!interaction.guildId) {
            return interaction.reply({ content: 'This command can only be used in a server.', flags: [discord_js_1.MessageFlags.Ephemeral] });
        }
        if (!(await (0, checkAdmin_1.checkAdminAndReply)(interaction)))
            return;
        const subcommand = interaction.options.getSubcommand();
        if (subcommand === 'builder') {
            return this.startBuilder(interaction);
        }
    }
    async startBuilder(interaction) {
        await interaction.deferReply({ flags: [discord_js_1.MessageFlags.Ephemeral] });
        const embed = new discord_js_1.EmbedBuilder()
            .setTitle('New Embed')
            .setDescription('This is a preview of your new embed. Use the buttons below to edit it.')
            .setColor('Blue');
        const row1 = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder().setCustomId('embed-edit-title').setLabel('Title').setStyle(discord_js_1.ButtonStyle.Secondary), new discord_js_1.ButtonBuilder().setCustomId('embed-edit-desc').setLabel('Description').setStyle(discord_js_1.ButtonStyle.Secondary), new discord_js_1.ButtonBuilder().setCustomId('embed-edit-color').setLabel('Color').setStyle(discord_js_1.ButtonStyle.Secondary), new discord_js_1.ButtonBuilder().setCustomId('embed-edit-author').setLabel('Author').setStyle(discord_js_1.ButtonStyle.Secondary), new discord_js_1.ButtonBuilder().setCustomId('embed-edit-footer').setLabel('Footer').setStyle(discord_js_1.ButtonStyle.Secondary));
        const row2 = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder().setCustomId('embed-edit-image').setLabel('Image').setStyle(discord_js_1.ButtonStyle.Secondary), new discord_js_1.ButtonBuilder().setCustomId('embed-edit-thumb').setLabel('Thumbnail').setStyle(discord_js_1.ButtonStyle.Secondary), new discord_js_1.ButtonBuilder().setCustomId('embed-add-field').setLabel('Add Field').setStyle(discord_js_1.ButtonStyle.Success), new discord_js_1.ButtonBuilder().setCustomId('embed-clear-fields').setLabel('Clear Fields').setStyle(discord_js_1.ButtonStyle.Danger));
        const row3 = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder().setCustomId('embed-save').setLabel('Save').setStyle(discord_js_1.ButtonStyle.Primary).setEmoji('💾'), new discord_js_1.ButtonBuilder().setCustomId('embed-load').setLabel('Load').setStyle(discord_js_1.ButtonStyle.Primary).setEmoji('📂'), new discord_js_1.ButtonBuilder().setCustomId('embed-send').setLabel('Send to Channel').setStyle(discord_js_1.ButtonStyle.Success).setEmoji('🚀'));
        return interaction.editReply({
            content: 'Use the controls below to build your embed.',
            embeds: [embed],
            components: [row1, row2, row3]
        });
    }
}
exports.EmbedCommand = EmbedCommand;
//# sourceMappingURL=embed.js.map