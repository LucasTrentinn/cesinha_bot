// Here at index.js you'll find the main functions to make the bot works.

// Declarations
const Discord = require('discord.js')
require("dotenv").config()
// const generateImage = require('./generateImage.js')

// Bot variables and creation
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: "n.",
    owners:["191383093712519179"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require('./handlers/events')(bot, reload)

client.loadEvents(bot, false)

module.exports = bot

// // Functions
// client.on("ready", () => {
//     console.log(`Olá, eu sou o ${client.user.tag}. Como posso ajudar?`)
// })

// client.on("messageCreate", (message) => {
//     if(message.content == "hi") {
//         message.reply("Hello World!")
//     }
// })

// const canalBemVindoID = "958152142219247688"

// client.on("guildMemberAdd", async (member) => {
//     const img = await generateImage(member)
//     member.guild.channels.cache.get(canalBemVindoID).send({
//         content: `<@${member.id}>, seja bem vindo!`,
//         files: [img]
//     })
// })


// Managing the token
client.login(process.env.TOKEN)