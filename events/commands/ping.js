import { SlashCommandBuilder } from 'discord.js';

function create() {
    const command = new SlashCommandBuilder()
        .setName('ping')
        .setDescription('a');

    return command.toJSON();
}

function invoke(interaction) {
    interaction.reply({ content: `Latency: FIXMEms` });
}

export { create, invoke };
