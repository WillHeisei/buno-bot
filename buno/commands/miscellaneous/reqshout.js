// Work in Progress //
const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")

module.exports.run = async (bot, message, args) => {
    let shout = args.join(" ").slice(0);
    let modRole = message.guild.roles.find(n => n.name === "Moderator");
    let personRequested = message.author;
    let numberShout = 0;

    numberShout + 1

    let requestShoutChannel = message.guild.channels.find(n => n.name === "shout-requests")
    if(!requestShoutChannel) message.channel.send(noChannel);
    
    let announcementChannel = message.guild.channels.find(n => n.name === "announcements");
    if(!announcementChannel) message.channel.send(noChannel);

    let noPerms = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("You do not have sufficient permissions to execute this command.")
    .setColor(colour.red)
    .setTimestamp()

    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(noPerms)

    let reqShoutEmbed = new Discord.RichEmbed()
    .setDescription(`${shout}`)
    .setColor(colour.red)
    .setTimestamp()
    requestShoutChannel.send(`${modRole}, ${personRequested} requested for the following shout to be accepted or denied.`)
    requestShoutChannel.send(`*Number:* **${numberShout}**`, reqShoutEmbed)

    let shoutEmbed = new Discord.RichEmbed()
    .setDescription(`Announced by: ${message.author}\n\n ${shout}`)
    .setColor(colour.red)
    .setTimestamp()

    let noChannel = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Couldn't find an **announcements** channel.")
    .setColor(colour.red)
    .setTimestamp();

    const filter = m => m.message.author.id === message.author.id;
    const filter1 = m => m.message.author.id === message.author.id;
    requestShoutChannel.send(`Accept or deny ${message.author}'s shout.`)
    requestShoutChannel.send(shoutEmbed)
    
    requestShoutChannel.awaitMessages(filter, { max: 1 }).then(collected => {
    if(collected.first().content === "Accept") {
        requestShoutChannel.send(`Successfully sent ${message.author}'s shout!`)
        message.author.send(`Your announcement in **${message.guild.name}** was accepted.`)
        announcementChannel.send(shoutEmbed)
    }
})

    requestShoutChannel.awaitMessages(filter1, { max: 1 }).then(collected => {
    if(collected.first().content === "Deny") {
        requestShoutChannel.send(`Successfully denied ${message.author}'s shout!`)
        message.author.send(`Your announcement in **${message.guild.name}** was denied.`)
    }
    })

}


module.exports.config = {
    name: "reqshout",
    aliases: ["reqshout", "rs", "ra", "reqannouncement"],
    description: "Request for an announcement to be made.",
    accessableby: "Verified"
}
// Work in Progress //
