module.exports = async (client , member) => {
    const Zeew = require('zeew'); 
    const Discord = require('discord.js'); 
    const { MessageAttachment } = require('discord.js')
  
   const canal = member.guild.channels.cache.get('bienvenidas-prueba') 
    if(!canal) return;
    
    let bienvenida = new Zeew.Bienvenida() 
    .token("") 
    .estilo("classic") 
    .avatar() 
    .fondo("https://c.tenor.com/ce0kdBXzKk0AAAAd/reincarnated-as-a-slime-rimuru-tempest.gif") 
    .colorTit("#ff6600")
    .titulo(`Bienvenido :D`) 
    .colorDesc("009aff") 
    .descripcion(`${member.guild.memberCount} usuarios`) 
    let img = await Zeew.WelcomeZeew(bienvenida);
    let attachment = new MessageAttachment(img, "zeewapi-img.png");
    canal.send({ embeds: [attachment] }); 
  
}