"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingCommand = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
class PingCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'ping',
            aliases: ['pong'],
            description: 'ping pong'
        });
    }
    registerApplicationCommands(registry) {
        registry.registerChatInputCommand((builder) => builder.setName(this.name).setDescription(this.description), { guildIds: ['878242949115310110'] } // Your actual Guild ID
        );
    }
    async chatInputRun(interaction) {
        const msg = await interaction.reply({ content: `Ping?`, flags: [discord_js_1.MessageFlags.Ephemeral], fetchReply: true });
        const diff = msg.createdTimestamp - interaction.createdTimestamp;
        const ping = Math.round(this.container.client.ws.ping);
        return interaction.editReply(`Pong 🏓! (Roundtrip: ${diff}ms. Heartbeat: ${ping}ms.)`);
    }
    async messageRun(message) {
        const msg = await message.reply('Ping?');
        const diff = msg.createdTimestamp - message.createdTimestamp;
        const ping = Math.round(this.container.client.ws.ping);
        return msg.edit(`Pong 🏓! (Roundtrip: ${diff}ms. Heartbeat: ${ping}ms.)`);
    }
}
exports.PingCommand = PingCommand;
//# sourceMappingURL=ping.js.map