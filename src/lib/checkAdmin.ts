import { CommandInteraction, GuildMember, PermissionFlagsBits, MessageFlags } from 'discord.js';
import { prisma } from './prisma';

/**
 * Checks if the user is a Bot Admin.
 * 1. Is Server Owner?
 * 2. Has 'Administrator' permission?
 * 3. Has one of the configured Admin Roles?
 */
export async function isBotAdmin(interaction: CommandInteraction): Promise<boolean> {
    if (!interaction.guild || !interaction.member) return false;

    // 1. Owner
    if (interaction.guild.ownerId === interaction.user.id) return true;

    const member = interaction.member as GuildMember;

    // 2. Administrator Permission
    if (member.permissions.has(PermissionFlagsBits.Administrator)) return true;

    // 3. Configured Roles
    const config = await prisma.guildConfig.findUnique({
        where: { guildId: interaction.guild.id }
    });

    if (!config || config.adminRoleIds.length === 0) return false;

    return member.roles.cache.some(r => config.adminRoleIds.includes(r.id));
}

/**
 * Checks admin status and replies with error if not.
 * Returns true if admin, false if not (and replied).
 */
export async function checkAdminAndReply(interaction: CommandInteraction): Promise<boolean> {
    const isAdmin = await isBotAdmin(interaction);
    if (!isAdmin) {
        await interaction.reply({ content: 'You do not have permission to use this command.', flags: [MessageFlags.Ephemeral] });
        return false;
    }
    return true;
}
