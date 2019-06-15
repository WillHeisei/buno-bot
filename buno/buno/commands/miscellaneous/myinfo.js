const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")

module.exports.run = async (bot, message, args) => {
        let userinfoEmbed = new Discord.RichEmbed()
        .setTitle("Your Information")
        .addField("Username:", `${message.author.username}`, true)
        .addField("Discriminator:", `${message.author.discriminator}`, true)
        .addField("ID:", `${message.author.id}`, true)
        .addField("Status:", `${message.author.presence.status}`, true)
        .setColor(colour.red)
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter("Japan Service Helper", bot.user.displayAvatarURL)
        message.channel.send({embed: userinfoEmbed});

}

module.exports.config = {
    name: "myinfo",
    aliases: ["userinfo", "ui", "mi"],
    description: "Displays your information in an embedded message.",
    accessableby: "Verified"
}