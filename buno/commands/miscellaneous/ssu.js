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

    let ssuEmbed = new Discord.RichEmbed()
    .setDescription(`[Server Startup in Tokyo!](https://www.roblox.com/games/2584751739/JP-Tokyo-Japan)`)
    .addField(`**[SSU]** Server startup in Tokyo!`, "[Tokyo, Japan!](https://www.roblox.com/groups/4442918/JP-Japan#!/about)")
    .setFooter(`Initiated by: @${message.author.username}`)
    .setColor(colour.yellow)
    .setThumbnail(images.tokyo)
    .setTimestamp()

    let noChannel = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Couldn't find an **announcement** channel.")
    .setThumbnail(colour.red)
    .setTimestamp()
    let announcementChannel = message.guild.channels.find(n => n.name === "announcements");
    if(!announcementChannel) message.channel.send({embed : noChannel});
    announcementChannel.send("@here")
    return announcementChannel.send(ssuEmbed)

}   


module.exports.config = {
    name: "ssu",
    aliases: ["serverstartup"],
    usage: "-ssu",
    description: "Announces a server startup for Tokyo.",
    accessableby: ["Moderator", " Crown Prince", " His Majesty Emperor of Japan"]
}