import { SlashCommandBuilder } from 'discord.js';

function create() {
    const command = new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with the current ping.');

    return command.toJSON();
}

async function invoke(interaction) {
    await interaction.reply({ content: `Latency: ${Date.now() - interaction.createdTimestamp}ms` });
}

export { create, invoke };
