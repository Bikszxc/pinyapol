import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import { AnySelectMenuInteraction, EmbedBuilder, MessageFlags, TextChannel } from 'discord.js';
import { prisma } from '../lib/prisma';
import { getBuilderButtons } from './embedBuilderButtons';

export class EmbedBuilderSelectHandler extends InteractionHandler {
    public constructor(ctx: InteractionHandler.LoaderContext, options: InteractionHandler.Options) {
        super(ctx, {
            ...options,
            interactionHandlerType: InteractionHandlerTypes.SelectMenu
        });
    }

    public override parse(interaction: AnySelectMenuInteraction) {
        if (!interaction.customId.startsWith('embed-')) return this.none();
        return this.some();
    }

    public async run(interaction: AnySelectMenuInteraction) {
        if (interaction.isChannelSelectMenu() && interaction.customId === 'embed-send-select') {
            const channel = interaction.channels.first() as TextChannel;
            const embed = interaction.message.embeds[0];

            try {
                await channel.send({ embeds: [embed] });
                await interaction.reply({ content: `Embed sent to ${channel}!`, flags: [MessageFlags.Ephemeral] });
                setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
                // Restore buttons
                await interaction.message.edit({ components: getBuilderButtons() });
            } catch (error) {
                await interaction.reply({ content: 'Failed to send embed. Check permissions.', flags: [MessageFlags.Ephemeral] });
            }
        }
        
        if (interaction.isStringSelectMenu() && interaction.customId === 'embed-load-select') {
            const id = interaction.values[0];
            const saved = await prisma.customEmbed.findUnique({ where: { id } });
            
            if (!saved) {
                await interaction.reply({ content: 'Embed not found.', flags: [MessageFlags.Ephemeral] });
                setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
                return;
            }
            
            const loadedEmbed = new EmbedBuilder(saved.data as any);
            await interaction.update({ embeds: [loadedEmbed], components: getBuilderButtons() });
        }
    }
}
