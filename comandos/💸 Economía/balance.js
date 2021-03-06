const {asegurar_todo} = require(`${process.cwd()}/handlers/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require('discord.js');
module.exports = {
    name: "balance",
    aliases: ["dinero", "cartera", "bal", "wallet", "bank"],
    desc: "Sirve para ver la cartera de un Usuario",
    run: async (client, message, args, prefix) => {
        const user = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.member;
        if(user.bot) return message.reply("ā **Los bots no puede tener dinero!**");
        await asegurar_todo(null, user.id);
        let data = await ecoSchema.findOne({userID: user.id});
        message.reply({
            embeds: [new Discord.MessageEmbed()
            .setAuthor({name: `Cartera de ${user.user.tag}`, iconURL: user.displayAvatarURL({dynamic: true})})
            .setThumbnail('https://i.pinimg.com/originals/95/c0/8a/95c08a3aecb37ef761be2546fb93a76c.gif')
            .setDescription(`šµ **Dinero:** \`${data.dinero} monedas\`\nš¦ **Banco:** \`${data.banco} monedas\``)
            .setColor(client.color)
            ]
        });
    }
}

