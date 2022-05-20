const Discord = require('discord.js');
const config = require('./config/config.json')
const fs = require('fs');
const mongoose = require('mongoose')
require('colors')

const client = new Discord.Client({
    restTimeOffset: 0,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'],
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    ],
})

client.on("ready", () => {
    function presence() {
        client.user.setPresence({
            activities: [
              { name: ">>help" },
              { name: "Actualizando" },
              { name: "Metiendo Mejoras" }
            ],
            status: "on",
          });
    }
    presence(),
      console.log(`
╔═════════════════════════════════════════════════════╗
║                                                     ║
║         Precencia ejecutada Correctamente           ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`.blue)
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.color = config.color;

function requerirhandlers() {
    ["command", "events", "distube", "reaccion_roles", "tickets", "sugerencias", "sorteos", "niveles"].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord)
        } catch (e) {
            console.warn(e)
        }
    })
}
requerirhandlers();

client.login(config.token).catch(() => console.log(`-[X]- NO HAS ESPECIFICADO UN TOKEN VALIDO O TE FALTAN INTENTOS -[X]-\n [-] ACTIVA LOS INTENTOS EN https://discord.dev [-]`.red))
