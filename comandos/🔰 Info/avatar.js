const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: [],
    run: async (client, message, args, prefix) => {

    const usuario = message.mentions.users.first() || message.author

    const embed = new Discord.MessageEmbed()
    .setTitle(`Avatar De ${usuario.tag}`)
    .setImage(usuario.displayAvatarURL({ size: 1024, dynamic: true}))
    .setFooter({text: `Solicitado Por: ${message.author.tag}`})
    .setColor("RANDOM")

    message.reply({ embeds: [embed] })
}}