"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatusTask = void 0;
const plugin_scheduled_tasks_1 = require("@sapphire/plugin-scheduled-tasks");
const discord_js_1 = require("discord.js");
const prisma_1 = require("../lib/prisma");
const gamedig_1 = require("gamedig");
class UpdateStatusTask extends plugin_scheduled_tasks_1.ScheduledTask {
    constructor(context, options) {
        super(context, {
            ...options,
            interval: 60000, // Run every 60 seconds (can be overridden by guild config)
            enabled: true // Enable by default
        });
        this.serverStatusMap = new Map(); // guildId -> lastKnownStatus
    }
    async run() {
        var _a, _b;
        this.container.logger.debug('Running server status update task...');
        const guildConfigs = await prisma_1.prisma.guildConfig.findMany({
            where: {
                serverIp: { not: null },
                serverPort: { not: null }
            }
        });
        if (guildConfigs.length === 0) {
            this.container.logger.debug('No guild configurations found with server IP/Port. Skipping update.');
            return;
        }
        for (const config of guildConfigs) {
            if (!config.serverIp || !config.serverPort)
                continue;
            let currentStatus;
            let embed = null;
            try {
                const state = await gamedig_1.GameDig.query({
                    type: 'projectzomboid',
                    host: config.serverIp,
                    port: config.serverPort
                });
                currentStatus = {
                    players: state.players.length,
                    maxPlayers: state.maxplayers,
                    online: true,
                    name: state.name
                };
                this.container.logger.debug(`Server ${config.serverIp}:${config.serverPort} is UP. Players: ${currentStatus.players}/${currentStatus.maxPlayers}`);
                // Update bot activity
                (_a = this.container.client.user) === null || _a === void 0 ? void 0 : _a.setActivity(this.formatMessage(config.onlineMessage, currentStatus), { type: discord_js_1.ActivityType.Playing });
            }
            catch (error) {
                currentStatus = { players: 0, maxPlayers: 0, online: false };
                this.container.logger.error(`Server ${config.serverIp}:${config.serverPort} is DOWN.`, error);
                // Update bot activity
                (_b = this.container.client.user) === null || _b === void 0 ? void 0 : _b.setActivity(this.formatMessage(config.offlineMessage, currentStatus), { type: discord_js_1.ActivityType.Playing });
            }
            const lastKnownStatus = this.serverStatusMap.get(config.guildId);
            // Check for status change and announce
            if (config.statusChannelId && lastKnownStatus && lastKnownStatus.online !== currentStatus.online) {
                const statusChannel = await this.container.client.channels.fetch(config.statusChannelId);
                if (statusChannel instanceof discord_js_1.TextChannel) {
                    if (currentStatus.online) {
                        embed = new discord_js_1.EmbedBuilder()
                            .setTitle('Server Status: Online! ✅')
                            .setDescription(`The Project Zomboid server is now online!`)
                            .setColor('Green')
                            .addFields({ name: 'Players', value: `${currentStatus.players}/${currentStatus.maxPlayers}`, inline: true }, { name: 'Server Name', value: currentStatus.name || 'N/A', inline: true });
                    }
                    else {
                        embed = new discord_js_1.EmbedBuilder()
                            .setTitle('Server Status: Offline! ❌')
                            .setDescription('The Project Zomboid server has gone offline.')
                            .setColor('Red');
                    }
                    await statusChannel.send({ embeds: [embed] });
                }
            }
            this.serverStatusMap.set(config.guildId, currentStatus);
        }
    }
    formatMessage(template, status) {
        return template
            .replace(/{players}/g, status.players.toString())
            .replace(/{maxPlayers}/g, status.maxPlayers.toString())
            .replace(/{max}/g, status.maxPlayers.toString())
            .replace(/{status}/g, status.online ? 'online' : 'offline');
    }
}
exports.UpdateStatusTask = UpdateStatusTask;
//# sourceMappingURL=updateStatus.js.map