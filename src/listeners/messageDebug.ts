import { Listener } from '@sapphire/framework';
import { Message } from 'discord.js';

export class MessageDebugListener extends Listener {
	public constructor(context: Listener.LoaderContext, options: Listener.Options) {
		super(context, {
			...options,
			event: 'messageCreate'
		});
	}

	public run(message: Message) {
		this.container.logger.info(`Received message: ${message.content} from ${message.author.tag} in ${message.channelId}`);
	}
}
