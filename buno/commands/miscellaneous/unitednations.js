const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")
const images = require("../../image.json")

module.exports.run = async (bot, message, args) => {
let serverEmbed = new Discord.RichEmbed()
    .setTitle("United Nations Information")
    .addField("Owner of the UNR:", "The current owner of the UNR is [Verasis](https://www.roblox.com/users/47297664/profile)", true)
    .addField("UNR Twitter:", "[UNR Twitter](https://twitter.com/UN_ofRBLX)", true)
    .addField("Discord Invite", "[Join the Discord here](https://discordapp.com/invite/qNMzkr4)", true)
    .setColor(colour.red)
    .setTimestamp()
    .setThumbnail(images.un)
    .setFooter("Japan Service Helper", bot.user.displayAvatarURL)
    message.channel.send({embed: serverEmbed});

}   

module.exports.config = {
    name: "unitednations",
    aliases: ["un", "uninfo"],
    usage: "-unitednations",
    description: "Provides information about the UN",
    accessableby: ["Verified"]
}