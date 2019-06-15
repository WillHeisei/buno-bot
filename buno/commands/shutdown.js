const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")

module.exports.run = async (bot, message, args) => {
    let noPerms = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("You do not have sufficient permissions to execute this command.")
    .setColor("#ff0000")
    .setTimestamp()    
    if(message.author.id != "537650223988604938") return message.channel.send(noPerms)    
    
    try {
        let shutdownSuccess = new Discord.RichEmbed()
        .setTitle("Successful")
        .setDescription(`**JP || Japan Service Helper** is shutting down.`)
        .setColor(colours.green)
        .setTimestamp() 
        
        await message.channel.send(shutdownSuccess)
        
        proccess.exit()
    }catch(e) {
        let shutdownErr = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription(`${e.message}`)
        .setColor("#ff0000")
        .setTimestamp()  
        message.channel.send()
    }

}



module.exports.config = {
    name: "shutdown",
    description: "shutsdown the bot.",
    usage: "-shutdown",
    accessableby: "Developers",
    aliases: ["bshutdown", "bsd", "sd"]
}