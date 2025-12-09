import { ScheduledTask } from '@sapphire/plugin-scheduled-tasks';
import { EmbedBuilder, TextChannel } from 'discord.js';
import { prisma } from '../lib/prisma';
import { getWorkshopDetails, SteamWorkshopItem } from '../lib/steam';

export class CheckWorkshopTask extends ScheduledTask {
	public constructor(context: ScheduledTask.LoaderContext, options: ScheduledTask.Options) {
		super(context, {
			...options,
			interval: 60000, // Run every 1 minute
			enabled: true
		});
	}

	public async run() {
		this.container.logger.debug('Running workshop update check task...');

		// 1. Fetch all monitored mods
		const allWatchlistItems = await prisma.modWatchlist.findMany({
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
        let steamDetails: SteamWorkshopItem[] = [];
		try {
			steamDetails = await getWorkshopDetails(uniqueWorkshopIds);
		} catch (error) {
			this.container.logger.error('Failed to check workshop updates:', error);
			return;
		}

        const steamDetailsMap = new Map(steamDetails.map(d => [d.publishedfileid, d]));

		// 4. Check for updates
        const updatesToNotify: { workshopId: string; details: SteamWorkshopItem; guilds: any[] }[] = [];

        // Group guilds by workshopId for notification
        const guildsByWorkshopId = new Map<string, any[]>();
        for (const item of allWatchlistItems) {
            if (!guildsByWorkshopId.has(item.workshopId)) {
                guildsByWorkshopId.set(item.workshopId, []);
            }
            guildsByWorkshopId.get(item.workshopId)?.push(item.guild);
        }

        for (const workshopId of uniqueWorkshopIds) {
            const remoteDetails = steamDetailsMap.get(workshopId);
            if (!remoteDetails) continue; // Mod might have been deleted or hidden

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
                     await prisma.modWatchlist.update({
                         where: { id: item.id },
                         data: { lastUpdated: new Date(remoteTime) }
                     });
                     
                     this.container.logger.info(`Detected update for workshop ID ${workshopId} ("${remoteDetails.title}") in guild ${item.guild.guildId}`);
                }
            }
        }
	}

    private async notifyGuild(guildConfig: any, modDetails: SteamWorkshopItem) {
        if (!guildConfig.updateChannelId) return;

        try {
            const channel = await this.container.client.channels.fetch(guildConfig.updateChannelId);
            if (channel && channel instanceof TextChannel) {
                const embed = new EmbedBuilder()
                    .setTitle('🛠️ Mod Update Detected!')
                    .setDescription(`**[${modDetails.title}](https://steamcommunity.com/sharedfiles/filedetails/?id=${modDetails.publishedfileid})** has been updated!`)
                    .setThumbnail(modDetails.preview_url)
                    .addFields(
                        { name: 'Updated At', value: `<t:${modDetails.time_updated}:R>`, inline: true },
                        { name: 'Workshop ID', value: modDetails.publishedfileid, inline: true }
                    )
                    .setColor('Blue');

                let content = '';
                if (guildConfig.updateMentionIds && Array.isArray(guildConfig.updateMentionIds) && guildConfig.updateMentionIds.length > 0) {
                    const guild = channel.guild;
                    const mentions = guildConfig.updateMentionIds.map((id: string) => {
                        // Check if role exists in cache to determine format
                        if (guild.roles.cache.has(id)) return `<@&${id}>`;
                        return `<@${id}>`;
                    }).join(' ');
                    content = mentions;
                }

                await channel.send({ content: content || undefined, embeds: [embed] });
            }
        } catch (error) {
            this.container.logger.error(`Failed to send update notification to guild ${guildConfig.guildId}:`, error);
        }
    }
}
