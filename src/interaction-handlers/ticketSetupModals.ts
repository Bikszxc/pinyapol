import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import { ModalSubmitInteraction, MessageFlags } from 'discord.js';
import { prisma } from '../lib/prisma';

export class TicketSetupModalHandler extends InteractionHandler {
    public constructor(ctx: InteractionHandler.LoaderContext, options: InteractionHandler.Options) {
        super(ctx, {
            ...options,
            interactionHandlerType: InteractionHandlerTypes.ModalSubmit
        });
    }

    public override parse(interaction: ModalSubmitInteraction) {
        if (!interaction.customId.startsWith('ticket-setup-')) {
            return this.none();
        }
        return this.some();
    }

    public async run(interaction: ModalSubmitInteraction) {
         if (!interaction.guildId) return;

         if (interaction.customId === 'ticket-setup-msg-modal') {
             const message = interaction.fields.getTextInputValue('message');
             await prisma.ticketSettings.update({
                 where: { guildId: interaction.guildId },
                 data: { welcomeMessage: message }
             });
             await interaction.reply({ content: 'Welcome message updated! Click "Refresh" on the dashboard to see changes.', flags: [MessageFlags.Ephemeral] });
             setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
             return;
         }

         if (interaction.customId === 'ticket-setup-panel-msg-modal') {
             const message = interaction.fields.getTextInputValue('message');
             await prisma.ticketSettings.update({
                 where: { guildId: interaction.guildId },
                 data: { ticketPanelMessage: message }
             });
             await interaction.reply({ content: 'Ticket panel message updated! Click "Refresh" on the dashboard to see changes.', flags: [MessageFlags.Ephemeral] });
             setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
             return;
         }

         if (interaction.customId === 'ticket-setup-add-cat-modal') {
             const name = interaction.fields.getTextInputValue('name');
             const emoji = interaction.fields.getTextInputValue('emoji');
             const roleId = interaction.fields.getTextInputValue('roleId');

             const settings = await prisma.ticketSettings.findUnique({ where: { guildId: interaction.guildId } });
             if (!settings) return;

             await prisma.ticketCategory.create({
                 data: {
                     ticketSettingsId: settings.id,
                     name,
                     emoji: emoji || null,
                     roleId: roleId || null
                 }
             });

             await interaction.reply({ content: `Category "**${name}**" added! Click "Refresh" on the dashboard to see changes.`, flags: [MessageFlags.Ephemeral] });
             setTimeout(() => interaction.deleteReply().catch(() => {}), 5000);
             return;
         }
    }
}
