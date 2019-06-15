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

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(noPerms)

    let raidEmbed = new Discord.RichEmbed()
    .setTitle("**[RAID]**")
    .setDescription(`**Raid at [Camp Jinmachi](https://www.roblox.com/games/2646337427/Camp-Jinmachi-Japan#!/game-instances)**`)
    .addField(`Japanese Self Defense Force are currently at a raid!`, `[Camp Jinmachi](https://www.roblox.com/games/2646337427/Camp-Jinmachi-Japan#!/game-instances)`)
    .setFooter(`Initiated by: @${message.author.username}`)
    .setThumbnail(images.jinmachi)
    .setColor(colour.yellow)
    .setTimestamp()

    let noChannel = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Couldn't find an **announcement** channel.")
    .setColor(colour.red)
    .setTimestamp()
    let announcementChannel = message.guild.channels.find(n => n.name === "announcements");
    if(!announcementChannel) message.channel.send({embed : noChannel});
    announcementChannel.send("@here")
    return announcementChannel.send({embed : raidEmbed})
}   


module.exports.config = {
    name: "raid",
    aliases: [],
    noalias: "No Aliases",
    usage: "-raid",
    description: "Announces a raid for Camp Jinmachi, JSDF.",
    accessableby: ["Crown Prince", " His Majesty Emperor of Japan"]
}