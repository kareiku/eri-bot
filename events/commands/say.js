import { SlashCommandBuilder } from 'discord.js';

function create() {
    const command = new SlashCommandBuilder()
        .setName('say')
        .setDescription('Says the desired message.')
        .addStringOption(option => option
            .setName('message')
            .setDescription('The message to be sent.')
            .setRequired(true)
        );

    return command.toJSON();
}

async function invoke(interaction) {
    await interaction.deferReply();
    await interaction.deleteReply();
    await interaction.channel.send(interaction.options.getString('message'));
}

export { create, invoke };
