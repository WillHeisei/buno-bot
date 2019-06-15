const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")


module.exports.run = async (bot, message, args) => {
        let serverEmbed = new Discord.RichEmbed()
        .setTitle("Guild Information")
        .addField("Guild Name:", `${message.guild.name}`, true)
        .addField("Guild Owner:", `${message.guild.owner}`, true)
        .addField("Total Roles:", `${message.guild.roles.size}`, true)
        .addField("Total Members:", `${message.guild.memberCount}`, true)
        .addField("Server Region:", `${message.guild.region}`, true)
        .addField("Total Channels:", `${message.guild.channels.size}`, true)
        .setColor(colour.red)
        .setTimestamp()
        .setThumbnail(bot.user.displayAvatarURL)
        .setFooter("Japan Service Helper", bot.user.displayAvatarURL)
        message.channel.send({embed: serverEmbed});

}


module.exports.config = {
    name: "serverinfo",
    aliases: ["si", "svrinfo", "serverinformation"],
    description: "Provides you with important server information.",
    accessableby: "Verified"
}