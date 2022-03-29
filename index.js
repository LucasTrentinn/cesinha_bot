const Discord = require('discord.js')
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const canalBemVindoID = "958152142219247688"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(canalBemVindoID).send(`<@${member.id}>, seja bem vindo!`)
})

client.login(process.env.TOKEN)