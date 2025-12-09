"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetServerCommand = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const prisma_1 = require("../../lib/prisma");
const checkAdmin_1 = require("../../lib/checkAdmin");
class SetServerCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'setserver',
            description: 'Configure the Project Zomboid server IP and port for this guild.'
        });
    }
    registerApplicationCommands(registry) {
        registry.registerChatInputCommand((builder) => builder
            .setName(this.name)
            .setDescription(this.description)
            .addStringOption((option) => option.setName('ip').setDescription('The IP address of your Project Zomboid server.').setRequired(true))
            .addIntegerOption((option) => option.setName('port').setDescription('The query port of your Project Zomboid server (usually 16261).').setRequired(true))
            .addChannelOption((option) => option.setName('status_channel')
            .setDescription('The channel where server status updates will be sent.')
            .setRequired(false))
            .addChannelOption((option) => option.setName('update_channel')
            .setDescription('The channel where workshop mod updates will be sent.')
            .setRequired(false))
            .addIntegerOption((option) => option.setName('interval')
            .setDescription('The interval in seconds to check server status (min 30, max 300).')
            .setRequired(false)), { guildIds: ['878242949115310110', '1430185547619500074'] } // Your actual Guild ID
        );
    }
    async chatInputRun(interaction) {
        if (!interaction.guildId) {
            return interaction.reply({ content: 'This command can only be used in a server.', flags: [discord_js_1.MessageFlags.Ephemeral] });
        }
        if (!(await (0, checkAdmin_1.checkAdminAndReply)(interaction)))
            return;
        const ip = interaction.options.getString('ip', true);
        const port = interaction.options.getInteger('port', true);
        const statusChannel = interaction.options.getChannel('status_channel');
        const updateChannel = interaction.options.getChannel('update_channel');
        let interval = interaction.options.getInteger('interval');
        // Basic IP validation (can be more robust)
        const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
        if (!ipRegex.test(ip)) {
            return interaction.reply({ content: 'Invalid IP address format.', ephemeral: true });
        }
        // Port validation
        if (port < 1 || port > 65535) {
            return interaction.reply({ content: 'Port must be between 1 and 65535.', ephemeral: true });
        }
        if (interval !== null) {
            if (interval < 30 || interval > 300) {
                return interaction.reply({ content: 'Interval must be between 30 and 300 seconds.', ephemeral: true });
            }
        }
        else {
            interval = 120; // Default interval
        }
        await prisma_1.prisma.guildConfig.upsert({
            where: { guildId: interaction.guildId },
            update: {
                serverIp: ip,
                serverPort: port,
                statusChannelId: statusChannel === null || statusChannel === void 0 ? void 0 : statusChannel.id,
                updateChannelId: updateChannel === null || updateChannel === void 0 ? void 0 : updateChannel.id,
                statusInterval: interval
            },
            create: {
                guildId: interaction.guildId,
                serverIp: ip,
                serverPort: port,
                statusChannelId: statusChannel === null || statusChannel === void 0 ? void 0 : statusChannel.id,
                updateChannelId: updateChannel === null || updateChannel === void 0 ? void 0 : updateChannel.id,
                statusInterval: interval
            }
        });
        const embed = new discord_js_1.EmbedBuilder()
            .setColor('Green')
            .setTitle('Project Zomboid Server Configured!')
            .setDescription(`Server IP: 
${ip}:${port}
 has been set for this guild.`)
            .addFields([
            { name: 'Status Channel', value: statusChannel ? `<#${statusChannel.id}>` : 'Not set', inline: true },
            { name: 'Update Channel', value: updateChannel ? `<#${updateChannel.id}>` : 'Not set', inline: true },
            { name: 'Update Interval', value: `${interval} seconds`, inline: true }
        ]);
        await interaction.reply({ embeds: [embed], flags: [discord_js_1.MessageFlags.Ephemeral] });
        setTimeout(() => interaction.deleteReply().catch(() => { }), 5000);
        return;
    }
}
exports.SetServerCommand = SetServerCommand;
//# sourceMappingURL=setserver.js.map