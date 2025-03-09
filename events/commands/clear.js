import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

function create() {
    const command = new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Deletes messages, if and only if they haven\'t been in the chat for 14 days or longer.')
        .addNumberOption(option => option
            .setName('quantity')
            .setDescription('The quantity of messages to delete.')
            .setRequired(true)
        );

    return command.toJSON();
}

async function invoke(interaction) {
    await interaction.deferReply();
    await interaction.deleteReply();
    if (interaction.guild.members.me.permissions.has(PermissionFlagsBits.ManageMessages)) {
        await interaction.channel.bulkDelete(Math.floor(Math.abs(interaction.options.getNumber('quantity'))));
    } else {
        interaction.channel.send('I don\'t have permissions to delete messages from others.');
    }
}

export { create, invoke };
