import { Listener } from '@sapphire/framework';
import { Events, Interaction } from 'discord.js';
import { prisma } from '../lib/prisma';

export class CustomCommandListener extends Listener {
    public constructor(context: Listener.LoaderContext, options: Listener.Options) {
        super(context, {
            ...options,
            event: Events.InteractionCreate
        });
    }

    public async run(interaction: Interaction) {
        if (!interaction.isChatInputCommand()) return;
        if (!interaction.guildId) return;

        // check if sapphire handled it? Sapphire handles it before this listener usually if priority is standard.
        // But if it's a dynamic command, Sapphire won't have it in store.
        
        // We can check if the command exists in the store.
        const cmd = this.container.stores.get('commands').get(interaction.commandName);
        if (cmd) return; // Sapphire handles this

        const customCommand = await prisma.customCommand.findUnique({
            where: {
                guildId_name: {
                    guildId: interaction.guildId,
                    name: interaction.commandName
                }
            },
            include: { embed: true }
        });

        if (customCommand && customCommand.embed) {
            return interaction.reply({ embeds: [customCommand.embed.data as any] });
        }
    }
}
