"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDebugListener = void 0;
const framework_1 = require("@sapphire/framework");
class MessageDebugListener extends framework_1.Listener {
    constructor(context, options) {
        super(context, {
            ...options,
            event: 'messageCreate'
        });
    }
    run(message) {
        this.container.logger.info(`Received message: ${message.content} from ${message.author.tag} in ${message.channelId}`);
    }
}
exports.MessageDebugListener = MessageDebugListener;
//# sourceMappingURL=messageDebug.js.map