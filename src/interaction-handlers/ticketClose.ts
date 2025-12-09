import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import { ButtonInteraction, ChannelType, EmbedBuilder, MessageFlags, TextChannel, ThreadChannel, Collection, Message } from 'discord.js';
import { prisma } from '../lib/prisma';
import { writeFileSync } from 'fs';
import { join } from 'path';

export class TicketCloseButtonHandler extends InteractionHandler {
    public constructor(ctx: InteractionHandler.LoaderContext, options: InteractionHandler.Options) {
        super(ctx, {
            ...options,
            interactionHandlerType: InteractionHandlerTypes.Button
        });
    }

    public override parse(interaction: ButtonInteraction) {
        if (interaction.customId !== 'ticket-close-button') {
            return this.none();
        }

        return this.some();
    }

    public async run(interaction: ButtonInteraction) {
        if (!interaction.guild || !interaction.channel) {
            return interaction.reply({ content: 'This command can only be used in a server channel.', flags: [MessageFlags.Ephemeral] });
        }

        await interaction.deferReply({ flags: [MessageFlags.Ephemeral] });

        // Find the ticket associated with this channel
        const ticket = await prisma.ticket.findUnique({
            where: { channelId: interaction.channel.id }
        });

        if (!ticket) {
            return interaction.editReply({ content: 'This channel is not an active ticket.' });
        }

        // Only the ticket creator or server owner/admin can close a ticket
        if (ticket.userId !== interaction.user.id && interaction.guild.ownerId !== interaction.user.id) {
             // TODO: Add more robust permission checks for staff roles later.
            return interaction.editReply({ content: 'You do not have permission to close this ticket.' });
        }

        try {
            // Generate transcript if channel is configured
            const guildConfig = await prisma.guildConfig.findUnique({
                where: { guildId: interaction.guild.id }
            });

            if (guildConfig?.logChannelId && interaction.channel.isThread()) {
                const thread = interaction.channel as ThreadChannel;
                const messages = await this.fetchAllMessages(thread);
                const html = this.generateTranscriptHtml(messages, ticket, interaction.guild.name);
                
                // Save to file system
                const filename = `transcript-${ticket.id}.html`;
                const filePath = join(process.cwd(), 'transcripts', filename);
                writeFileSync(filePath, html);
                
                // Construct URL (Default to localhost:3000 if not configured) 
                const baseUrl = process.env.TRANSCRIPT_BASE_URL || 'http://localhost:3000'; 
                const transcriptUrl = `${baseUrl}/transcripts/${filename}`;

                const logChannel = await interaction.guild.channels.fetch(guildConfig.logChannelId);
                if (logChannel && logChannel.isTextBased()) {
                     const transcriptEmbed = new EmbedBuilder()
                        .setTitle('Ticket Closed')
                        .setColor('Red')
                        .addFields(
                            { name: 'Ticket ID', value: ticket.id, inline: true },
                            { name: 'User', value: `<@${ticket.userId}>`, inline: true },
                            { name: 'Closed By', value: interaction.user.tag, inline: true }
                        )
                        .setDescription(`[📄 View Transcript](${transcriptUrl})`)
                        .setTimestamp();

                    await (logChannel as TextChannel).send({ embeds: [transcriptEmbed] });
                }
            }

            // Update ticket status in DB
            await prisma.ticket.update({
                where: { id: ticket.id },
                data: { status: 'CLOSED', closedAt: new Date() }
            });

            const embed = new EmbedBuilder()
                .setColor('Red')
                .setTitle('Ticket Closed')
                .setDescription(`This ticket has been closed by ${interaction.user}.`)
                .setTimestamp();
            
            // Check if interaction.channel is a TextChannel or ThreadChannel before sending
            if (interaction.channel.type === ChannelType.GuildText || interaction.channel.isThread()) {
                await (interaction.channel as TextChannel | ThreadChannel).send({ embeds: [embed] });
            }

            await interaction.editReply({ content: 'Ticket closed. This thread will be deleted in 10 seconds.' });
            
            setTimeout(() => {
                interaction.channel?.delete().catch(err => this.container.logger.debug('Failed to delete ticket channel (already deleted?):', err));
            }, 10000);

            return;

        } catch (error) {
            this.container.logger.error('Error closing ticket:', error);
            return interaction.editReply({ content: 'Failed to close ticket. Please check my permissions.' });
        }
    }

    private async fetchAllMessages(thread: ThreadChannel): Promise<Message[]> {
        let messages: Message[] = [];
        let lastId: string | undefined;

        while (true) {
            const fetched: Collection<string, Message> = await thread.messages.fetch({ limit: 100, before: lastId });
            if (fetched.size === 0) break;

            messages.push(...fetched.values());
            lastId = fetched.last()?.id;

            if (fetched.size < 100) break;
        }

        return messages.reverse(); // Chronological order
    }

    private generateTranscriptHtml(messages: Message[], ticket: any, guildName: string): string {
        const escapeHtml = (text: string) => {
            return text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;")
                .replace(/\n/g, "<br>");
        };

        const rows = messages.map(msg => `
            <div class="message">
                <div class="header">
                    <span class="username">${escapeHtml(msg.author.tag)}</span>
                    <span class="timestamp">${msg.createdAt.toLocaleString()}</span>
                </div>
                <div class="content">
                    ${escapeHtml(msg.content)}
                    ${msg.attachments.size > 0 ? `<br><i>[Attachments: ${msg.attachments.map(a => a.name).join(', ')}]</i>` : ''}
                </div>
            </div>
        `).join('');

        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Transcript - ${ticket.id}</title>
                <style>
                    body { font-family: sans-serif; background-color: #36393f; color: #dcddde; padding: 20px; }
                    .header-info { margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #4f545c; }
                    .message { margin-bottom: 15px; padding: 10px; background-color: #2f3136; border-radius: 5px; }
                    .username { font-weight: bold; color: #ffffff; margin-right: 10px; }
                    .timestamp { font-size: 0.8em; color: #72767d; }
                    .content { margin-top: 5px; }
                </style>
            </head>
            <body>
                <div class="header-info">
                    <h1>Ticket Transcript</h1>
                    <p><strong>Server:</strong> ${escapeHtml(guildName)}</p>
                    <p><strong>Ticket ID:</strong> ${ticket.id}</p>
                    <p><strong>Opened By:</strong> <@${ticket.userId}></p>
                </div>
                <div class="messages">
                    ${rows}
                </div>
            </body>
            </html>
        `;
    }
}