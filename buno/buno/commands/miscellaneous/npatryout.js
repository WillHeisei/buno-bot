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

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send({embed : noPerms})

    let ssuEmbed = new Discord.RichEmbed()
    .setTitle("National Police Agency Tryout being hosted right now!")
    .setDescription(`[NPA](https://www.roblox.com/groups/4510589/JP-National-Police-Agency#!/about) tryout is being hosted!`)
    .addField(`**[Tryout]** Agency tryout in !`, "test")
    .setFooter(`Initiated by: @${message.author.username}`)
    .setColor(colour.yellow)
    .setThumbnail(images.npa)
    .setTimestamp()


    let noChannel = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Couldn't find an **announcement** channel.")
    .setThumbnail(colour.red)
    .setTimestamp()
    let announcementChannel = message.guild.channels.find(n => n.name === "announcements");
    if(!announcementChannel) message.channel.send({embed : noChannel});
    // announcementChannel.send("@here")
    return announcementChannel.send(ssuEmbed)
}   

module.exports.config = {
    name: "npatryout",
    aliases: ["npatry", "national police agency tryout"],
    usage: "-npatryout",
    description: "Announces a National Police Agency Tryout. ",
    accessableby: ["Department Directors"]
}