import { Listener } from '@sapphire/framework';

export class ReadyListener extends Listener {
	public constructor(context: Listener.LoaderContext, options: Listener.Options) {
		super(context, {
			...options,
			once: true,
			event: 'clientReady'
		});
	}

	public run(client: any) {
		const { username, id } = client.user;
		this.container.logger.info(`Successfully logged in as ${username} (${id})`);
        this.container.logger.info(`Intents: ${client.options.intents.bitfield}`);
	}
}
