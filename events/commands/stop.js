import { SlashCommandBuilder } from 'discord.js';

function create() {
    const command = new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stops the bot.');

    return command.toJSON();
}

async function invoke(interaction) {
    const user = await interaction.user.id;
    const allowedUsers = process.env.ALLOWED_USERS.split(',');

    while(!user || !allowedUsers);
    if (allowedUsers.includes(user)) {
        await interaction.deferReply();
        await interaction.deleteReply();
        process.exit(0);
    } else {
        await interaction.reply('You\'re not allowed to turn me off!');
    }
}

export { create, invoke };
