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
    if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send(noPerms)
    let argsError = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("You must provide a question.")
    .setColor("#ff0000")
    .setTimestamp()
    if(!args[0]) return message.channel.send(argsError)

    let pollEmbed = new Discord.RichEmbed()
    .setDescription(`\n${args.join(" ")}`)
    .setColor(colour.green)
    
    let noChannel = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Couldn't find a **polls** channel.")
    .setColor(colour.red)
    .setTimestamp();
    let announcementChannel = message.guild.channels.find(n => n.name === "polls");
    if(!announcementChannel) message.channel.send({embed: noChannel});
    
    announcementChannel.send(`@here **-** *New poll from* ${message.author}`)
    let msg = await announcementChannel.send(pollEmbed);

    await msg.react("✅");
    await msg.react("❌");

}

module.exports.config = {
    name: "poll",
    aliases: ["vote"],
    usage: "-poll <>",
    description: "Creates a poll in the polls channel.",
    accessableby: ["Moderator"]
}