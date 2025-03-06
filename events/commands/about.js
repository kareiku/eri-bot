import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

function create() {
    const command = new SlashCommandBuilder()
        .setName('about')
        .setDescription('Sends information about the selected user.')
        .addUserOption(option => option
            .setName('user')
            .setDescription('The user whose about will be shown.')
            .setRequired(true)
        );

    return command.toJSON();
}

async function invoke(interaction) {
    const user = await interaction.options.getUser('user');
    while (!user);
    const embed = new EmbedBuilder()
        .setColor('Random')
        .setTitle(user.bot ? user.username : user.globalName)
        .setImage(user.avatarURL())
        .setFooter({ text: user.username });

    await interaction.reply({ embeds: [embed] });
}

export { create, invoke };
