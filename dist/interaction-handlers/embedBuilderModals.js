"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedBuilderModalHandler = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const prisma_1 = require("../lib/prisma");
class EmbedBuilderModalHandler extends framework_1.InteractionHandler {
    constructor(ctx, options) {
        super(ctx, {
            ...options,
            interactionHandlerType: framework_1.InteractionHandlerTypes.ModalSubmit
        });
    }
    parse(interaction) {
        if (!interaction.customId.startsWith('embed-'))
            return this.none();
        return this.some();
    }
    async run(interaction) {
        var _a, _b, _c, _d;
        // Bind Command Modal
        if (interaction.customId === 'embed-bind-modal') {
            const trigger = interaction.fields.getTextInputValue('trigger').toLowerCase().replace(/\s+/g, '-');
            const description = interaction.fields.getTextInputValue('description');
            const currentEmbed = (_a = interaction.message) === null || _a === void 0 ? void 0 : _a.embeds[0];
            if (!currentEmbed)
                return interaction.reply({ content: 'Error: No embed found to bind.', flags: [discord_js_1.MessageFlags.Ephemeral] });
            try {
                // 1. Save the embed (or update if exists for this command)
                const embedName = `bound_${trigger}`;
                const savedEmbed = await prisma_1.prisma.customEmbed.upsert({
                    where: { name: embedName },
                    update: { data: currentEmbed.toJSON() },
                    create: {
                        guildId: interaction.guildId,
                        name: embedName,
                        data: currentEmbed.toJSON()
                    }
                });
                // 2. Save the command binding
                await prisma_1.prisma.customCommand.upsert({
                    where: {
                        guildId_name: {
                            guildId: interaction.guildId,
                            name: trigger
                        }
                    },
                    update: {
                        description,
                        embedId: savedEmbed.id
                    },
                    create: {
                        guildId: interaction.guildId,
                        name: trigger,
                        description,
                        embedId: savedEmbed.id
                    }
                });
                // 3. Register with Discord
                await ((_b = interaction.guild) === null || _b === void 0 ? void 0 : _b.commands.create({
                    name: trigger,
                    description: description
                }));
                await interaction.reply({ content: `✅ Command **/${trigger}** created! It will now display this embed.`, flags: [discord_js_1.MessageFlags.Ephemeral] });
                setTimeout(() => interaction.deleteReply().catch(() => { }), 5000);
                return;
            }
            catch (error) {
                return interaction.reply({ content: `Failed to bind command: ${error.message}`, flags: [discord_js_1.MessageFlags.Ephemeral] });
            }
        }
        // Save Modal
        if (interaction.customId === 'embed-save-modal') {
            const name = interaction.fields.getTextInputValue('name');
            const currentEmbed = (_c = interaction.message) === null || _c === void 0 ? void 0 : _c.embeds[0];
            if (!currentEmbed)
                return interaction.reply({ content: 'Error: No embed found to save.', flags: [discord_js_1.MessageFlags.Ephemeral] });
            await prisma_1.prisma.customEmbed.upsert({
                where: { name: name }, // Note: Schema needs name to be unique PER GUILD ideally
                update: { data: currentEmbed.toJSON() },
                create: {
                    guildId: interaction.guildId,
                    name: name,
                    data: currentEmbed.toJSON()
                }
            });
            await interaction.reply({ content: `Embed saved as "**${name}**".`, flags: [discord_js_1.MessageFlags.Ephemeral] });
            setTimeout(() => interaction.deleteReply().catch(() => { }), 5000);
            return;
        }
        const oldEmbed = (_d = interaction.message) === null || _d === void 0 ? void 0 : _d.embeds[0];
        if (!oldEmbed)
            return;
        const newEmbed = discord_js_1.EmbedBuilder.from(oldEmbed);
        if (interaction.customId === 'embed-add-field-modal') {
            const name = interaction.fields.getTextInputValue('name');
            const value = interaction.fields.getTextInputValue('value');
            const inline = interaction.fields.getTextInputValue('inline').toLowerCase() === 'true';
            newEmbed.addFields({ name, value, inline });
        }
        else {
            const value = interaction.fields.getTextInputValue('value');
            switch (interaction.customId) {
                case 'embed-edit-title-modal':
                    newEmbed.setTitle(value || null);
                    break;
                case 'embed-edit-desc-modal':
                    newEmbed.setDescription(value || null);
                    break;
                case 'embed-edit-color-modal':
                    newEmbed.setColor(value);
                    break;
                case 'embed-edit-author-modal':
                    newEmbed.setAuthor(value ? { name: value } : null);
                    break;
                case 'embed-edit-footer-modal':
                    newEmbed.setFooter(value ? { text: value } : null);
                    break;
                case 'embed-edit-image-modal':
                    newEmbed.setImage(value || null);
                    break;
                case 'embed-edit-thumb-modal':
                    newEmbed.setThumbnail(value || null);
                    break;
            }
        }
        await interaction.deferUpdate();
        await interaction.editReply({ embeds: [newEmbed] });
    }
}
exports.EmbedBuilderModalHandler = EmbedBuilderModalHandler;
//# sourceMappingURL=embedBuilderModals.js.map