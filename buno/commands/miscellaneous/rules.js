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

    let rulesEmbed = new Discord.RichEmbed()
    .setTitle(":flag_jp: **Rules** :flag_jp:")
    .setDescription(`\n**1)** No advertising. If one of the server admins or I see you advertising about your group, you will be kicked. If you return and do the same thing, you'll be banned.\n\n**2)** No spamming. It's just plain annoying and unnecessary. Doing so will result in a warning and a kick if continued.\n\n **3)** Disrespect is not tolerated. This also includes disrespecting other groups. If you had beef with another group, I don't want to hear about it in my server. This server should be a friendly place where people can communicate without having to argue.\n\n**4)** Cursing is allowed to a certain extent. You can curse every now and then, just do not curse at other people. That is considered as disrespect.\n\n**5)** You're allowed to post pictures and whatever, just don't post anything inappropriate. If you do, your message will be removed and you'll be banned instantly.\n\n**6)** If one of the members in this discord sends me a message with proof that you have secretly advertised about your group through dm, you will be banned immediately.`)
    .setColor(colour.red)
    
    let noChannel = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Couldn't find a **rules** channel.")
    .setColor(colour.red)
    .setTimestamp();
    let announcementChannel = message.guild.channels.find(n => n.name === "rules");
    if(!announcementChannel) message.channel.send({embed: noChannel});

    announcementChannel.send({embed : rulesEmbed})

    
}


module.exports.config = {
name: "rules",
aliases: [],
noalias: "No Aliases",
description: "Provides you with important server information.",
accessableby: "Verified"
}