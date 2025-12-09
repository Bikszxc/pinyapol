"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./lib/setup");
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const redis_memory_server_1 = require("redis-memory-server");
const httpServer_1 = require("./lib/httpServer");
const main = async () => {
    // Start in-memory Redis for scheduled tasks
    const redisServer = new redis_memory_server_1.RedisMemoryServer();
    const host = await redisServer.getHost();
    const port = await redisServer.getPort();
    console.log(`Redis Memory Server started at ${host}:${port}`);
    // Start HTTP Server for Transcripts
    const httpServer = new httpServer_1.HttpServer(parseInt(process.env.PORT || '3000', 10));
    httpServer.start();
    const client = new framework_1.SapphireClient({
        defaultPrefix: '!',
        regexPrefix: /^(hey +)?bot[,! ]/i,
        caseInsensitiveCommands: true,
        logger: {
            level: framework_1.LogLevel.Debug
        },
        shards: 'auto',
        baseUserDirectory: __dirname,
        intents: [
            discord_js_1.GatewayIntentBits.DirectMessages,
            discord_js_1.GatewayIntentBits.GuildModeration,
            discord_js_1.GatewayIntentBits.GuildMessages,
            discord_js_1.GatewayIntentBits.Guilds,
            discord_js_1.GatewayIntentBits.MessageContent,
            discord_js_1.GatewayIntentBits.GuildMembers
        ],
        partials: [discord_js_1.Partials.Channel],
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
    }
    catch (error) {
        client.logger.fatal(error);
        client.destroy();
        await redisServer.stop();
        process.exit(1);
    }
};
main();
//# sourceMappingURL=index.js.map