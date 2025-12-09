"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckWorkshopTask = void 0;
const plugin_scheduled_tasks_1 = require("@sapphire/plugin-scheduled-tasks");
const discord_js_1 = require("discord.js");
const prisma_1 = require("../lib/prisma");
const steam_1 = require("../lib/steam");
class CheckWorkshopTask extends plugin_scheduled_tasks_1.ScheduledTask {
    constructor(context, options) {
        super(context, {
            ...options,
            interval: 60000, // Run every 1 minute
            enabled: true
        });
    }
    async run() {
        var _a;
        this.container.logger.debug('Running workshop update check task...');
        // 1. Fetch all monitored mods
        const allWatchlistItems = await prisma_1.prisma.modWatchlist.findMany({
            include: {
                guild: true
            }
        });
        if (allWatchlistItems.length === 0) {
            this.container.logger.debug('No mods in watchlist.');
            return;
        }
        // 2. Extract unique workshop IDs to query Steam (batching)
        const uniqueWorkshopIds = [...new Set(allWatchlistItems.map((item) => item.workshopId))];
        // 3. Query Steam API (Batch in chunks of 100 if necessary, but assuming < 100 for now)
        // Steam API allows multiple IDs.
        let steamDetails = [];
        try {
            steamDetails = await (0, steam_1.getWorkshopDetails)(uniqueWorkshopIds);
        }
        catch (error) {
            this.container.logger.error('Failed to check workshop updates:', error);
            return;
        }
        const steamDetailsMap = new Map(steamDetails.map(d => [d.publishedfileid, d]));
        // 4. Check for updates
        const updatesToNotify = [];
        // Group guilds by workshopId for notification
        const guildsByWorkshopId = new Map();
        for (const item of allWatchlistItems) {
            if (!guildsByWorkshopId.has(item.workshopId)) {
                guildsByWorkshopId.set(item.workshopId, []);
            }
            (_a = guildsByWorkshopId.get(item.workshopId)) === null || _a === void 0 ? void 0 : _a.push(item.guild);
        }
        for (const workshopId of uniqueWorkshopIds) {
            const remoteDetails = steamDetailsMap.get(workshopId);
            if (!remoteDetails)
                continue; // Mod might have been deleted or hidden
            // We need to compare against the *stored* lastUpdated for each guild?
            // Actually, if a mod updates, it updates for everyone.
            // But we track 'lastUpdated' per row. Ideally we should have a 'Mods' table separate from 'ModWatchlist' to avoid duplicate checks, but this schema is per-guild.
            // We'll check if the remote time is > the *oldest* lastUpdated recorded? Or just update all?
            // Let's iterate through the watchlist items again.
            const relevantItems = allWatchlistItems.filter(i => i.workshopId === workshopId);
            for (const item of relevantItems) {
                const remoteTime = remoteDetails.time_updated * 1000; // Steam is unix seconds, JS is ms
                const localTime = item.lastUpdated.getTime();
                // Check if remote is newer (allow some buffer)
                if (remoteTime > localTime) {
                    // Notify this guild
                    if (item.guild.updateChannelId) {
                        await this.notifyGuild(item.guild, remoteDetails);
                    }
                    // Update DB
                    await prisma_1.prisma.modWatchlist.update({
                        where: { id: item.id },
                        data: { lastUpdated: new Date(remoteTime) }
                    });
                    this.container.logger.info(`Detected update for workshop ID ${workshopId} ("${remoteDetails.title}") in guild ${item.guild.guildId}`);
                }
            }
        }
    }
    async notifyGuild(guildConfig, modDetails) {
        if (!guildConfig.updateChannelId)
            return;
        try {
            const channel = await this.container.client.channels.fetch(guildConfig.updateChannelId);
            if (channel && channel instanceof discord_js_1.TextChannel) {
                const embed = new discord_js_1.EmbedBuilder()
                    .setTitle('🛠️ Mod Update Detected!')
                    .setDescription(`**[${modDetails.title}](https://steamcommunity.com/sharedfiles/filedetails/?id=${modDetails.publishedfileid})** has been updated!`)
                    .setThumbnail(modDetails.preview_url)
                    .addFields({ name: 'Updated At', value: `<t:${modDetails.time_updated}:R>`, inline: true }, { name: 'Workshop ID', value: modDetails.publishedfileid, inline: true })
                    .setColor('Blue');
                let content = '';
                if (guildConfig.updateMentionIds && Array.isArray(guildConfig.updateMentionIds) && guildConfig.updateMentionIds.length > 0) {
                    const guild = channel.guild;
                    const mentions = guildConfig.updateMentionIds.map((id) => {
                        // Check if role exists in cache to determine format
                        if (guild.roles.cache.has(id))
                            return `<@&${id}>`;
                        return `<@${id}>`;
                    }).join(' ');
                    content = mentions;
                }
                await channel.send({ content: content || undefined, embeds: [embed] });
            }
        }
        catch (error) {
            this.container.logger.error(`Failed to send update notification to guild ${guildConfig.guildId}:`, error);
        }
    }
}
exports.CheckWorkshopTask = CheckWorkshopTask;
//# sourceMappingURL=checkWorkshop.js.map