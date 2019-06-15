const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get("https://dog.ceo/api/breeds/image/random")
    //console.log(body.file)
    let errgenerateEmbed = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("There was an error generating your image. Try again. :slight_frown:")
    .setColor(colour.red)
    .setTimestamp()
    .setFooter("Japan Service Helper", bot.user.displayAvatarURL)
    if(!body) return message.channel.send({embed: errgenerateEmbed})

    let dogEmbed = new Discord.RichEmbed()
    .setColor(colour.red)
    .setFooter("Japan Service Helper", bot.user.displayAvatarURL)
    .setTimestamp()
    .setImage(body.message)
    message.channel.send({embed: dogEmbed});

    msg.delete();


}

module.exports.config = {
    name: "dog",
    aliases: [],
    description: "Provides a dog image.",
    noalias: "No aliases.",
    accessableby: "Verified"
}