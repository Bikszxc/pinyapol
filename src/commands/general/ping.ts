import { Command } from '@sapphire/framework';
import { Message, MessageFlags } from 'discord.js';

export class PingCommand extends Command {
	public constructor(context: Command.LoaderContext, options: Command.Options) {
		super(context, {
			...options,
			name: 'ping',
			aliases: ['pong'],
			description: 'ping pong'
		});
	}

	public override registerApplicationCommands(registry: Command.Registry) {
		registry.registerChatInputCommand(
			(builder) => builder.setName(this.name).setDescription(this.description),
			{ guildIds: ['878242949115310110'] } // Your actual Guild ID
		);
	}

	public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		const msg = await interaction.reply({ content: `Ping?`, flags: [MessageFlags.Ephemeral], fetchReply: true });
		const diff = msg.createdTimestamp - interaction.createdTimestamp;
		const ping = Math.round(this.container.client.ws.ping);
		return interaction.editReply(`Pong 🏓! (Roundtrip: ${diff}ms. Heartbeat: ${ping}ms.)`);
	}

	public async messageRun(message: Message) {
		const msg = await message.reply('Ping?');
		const diff = msg.createdTimestamp - message.createdTimestamp;
		const ping = Math.round(this.container.client.ws.ping);
		return msg.edit(`Pong 🏓! (Roundtrip: ${diff}ms. Heartbeat: ${ping}ms.)`);
	}
}
