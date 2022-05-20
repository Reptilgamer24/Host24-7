const Discord = require('discord.js')

var killgif = [
    "https://nekocdn.com/images/fA_3CqGmB.gif",
    "https://nekocdn.com/images/HNnrdYke.gif",
    "https://nekocdn.com/images/Tiqu_jxP.gif",
    "https://nekocdn.com/images/Tiqu_jxP.gif",
    "https://nekocdn.com/images/512X1rBhh.gif",
    "https://nekocdn.com/images/GS63a0Pu.gif",
    "https://nekocdn.com/images/WA_K5JBL.gif",
    "https://nekocdn.com/images/NZ7EEI0MJ.gif",
    "https://nekocdn.com/images/GinvSokV.gif",
    "https://nekocdn.com/images/7Q9dBd_a.gif"
];
module.exports = {
    name: "kill",
    aliases: [],
    desc: "Sirve para matar un usuario",
    run: async (client, message, args, prefix) => {

    let kill = killgif[Math.floor(Math.random() * killgif.length)];

    if (!args.length) return message.reply(" **Tienes que mencionar a alguien... -con miedo - **")
    
    const usuario = message.mentions.users.first()

    if (usuario.id == message.author.id) return message.channel.send("No te menciones a ti mismo jaja!!")

    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag} ha matado ha ${usuario.tag} `)
    .setImage(`${kill}`)
    .setFooter({text: `Que en paz descanse ${usuario.tag} :'v`})
    .setColor("RANDOM")
    

    message.reply({ embeds: [embed] })
    } 
}
