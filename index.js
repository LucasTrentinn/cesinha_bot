const Discord = require('discord.js')
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Olá, eu sou o ${client.user.tag}. Como posso ajudar?`)
})

client.on("messageCreate", (message) => {
    if(message.content == "hi") {
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)
















