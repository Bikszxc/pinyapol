import { Command } from '@sapphire/framework';
import { PermissionFlagsBits, MessageFlags } from 'discord.js';
import { prisma } from '../../lib/prisma';

export class SetAdminCommand extends Command {
    public constructor(context: Command.LoaderContext, options: Command.Options) {
        super(context, {
            ...options,
            name: 'setadmin',
            description: 'Manage roles that can use bot admin commands.',
            requiredUserPermissions: ['Administrator'] // Native Discord check
        });
    }

    public override registerApplicationCommands(registry: Command.Registry) {
        registry.registerChatInputCommand((builder) =>
            builder
                .setName(this.name)
                .setDescription(this.description)
                .addSubcommand((command) =>
                    command
                        .setName('add')
                        .setDescription('Add a role to the bot admin list.')
                        .addRoleOption((option) => option.setName('role').setDescription('The role to authorize.').setRequired(true))
                )
                .addSubcommand((command) =>
                    command
                        .setName('remove')
                        .setDescription('Remove a role from the bot admin list.')
                        .addRoleOption((option) => option.setName('role').setDescription('The role to de-authorize.').setRequired(true))
                )
                .addSubcommand((command) => command.setName('list').setDescription('List authorized admin roles.')),
            { guildIds: ['878242949115310110', '1430185547619500074'] }
        );
    }

    public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
        if (!interaction.guildId) return;

        const subcommand = interaction.options.getSubcommand();

        if (subcommand === 'list') {
            const config = await prisma.guildConfig.findUnique({ where: { guildId: interaction.guildId } });
            if (!config || config.adminRoleIds.length === 0) {
                return interaction.reply({ content: 'No custom admin roles configured.', flags: [MessageFlags.Ephemeral] });
            }
            const roles = config.adminRoleIds.map((id) => `<@&${id}>`).join('\n');
            return interaction.reply({ content: `**Authorized Admin Roles:**\n${roles}`, flags: [MessageFlags.Ephemeral] });
        }

        const role = interaction.options.getRole('role', true);
        
        if (subcommand === 'add') {
            const config = await prisma.guildConfig.upsert({
                where: { guildId: interaction.guildId },
                create: { guildId: interaction.guildId, adminRoleIds: [role.id] },
                update: {}
            });
            
            if (config.adminRoleIds.includes(role.id)) {
                await interaction.reply({ content: 'That role is already an admin role.', flags: [MessageFlags.Ephemeral] });
                setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
                return;
            }

            await prisma.guildConfig.update({
                where: { guildId: interaction.guildId },
                data: { adminRoleIds: { push: role.id } }
            });

            await interaction.reply({ content: `Added ${role} to bot admins.`, flags: [MessageFlags.Ephemeral] });
            setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
            return;
        }

        if (subcommand === 'remove') {
            const config = await prisma.guildConfig.findUnique({ where: { guildId: interaction.guildId } });
            if (!config || !config.adminRoleIds.includes(role.id)) {
                await interaction.reply({ content: 'That role is not an admin role.', flags: [MessageFlags.Ephemeral] });
                setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
                return;
            }

            const newRoles = config.adminRoleIds.filter((id) => id !== role.id);
            await prisma.guildConfig.update({
                where: { guildId: interaction.guildId },
                data: { adminRoleIds: newRoles }
            });

            await interaction.reply({ content: `Removed ${role} from bot admins.`, flags: [MessageFlags.Ephemeral] });
            setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
            return;
        }
    }
}
