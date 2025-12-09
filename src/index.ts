import './lib/setup';
import { LogLevel, SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits, Partials } from 'discord.js';
import { RedisMemoryServer } from 'redis-memory-server';
import { HttpServer } from './lib/httpServer';

const main = async () => {
	// Start in-memory Redis for scheduled tasks
	const redisServer = new RedisMemoryServer();
	const host = await redisServer.getHost();
	const port = await redisServer.getPort();

	console.log(`Redis Memory Server started at ${host}:${port}`);

    // Start HTTP Server for Transcripts
    const httpServer = new HttpServer(parseInt(process.env.PORT || '3000', 10));
    httpServer.start();

	const client = new SapphireClient({
		defaultPrefix: '!',
		regexPrefix: /^(hey +)?bot[,! ]/i,
		caseInsensitiveCommands: true,
		logger: {
			level: LogLevel.Debug
		},
		shards: 'auto',
		baseUserDirectory: __dirname,
		intents: [
			GatewayIntentBits.DirectMessages,
			GatewayIntentBits.GuildModeration,
			GatewayIntentBits.GuildMessages,
			GatewayIntentBits.Guilds,
			GatewayIntentBits.MessageContent,
			GatewayIntentBits.GuildMembers
		],
		partials: [Partials.Channel],
		loadMessageCommandListeners: true,
		tasks: {
			queue: 'scheduled-tasks',
			bull: {
				connection: {
					host,
					port
				}
			}
		}
	});

	try {
		client.logger.info('Logging in');
		await client.login();
		client.logger.info('logged in');
	} catch (error) {
		client.logger.fatal(error);
		client.destroy();
		await redisServer.stop();
		process.exit(1);
	}
};

main();