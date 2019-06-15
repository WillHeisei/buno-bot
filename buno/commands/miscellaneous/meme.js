const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get("https://api-to.get-a.life/meme")
    //console.log(body.file)
    let errgenerateEmbed = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("There was an error generating your image. Try again. :slight_frown:")
    .setColor(colour.red)
    .setTimestamp()
    .setFooter("Japan Service Helper", bot.user.displayAvatarURL)
    if(!body) return message.channel.send({embed: errgenerateEmbed})

    let memeEmbed = new Discord.RichEmbed()
    .setColor(colour.red)
    .setFooter("Japan Service Helper", bot.user.displayAvatarURL)
    .setTimestamp()
    .setImage(body.url)
    message.channel.send({embed: memeEmbed});

    msg.delete();

}

module.exports.config = {
    name: "meme",
    aliases: [],
    description: "Meme Lord",
    noalias: "No aliases.",
    accessableby: "Verified"
}