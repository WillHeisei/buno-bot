const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")

let ownerid = botconfig.ownerID

module.exports.run = async (bot, message, args) => {
    let shout = args.join(" ").slice(0);
    let noPerms = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("You do not have sufficient permissions to execute this command.")
    .setColor("#ff0000")
    .setTimestamp()
    if(message.author.id != ownerid) return message.channel.send(noPerms) 

    let botUpdateEmbed = new Discord.RichEmbed()
    .setDescription(`**[UPDATE LOGS]**\n\n${shout}`)
    .setColor(colour.red)
    .setTimestamp()

    let noChannel = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Couldn't find an **development** channel.")
    .setColor(colour.red)
    .setTimestamp();
    let announcementChannel = message.guild.channels.find(n => n.name === "v1-development");
    if(!announcementChannel) message.channel.send({embed: noChannel});
    announcementChannel.send(`**Announcement from:** ${message.author}`, botUpdateEmbed);

}

module.exports.config = {
    name: "botupdate",
    aliases: ["bupdate", "bup"],
    usage: "-botupdate <message>",
    description: `Announces a bot update to the #development channel.`,
    accessableby: ["Bot Owner"]
}