const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")
const images = require("../../image.json")

module.exports.run = async (bot, message, args) => {
    let noPerms = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("You do not have sufficient permissions to execute this command.")
    .setColor("#ff0000")
    .setTimestamp()
    if(message.author.id != "537650223988604938") return message.channel.send(noPerms)

    let importantEmbed = new Discord.RichEmbed()
    .setTitle(":flag_jp: **Important Links** :flag_jp:")
    .setDescription(`\n**[Main Group](https://www.roblox.com/games/2584751739/JP-Tokyo-Japan)**\n**[Japanese Self Defense Force](https://www.roblox.com/groups/4444215/JP-Japanese-Self-Defense-Force#!)**\n**[Ministry of Foreign Affairs](https://www.roblox.com/groups/4444239/JP-Ministry-of-Foreign-Affairs#!)**\n**[Public Security Intelligence Agency](https://www.roblox.com/groups/4444254/JP-Public-Security-Intelligence-Agency#!)**\n**[National Police Agency](https://www.roblox.com/groups/4510589/JP-National-Police-Agency#!)**\n**[Cabinet Intelligence and Research Office](https://www.roblox.com/groups/4566330/JP-Cabinet-Intelligence-and-Research-Office#!)**\n**[Imperial Guard](https://www.roblox.com/groups/4636289/JP-Imperial-Guard#!)**\n**[Imperial Agency](https://www.roblox.com/groups/4544872/JP-Imperial-Agency)**\n**[Imperial Family](https://www.roblox.com/groups/4442967/JP-Japanese-Imperial-Family)**\n**[Government of Japan](https://www.roblox.com/groups/4444372/JP-National-Diet-of-Japan#!/about)**\n\n**https://discord.gg/**`)
    .setColor(colour.red)
    .setThumbnail(message.guild.iconURL)
    
    let noChannel = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Couldn't find an **important-links** channel.")
    .setColor(colour.red)
    .setTimestamp();
    let importantChannel = message.guild.channels.find(n => n.name === "important-links");
    if(!importantChannel) message.channel.send({embed : noChannel})
    importantChannel.send({embed : importantEmbed})


}

module.exports.config = {
    name: "links",
    aliases: ["il"],
    description: "Important links.",
    accessableby: "Bot owner"
}