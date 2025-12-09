import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import { StringSelectMenuInteraction, ChannelSelectMenuInteraction, AnySelectMenuInteraction } from 'discord.js';
import { prisma } from '../lib/prisma';

export class TicketSetupSelectHandler extends InteractionHandler {
    public constructor(ctx: InteractionHandler.LoaderContext, options: InteractionHandler.Options) {
        super(ctx, {
            ...options,
            interactionHandlerType: InteractionHandlerTypes.SelectMenu
        });
    }

    public override parse(interaction: AnySelectMenuInteraction) {
        if (
            interaction.customId !== 'ticket-setup-rem-cat-select' &&
            interaction.customId !== 'ticket-setup-transcript-select'
        ) {
            return this.none();
        }
        return this.some();
    }

    public async run(interaction: AnySelectMenuInteraction) {
        if (!interaction.guildId) return;

        if (interaction.isStringSelectMenu() && interaction.customId === 'ticket-setup-rem-cat-select') {
             const categoryId = interaction.values[0];

             await prisma.ticketCategory.delete({
                 where: { id: categoryId }
             });

             await interaction.update({ content: 'Category removed! Click "Refresh" on the dashboard to see changes.', components: [] });
             setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
             return;
        }

        if (interaction.isChannelSelectMenu() && interaction.customId === 'ticket-setup-transcript-select') {
             const channelId = interaction.values[0];

             await prisma.guildConfig.upsert({
                 where: { guildId: interaction.guildId },
                 update: { logChannelId: channelId },
                 create: {
                     guildId: interaction.guildId,
                     logChannelId: channelId
                 }
             });

             await interaction.update({ content: `Transcript channel set to <#${channelId}>! Click "Refresh" on the dashboard to see changes.`, components: [] });
             setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
             return;
        }
    }
}
