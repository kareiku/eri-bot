import { SlashCommandBuilder } from 'discord.js';

function create() {
    const command = new SlashCommandBuilder()
        .setName('reverse')
        .setDescription('Sends the desired message, reversed.')
        .addStringOption(option => option
            .setName('message')
            .setDescription('The message to be sent, reversed.')
            .setRequired(true)
        );

    return command.toJSON();
}

async function invoke(interaction) {
    const message = interaction.options.getString('message');

    await interaction.deferReply();
    await interaction.deleteReply();
    await interaction.channel.send(message.split('').reverse().join(''));
}

export { create, invoke };
