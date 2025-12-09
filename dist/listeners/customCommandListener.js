"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCommandListener = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const prisma_1 = require("../lib/prisma");
class CustomCommandListener extends framework_1.Listener {
    constructor(context, options) {
        super(context, {
            ...options,
            event: discord_js_1.Events.InteractionCreate
        });
    }
    async run(interaction) {
        if (!interaction.isChatInputCommand())
            return;
        if (!interaction.guildId)
            return;
        // check if sapphire handled it? Sapphire handles it before this listener usually if priority is standard.
        // But if it's a dynamic command, Sapphire won't have it in store.
        // We can check if the command exists in the store.
        const cmd = this.container.stores.get('commands').get(interaction.commandName);
        if (cmd)
            return; // Sapphire handles this
        const customCommand = await prisma_1.prisma.customCommand.findUnique({
            where: {
                guildId_name: {
                    guildId: interaction.guildId,
                    name: interaction.commandName
                }
            },
            include: { embed: true }
        });
        if (customCommand && customCommand.embed) {
            return interaction.reply({ embeds: [customCommand.embed.data] });
        }
    }
}
exports.CustomCommandListener = CustomCommandListener;
//# sourceMappingURL=customCommandListener.js.map