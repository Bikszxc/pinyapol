import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import { ModalSubmitInteraction, EmbedBuilder, ColorResolvable, MessageFlags } from 'discord.js';
import { prisma } from '../lib/prisma';

export class EmbedBuilderModalHandler extends InteractionHandler {
    public constructor(ctx: InteractionHandler.LoaderContext, options: InteractionHandler.Options) {
        super(ctx, {
            ...options,
            interactionHandlerType: InteractionHandlerTypes.ModalSubmit
        });
    }

    public override parse(interaction: ModalSubmitInteraction) {
        if (!interaction.customId.startsWith('embed-')) return this.none();
        return this.some();
    }

    public async run(interaction: ModalSubmitInteraction) {
        // Bind Command Modal
        if (interaction.customId === 'embed-bind-modal') {
            const trigger = interaction.fields.getTextInputValue('trigger').toLowerCase().replace(/\s+/g, '-');
            const description = interaction.fields.getTextInputValue('description');
            const currentEmbed = interaction.message?.embeds[0];

            if (!currentEmbed) return interaction.reply({ content: 'Error: No embed found to bind.', flags: [MessageFlags.Ephemeral] });

            try {
                // 1. Save the embed (or update if exists for this command)
                const embedName = `bound_${trigger}`;
                const savedEmbed = await prisma.customEmbed.upsert({
                    where: { name: embedName },
                    update: { data: currentEmbed.toJSON() as any },
                    create: {
                        guildId: interaction.guildId!,
                        name: embedName,
                        data: currentEmbed.toJSON() as any
                    }
                });

                // 2. Save the command binding
                await prisma.customCommand.upsert({
                    where: {
                        guildId_name: {
                            guildId: interaction.guildId!,
                            name: trigger
                        }
                    },
                    update: {
                        description,
                        embedId: savedEmbed.id
                    },
                    create: {
                        guildId: interaction.guildId!,
                        name: trigger,
                        description,
                        embedId: savedEmbed.id
                    }
                });

                // 3. Register with Discord
                await interaction.guild?.commands.create({
                    name: trigger,
                    description: description
                });

                await interaction.reply({ content: `✅ Command **/${trigger}** created! It will now display this embed.`, flags: [MessageFlags.Ephemeral] });
                setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
                return;

            } catch (error: any) {
                return interaction.reply({ content: `Failed to bind command: ${error.message}`, flags: [MessageFlags.Ephemeral] });
            }
        }

        // Save Modal
        if (interaction.customId === 'embed-save-modal') {
            const name = interaction.fields.getTextInputValue('name');
            const currentEmbed = interaction.message?.embeds[0];
            
            if (!currentEmbed) return interaction.reply({ content: 'Error: No embed found to save.', flags: [MessageFlags.Ephemeral] });

            await prisma.customEmbed.upsert({
                where: { name: name }, // Note: Schema needs name to be unique PER GUILD ideally
                update: { data: currentEmbed.toJSON() as any },
                create: {
                    guildId: interaction.guildId!,
                    name: name,
                    data: currentEmbed.toJSON() as any
                }
            });
            await interaction.reply({ content: `Embed saved as "**${name}**".`, flags: [MessageFlags.Ephemeral] });
            setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
            return;
        }

        const oldEmbed = interaction.message?.embeds[0];
        if (!oldEmbed) return;
        const newEmbed = EmbedBuilder.from(oldEmbed);

        if (interaction.customId === 'embed-add-field-modal') {
            const name = interaction.fields.getTextInputValue('name');
            const value = interaction.fields.getTextInputValue('value');
            const inline = interaction.fields.getTextInputValue('inline').toLowerCase() === 'true';
            newEmbed.addFields({ name, value, inline });
        } else {
            const value = interaction.fields.getTextInputValue('value');
            switch (interaction.customId) {
                case 'embed-edit-title-modal': newEmbed.setTitle(value || null); break;
                case 'embed-edit-desc-modal': newEmbed.setDescription(value || null); break;
                case 'embed-edit-color-modal': newEmbed.setColor(value as ColorResolvable); break;
                case 'embed-edit-author-modal': newEmbed.setAuthor(value ? { name: value } : null); break;
                case 'embed-edit-footer-modal': newEmbed.setFooter(value ? { text: value } : null); break;
                case 'embed-edit-image-modal': newEmbed.setImage(value || null); break;
                case 'embed-edit-thumb-modal': newEmbed.setThumbnail(value || null); break;
            }
        }

        await interaction.deferUpdate();
        await interaction.editReply({ embeds: [newEmbed] });
    }
}
