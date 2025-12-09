"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadyListener = void 0;
const framework_1 = require("@sapphire/framework");
class ReadyListener extends framework_1.Listener {
    constructor(context, options) {
        super(context, {
            ...options,
            once: true,
            event: 'clientReady'
        });
    }
    run(client) {
        const { username, id } = client.user;
        this.container.logger.info(`Successfully logged in as ${username} (${id})`);
        this.container.logger.info(`Intents: ${client.options.intents.bitfield}`);
    }
}
exports.ReadyListener = ReadyListener;
//# sourceMappingURL=ready.js.map