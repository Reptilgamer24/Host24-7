const Discord = require('discord.js')

var nekos = [
    "https://nekocdn.com/images/dlIMyZkQT.jpg",
    "https://w0.peakpx.com/wallpaper/307/1014/HD-wallpaper-neko-girl-cute-maid.jpg",
    "https://ih1.redbubble.net/image.1553226439.9239/flat,750x1000,075,f.jpg",
    "https://i.pinimg.com/originals/03/8c/73/038c73e08f722113c2837a708777db8b.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/577/78/376/anime-girl-kuro-neko-black-cat-white-hair-wallpaper-preview.jpg",
    "https://i.pinimg.com/originals/c3/a0/90/c3a0905a667600f51b94a01941bf2c81.jpg",
    "https://i.pinimg.com/originals/30/04/4b/30044b63d811e01908c41b2a5da2cc17.gif",
    "https://i.pinimg.com/564x/bc/f3/e5/bcf3e5da58bfe0bd39bd02808e0911b3.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/383/801/116/anime-girls-genshin-impact-hutao-genshin-impact-cat-girl-hd-wallpaper-preview.jpg",
    "https://i.pinimg.com/564x/c3/a0/90/c3a0905a667600f51b94a01941bf2c81.jpg",
    "https://pm1.narvii.com/6054/d6de8ef5c915843e60b1eb93532e3e11e591b693_hq.jpg",
    "https://pm1.narvii.com/6894/7f972fa9a6e7d1a675edd39762f714ab738c3c9dr1-323-456v2_hq.jpg",
    "https://pm1.narvii.com/6894/55300fed03058105715497724c9a18ea6761ae6er1-320-459v2_hq.jpg",
    "https://pm1.narvii.com/6894/ed6eec903c9ecda9b5c26264d31ac605f17fe37er1-720-960v2_hq.jpg",
    "https://pm1.narvii.com/6894/2c80cf339bb346227a75716d12aced9ae45ee746r1-236-373v2_hq.jpg",
    "https://animesher.com/orig/0/96/966/9669/animesher.com_chica-girl-neko-966965.png",
    "https://cdn.discordapp.com/attachments/975778216327397439/976309851124822076/unknown.png",
    "https://cdn.discordapp.com/attachments/935312383109369939/976616879269511168/unknown.png"
];

module.exports = {
    name: "neko",
    aliases: ["gata"],
    desc: "Chika neko nya nya",
    run: async (client, message, args, prefix) => {

            let neko = nekos[Math.floor(Math.random() * nekos.length)];
        
            const embed = new Discord.MessageEmbed()
            .setTitle(`**Nya nya chica neko!!**`)
            .setImage(`${neko}`)
            .setFooter({text: `Solicitado Por: ${message.author.tag}`})
            .setColor("RANDOM")
            
        
            message.reply({ embeds: [embed] })
            
    }
}