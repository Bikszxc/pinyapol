"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBotAdmin = isBotAdmin;
exports.checkAdminAndReply = checkAdminAndReply;
const discord_js_1 = require("discord.js");
const prisma_1 = require("./prisma");
/**
 * Checks if the user is a Bot Admin.
 * 1. Is Server Owner?
 * 2. Has 'Administrator' permission?
 * 3. Has one of the configured Admin Roles?
 */
async function isBotAdmin(interaction) {
    if (!interaction.guild || !interaction.member)
        return false;
    // 1. Owner
    if (interaction.guild.ownerId === interaction.user.id)
        return true;
    const member = interaction.member;
    // 2. Administrator Permission
    if (member.permissions.has(discord_js_1.PermissionFlagsBits.Administrator))
        return true;
    // 3. Configured Roles
    const config = await prisma_1.prisma.guildConfig.findUnique({
        where: { guildId: interaction.guild.id }
    });
    if (!config || config.adminRoleIds.length === 0)
        return false;
    return member.roles.cache.some(r => config.adminRoleIds.includes(r.id));
}
/**
 * Checks admin status and replies with error if not.
 * Returns true if admin, false if not (and replied).
 */
async function checkAdminAndReply(interaction) {
    const isAdmin = await isBotAdmin(interaction);
    if (!isAdmin) {
        await interaction.reply({ content: 'You do not have permission to use this command.', flags: [discord_js_1.MessageFlags.Ephemeral] });
        return false;
    }
    return true;
}
//# sourceMappingURL=checkAdmin.js.map