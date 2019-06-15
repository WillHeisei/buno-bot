const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
    message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - m.createdTimestamp
        let apilatency = Math.round(bot.ping)

        m.delete();

        let botCurrentPing = new Discord.RichEmbed()
        .setTitle("Bot Latency/API Latency")
        .setDescription(`Shows the Bot and API Latency.`)
        .addField(`Bot Latency`, `**${ping}**`)
        .addField(`API Latency`, `**${apilatency}**`)
        .setTimestamp()
        .setColor(colour.red)

        message.channel.send({embed : botCurrentPing})
    })
}

module.exports.config = {
    name: "ping",
    aliases: ["latency", "botlatency", "botping", "apiping", "apilatency"],
    description: "Provides the latency of the bot.",
    noalias: "No aliases.",
    accessableby: "Verified"
}