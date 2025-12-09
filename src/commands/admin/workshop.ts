import { Command } from '@sapphire/framework';
import { ApplicationCommandOptionType, EmbedBuilder, ColorResolvable, MessageFlags } from 'discord.js';
import { PaginatedMessage } from '@sapphire/discord.js-utilities';
import { prisma } from '../../lib/prisma';
import { getWorkshopDetails } from '../../lib/steam';
import { checkAdminAndReply } from '../../lib/checkAdmin';

export class WorkshopCommand extends Command {
	public constructor(context: Command.LoaderContext, options: Command.Options) {
		super(context, {
			...options,
			name: 'workshop',
			description: 'Manage Project Zomboid Steam Workshop mod updates.'
		});
	}

	public override registerApplicationCommands(registry: Command.Registry) {
		registry.registerChatInputCommand(
			(builder) =>
				builder
					.setName(this.name)
					.setDescription(this.description)
					.addSubcommand((command) =>
						command
							.setName('add')
							.setDescription('Add workshop IDs to the update monitor.')
							.addStringOption((option) =>
								option
									.setName('workshop_ids')
									.setDescription('Semicolon-separated Steam Workshop IDs (e.g., 12345;67890).')
									.setRequired(true)
							)
					)
					.addSubcommand((command) =>
						command
							.setName('remove')
							.setDescription('Remove workshop IDs from the update monitor.')
							.addStringOption((option) =>
								option
									.setName('workshop_ids')
									.setDescription('Semicolon-separated Steam Workshop IDs (e.g., 12345;67890).')
									.setRequired(false) // Make optional
									.setAutocomplete(true)
							)
                            .addBooleanOption((option) =>
                                option
                                    .setName('all')
                                    .setDescription('Set to true to remove all monitored workshop IDs.')
                                    .setRequired(false)
                            )
					)
					.addSubcommand((command) =>
						command
							.setName('setchannel')
							.setDescription('Set the channel for workshop update notifications.')
							.addChannelOption((option) =>
								option
									.setName('channel')
									.setDescription('The channel to send notifications to.')
									.setRequired(true)
							)
					)
					.addSubcommand((command) => command.setName('list').setDescription('List all monitored workshop IDs.'))
                    .addSubcommandGroup((group) =>
                        group
                            .setName('mention')
                            .setDescription('Manage users/roles to mention on update.')
                            .addSubcommand((sub) =>
                                sub
                                    .setName('add')
                                    .setDescription('Add a user or role to mention.')
                                    .addRoleOption((opt) => opt.setName('role').setDescription('Role to mention'))
                                    .addUserOption((opt) => opt.setName('user').setDescription('User to mention'))
                            )
                            .addSubcommand((sub) =>
                                sub
                                    .setName('remove')
                                    .setDescription('Remove a user or role from mentions.')
                                    .addRoleOption((opt) => opt.setName('role').setDescription('Role to remove'))
                                    .addUserOption((opt) => opt.setName('user').setDescription('User to remove'))
                            )
                            					.addSubcommand((sub) => sub.setName('list').setDescription('List configured mentions.'))
                                                ),
                            			{ guildIds: ['878242949115310110', '1430185547619500074'] } // Your actual Guild ID
                            		);	}

	public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		if (!interaction.guildId) {
			return interaction.reply({ content: 'This command can only be used in a server.', flags: [MessageFlags.Ephemeral] });
		}

		if (!(await checkAdminAndReply(interaction))) return;

		const subcommandGroup = interaction.options.getSubcommandGroup();
		const subcommand = interaction.options.getSubcommand();
		const workshopIdsString = interaction.options.getString('workshop_ids');
		const workshopIds = workshopIdsString ? workshopIdsString.split(';').map((id) => id.trim()).filter(Boolean) : [];

        if (subcommandGroup === 'mention') {
            return this.handleMention(interaction, subcommand);
        }

		switch (subcommand) {
			case 'add':
				return this.handleAdd(interaction, workshopIds);
			case 'remove':
				return this.handleRemove(interaction, workshopIds);
			case 'setchannel':
				return this.handleSetChannel(interaction);
			case 'list':
				return this.handleList(interaction);
			default:
				return interaction.reply({ content: 'Unknown subcommand.', ephemeral: true });
        }
    }

    private async handleMention(interaction: Command.ChatInputCommandInteraction, subcommand: string) {
        if (subcommand === 'list') {
            const config = await prisma.guildConfig.findUnique({ where: { guildId: interaction.guildId! } });
            if (!config || config.updateMentionIds.length === 0) {
                return interaction.reply({ content: 'No mentions configured.', flags: [MessageFlags.Ephemeral] });
            }
            // Format mentions based on whether they are roles or users.
            // We don't track type, but <@id> works for users and <@&id> for roles.
            // We can try both or just list IDs?
            // Actually, we can fetch them. Or just assume role if in guild.roles?
            // Simpler: Just try to format as `<@&id>` (Role) or `<@id>` (User).
            // Problem: If we don't know which is which, it's hard.
            // But wait, the bot can just list them.
            // Let's iterate and try to resolve? No, that's slow.
            // Let's just output raw IDs formatted as both? No.
            // Let's output `<@&id>` and if it's a user it shows as broken role?
            
            // Better: When adding, we know the type. Maybe we should have stored type?
            // Too late for schema change without migration pain.
            // Let's just print the IDs and let discord parse `<@id>` (User) vs `<@&id>` (Role).
            // Actually, if I print `<@&123>` and it's a user, it shows `@deleted-role`.
            
            // Hack: List them as "IDs: ..."
            // Or better: Resolve them.
            const mentions = config.updateMentionIds.map(id => {
                // Check if role exists in cache
                if (interaction.guild?.roles.cache.has(id)) return `<@&${id}> (Role)`;
                return `<@${id}> (User/Unknown)`;
            });
            
            return interaction.reply({ content: `**Configured Mentions:**\n${mentions.join('\n')}`, flags: [MessageFlags.Ephemeral] });
        }

        const role = interaction.options.getRole('role');
        const user = interaction.options.getUser('user');
        const targetId = role?.id || user?.id;
        const typeLabel = role ? 'Role' : 'User';

        if (!targetId) {
            return interaction.reply({ content: 'Please provide either a role or a user.', flags: [MessageFlags.Ephemeral] });
        }

        if (subcommand === 'add') {
            const config = await prisma.guildConfig.upsert({
                where: { guildId: interaction.guildId! },
                create: { guildId: interaction.guildId! },
                update: {}
            });

            if (config.updateMentionIds.includes(targetId)) {
                await interaction.reply({ content: `That ${typeLabel} is already in the mention list.`, flags: [MessageFlags.Ephemeral] });
                setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
                return;
            }

            await prisma.guildConfig.update({
                where: { guildId: interaction.guildId! },
                data: { updateMentionIds: { push: targetId } }
            });

            await interaction.reply({ content: `Added ${role || user} to update mentions.`, flags: [MessageFlags.Ephemeral] });
            setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
            return;
        }

        if (subcommand === 'remove') {
            const config = await prisma.guildConfig.findUnique({ where: { guildId: interaction.guildId! } });
            if (!config || !config.updateMentionIds.includes(targetId)) {
                await interaction.reply({ content: `That ${typeLabel} is not in the mention list.`, flags: [MessageFlags.Ephemeral] });
                setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
                return;
            }

            const newIds = config.updateMentionIds.filter(id => id !== targetId);
            await prisma.guildConfig.update({
                where: { guildId: interaction.guildId! },
                data: { updateMentionIds: newIds
                }
            });

            await interaction.reply({ content: `Removed ${role || user} from update mentions.`, flags: [MessageFlags.Ephemeral] });
            setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
            return;
        }
    }

	private async handleSetChannel(interaction: Command.ChatInputCommandInteraction) {
		const channel = interaction.options.getChannel('channel', true);

		await prisma.guildConfig.upsert({
			where: { guildId: interaction.guildId! },
			update: { updateChannelId: channel.id },
			create: {
				guildId: interaction.guildId!,
				updateChannelId: channel.id
			}
		});

		await interaction.reply({ content: `Workshop update notifications will now be sent to <#${channel.id}>.`, flags: [MessageFlags.Ephemeral] });
        setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
        return;
	}

	private async handleAdd(interaction: Command.ChatInputCommandInteraction, workshopIds: string[]) {
		if (workshopIds.length === 0) {
			return interaction.reply({ content: 'Please provide at least one workshop ID to add.', flags: [MessageFlags.Ephemeral] });
		}

		await interaction.deferReply({ ephemeral: true });

		const validWorkshopIds: string[] = [];
		const invalidWorkshopIds: string[] = [];
        let validDetailsMap = new Map<string, any>();

		try {
			const details = await getWorkshopDetails(workshopIds);
			validDetailsMap = new Map(details.map((d) => [d.publishedfileid, d]));

			for (const id of workshopIds) {
				if (validDetailsMap.has(id)) {
					validWorkshopIds.push(id);
				} else {
					invalidWorkshopIds.push(id);
				}
			}
		} catch (error: any) {
			this.container.logger.error('Error fetching workshop details:', error);
			return interaction.editReply({ content: `Failed to validate workshop IDs with Steam API: ${error.message}` });
		}

		if (validWorkshopIds.length === 0) {
			return interaction.editReply({ content: `No valid workshop IDs provided. Invalid: ${invalidWorkshopIds.join(', ')}` });
		}

		const createdMods: string[] = [];
		const alreadyMonitored: string[] = [];

		for (const workshopId of validWorkshopIds) {
			const details = validDetailsMap.get(workshopId);
			const title = details ? details.title : 'Unknown Title';

			try {
				await prisma.modWatchlist.create({
					data: {
						guildId: interaction.guildId!,
						workshopId: workshopId,
						title: title,
						lastUpdated: new Date() // Will be updated by scheduled task
					}
				});
				createdMods.push(`${title} (\`${workshopId}\`)`);
			} catch (error: any) {
				if (error.code === 'P2002') {
					alreadyMonitored.push(`${title} (\`${workshopId}\`)`);
				} else {
					this.container.logger.error(`Error adding workshop ID ${workshopId} to watchlist:`, error);
				}
			}
		}

        const paginatedMessage = new PaginatedMessage();
        const allItems = [
            ...createdMods.map(i => `✅ Added: ${i}`),
            ...alreadyMonitored.map(i => `⚠️ Exists: ${i}`),
            ...invalidWorkshopIds.map(i => `❌ Invalid: ${i}`)
        ];

        const chunks = this.chunkArray(allItems, 15); // 15 items per page

        if (chunks.length === 0) {
             return interaction.editReply('No actions taken.');
        }

        chunks.forEach((chunk, index) => {
            paginatedMessage.addPageEmbed((embed) =>
                embed
                    .setTitle('Workshop Monitor: Add Results')
                    .setColor('Green')
                    .setDescription(chunk.join('\n'))
                    .setFooter({ text: `Page ${index + 1} of ${chunks.length}` })
            );
        });

		return paginatedMessage.run(interaction);
	}

	private async handleRemove(interaction: Command.ChatInputCommandInteraction, workshopIds: string[]) {
        const removeAll = interaction.options.getBoolean('all') ?? false;

        if (!removeAll && workshopIds.length === 0) {
            return interaction.reply({ content: 'Please provide at least one workshop ID to remove, or set `all` to true.', flags: [MessageFlags.Ephemeral] });
        }

		await interaction.deferReply({ ephemeral: true });

        // Fetch items to be deleted to display names
        let itemsToDelete: { title: string | null; workshopId: string }[] = [];
        if (removeAll) {
            itemsToDelete = await prisma.modWatchlist.findMany({
                where: { guildId: interaction.guildId! },
                select: { title: true, workshopId: true }
            });
        } else {
            itemsToDelete = await prisma.modWatchlist.findMany({
                where: {
                    guildId: interaction.guildId!,
                    workshopId: { in: workshopIds }
                },
                select: { title: true, workshopId: true }
            });
        }

        let deletedCount = 0;
        if (itemsToDelete.length > 0) {
            const result = await prisma.modWatchlist.deleteMany({
                where: {
                    guildId: interaction.guildId!,
                    workshopId: { in: itemsToDelete.map(i => i.workshopId) }
                }
            });
            deletedCount = result.count;
        }

		const embed = new EmbedBuilder()
			.setTitle('Workshop Monitor: Remove IDs')
			.setColor('Orange');

        let description = `Removed ${deletedCount} workshop ID(s).`;

        if (deletedCount > 0) {
            const deletedDetails = itemsToDelete.map(i => '• ' + (i.title || 'Unknown') + ' (`' + i.workshopId + '`)');
            const displayList = deletedDetails.slice(0, 5);
            const remainingCount = deletedDetails.length - 5;

            description += '\n\n' + displayList.join('\n');
            if (remainingCount > 0) {
                description += `\n...and ${remainingCount} more.`;
            }
        }

        embed.setDescription(description);

        if (!removeAll && workshopIds.length > itemsToDelete.length) {
            const foundIds = new Set(itemsToDelete.map(i => i.workshopId));
            const notFoundIds = workshopIds.filter(id => !foundIds.has(id));

            if (notFoundIds.length > 0) {
                const val = notFoundIds.join('\n');
			    embed.addFields({ name: 'Workshop IDs Not Found', value: val.length > 1024 ? `${notFoundIds.length} IDs not found. (List too long)` : val, inline: false });
            }
		}

		await interaction.editReply({ embeds: [embed] });
        setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
        return;
	}

	private async handleList(interaction: Command.ChatInputCommandInteraction) {
		await interaction.deferReply({ ephemeral: true });

		const monitoredMods = await prisma.modWatchlist.findMany({
			where: { guildId: interaction.guildId! }
		});
        
        const guildConfig = await prisma.guildConfig.findUnique({
            where: { guildId: interaction.guildId! }
        });
        const channelMention = guildConfig?.updateChannelId ? `<#${guildConfig.updateChannelId}>` : 'Not configured';

		if (monitoredMods.length === 0) {
			return interaction.editReply({ content: `No workshop IDs are currently being monitored.\nNotification Channel: ${channelMention}` });
		}

        const items = monitoredMods.map((m) => `${m.title || 'Unknown'} (\`${m.workshopId}\`)`);
        const chunks = this.chunkArray(items, 15);

        const paginatedMessage = new PaginatedMessage();

        chunks.forEach((chunk, index) => {
            paginatedMessage.addPageEmbed((embed) => 
                embed
                    .setTitle('Workshop Monitor: Monitored IDs')
                    .setColor('Blue')
                    .setDescription(`**Notification Channel:** ${channelMention}\n\n${chunk.join('\n')}`)
                    .setFooter({ text: `Page ${index + 1} of ${chunks.length}` })
            );
        });

		return paginatedMessage.run(interaction);
	}

	public async autocompleteRun(interaction: Command.AutocompleteInteraction) {
		if (!interaction.guildId) return;

		const focusedOption = interaction.options.getFocused(true);

		if (focusedOption.name === 'workshop_ids') {
			const searchTerm = focusedOption.value.toLowerCase();
			const monitoredMods = await prisma.modWatchlist.findMany({
				where: {
					guildId: interaction.guildId!,
					OR: [
						{ workshopId: { contains: searchTerm } },
						{ title: { contains: searchTerm, mode: 'insensitive' } }
					]
				},
			take: 10 // Limit to 10 suggestions
			});

			const choices = monitoredMods.map((mod) => ({
				name: `${mod.title || 'Unknown Title'} (${mod.workshopId})`,
				value: mod.workshopId
			}));

			return interaction.respond(choices);
		}
	}

    private chunkArray<T>(array: T[], size: number): T[][] {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }
}