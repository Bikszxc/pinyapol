import { Command } from '@sapphire/framework';
import { ApplicationCommandOptionType, EmbedBuilder, MessageFlags } from 'discord.js';
import { prisma } from '../../lib/prisma';
import { checkAdminAndReply } from '../../lib/checkAdmin';

export class SetServerCommand extends Command {
	public constructor(context: Command.LoaderContext, options: Command.Options) {
		super(context, {
			...options,
			name: 'setserver',
			description: 'Configure the Project Zomboid server IP and port for this guild.'
		});
	}

	public override registerApplicationCommands(registry: Command.Registry) {
		registry.registerChatInputCommand(
			(builder) =>
				builder
					.setName(this.name)
					.setDescription(this.description)
					.addStringOption((option) =>
						option.setName('ip').setDescription('The IP address of your Project Zomboid server.').setRequired(true)
					)
					.addIntegerOption((option) =>
						option.setName('port').setDescription('The query port of your Project Zomboid server (usually 16261).').setRequired(true)
					)
									.addChannelOption((option) =>
										option.setName('status_channel')
											.setDescription('The channel where server status updates will be sent.')
											.setRequired(false)
									)
					                .addChannelOption((option) =>
					                    option.setName('update_channel')
					                        .setDescription('The channel where workshop mod updates will be sent.')
					                        .setRequired(false)
					                )
									.addIntegerOption((option) =>						option.setName('interval')
							.setDescription('The interval in seconds to check server status (min 30, max 300).')
							.setRequired(false)
					),
			{ guildIds: ['878242949115310110'] } // Your actual Guild ID
		);
	}

	public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		if (!interaction.guildId) {
			return interaction.reply({ content: 'This command can only be used in a server.', flags: [MessageFlags.Ephemeral] });
		}

		if (!(await checkAdminAndReply(interaction))) return;

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
		} else {
			interval = 120; // Default interval
		}


		await prisma.guildConfig.upsert({
			where: { guildId: interaction.guildId },
			update: {
				serverIp: ip,
				serverPort: port,
				statusChannelId: statusChannel?.id,
                updateChannelId: updateChannel?.id,
				statusInterval: interval
			},
			create: {
				guildId: interaction.guildId,
				serverIp: ip,
				serverPort: port,
				statusChannelId: statusChannel?.id,
                updateChannelId: updateChannel?.id,
				statusInterval: interval
			}
		});

		const embed = new EmbedBuilder()
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

		await interaction.reply({ embeds: [embed], flags: [MessageFlags.Ephemeral] });
        setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
        return;
	}
}
