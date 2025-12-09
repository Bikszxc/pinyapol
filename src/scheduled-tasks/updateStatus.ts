import { ScheduledTask } from '@sapphire/plugin-scheduled-tasks';
import { ActivityType, EmbedBuilder, TextChannel } from 'discord.js';
import { prisma } from '../lib/prisma';
import { GameDig } from 'gamedig';
// ...
// In the run method:
// const state = await (Gamedig as any).query({

interface ServerStatus {
	players: number;
	maxPlayers: number;
	online: boolean;
	name?: string;
}

export class UpdateStatusTask extends ScheduledTask {
	private serverStatusMap = new Map<string, ServerStatus>(); // guildId -> lastKnownStatus

	public constructor(context: ScheduledTask.LoaderContext, options: ScheduledTask.Options) {
		super(context, {
			...options,
			interval: 60000, // Run every 60 seconds (can be overridden by guild config)
			enabled: true // Enable by default
		});
	}

	public async run() {
		this.container.logger.debug('Running server status update task...');

		const guildConfigs = await prisma.guildConfig.findMany({
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
			if (!config.serverIp || !config.serverPort) continue;

			let currentStatus: ServerStatus;
			let embed: EmbedBuilder | null = null;

			try {
				const state = await GameDig.query({
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
				this.container.client.user?.setActivity(
					this.formatMessage(config.onlineMessage, currentStatus),
					{ type: ActivityType.Playing }
				);

			} catch (error) {
				currentStatus = { players: 0, maxPlayers: 0, online: false };
				this.container.logger.error(`Server ${config.serverIp}:${config.serverPort} is DOWN.`, error);

				// Update bot activity
				this.container.client.user?.setActivity(
					this.formatMessage(config.offlineMessage, currentStatus),
					{ type: ActivityType.Playing }
				);
			}

			const lastKnownStatus = this.serverStatusMap.get(config.guildId);

			// Check for status change and announce
			if (config.statusChannelId && lastKnownStatus && lastKnownStatus.online !== currentStatus.online) {
				const statusChannel = await this.container.client.channels.fetch(config.statusChannelId);

				if (statusChannel instanceof TextChannel) {
					if (currentStatus.online) {
						embed = new EmbedBuilder()
							.setTitle('Server Status: Online! ✅')
							.setDescription(`The Project Zomboid server is now online!`)
							.setColor('Green')
							.addFields(
								{ name: 'Players', value: `${currentStatus.players}/${currentStatus.maxPlayers}`, inline: true },
								{ name: 'Server Name', value: currentStatus.name || 'N/A', inline: true }
							);
					} else {
						embed = new EmbedBuilder()
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

	private formatMessage(template: string, status: ServerStatus): string {
		return template
			.replace(/{players}/g, status.players.toString())
			.replace(/{maxPlayers}/g, status.maxPlayers.toString())
            .replace(/{max}/g, status.maxPlayers.toString())
			.replace(/{status}/g, status.online ? 'online' : 'offline');
	}
}
