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
    
    let noCmd = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Please specify a command to reload.")
    .setColor("#ff0000")
    .setTimestamp()  
    if(!args[0]) return message.channel.send(noCmd)

    let cmdName = args[0].toLowercase()    
    
    try {
        delete require.cache[require.resolve(`./${cmdName}.js`)]
        bot.commands.delete(cmdName)
        const pull = require(`./${cmdName}.js`)
        bot.commands.set(cmdName, pull)
    }catch(e){
        let reloadErr = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription(`Could not reload: \`${args[0].toUpperCase()}\``)
        .setColor("#ff0000")
        .setTimestamp() 
        return message.channel.send(reloadErr)
    }
    
    // let reloadSuccess = new Discord.RichEmbed()
    //     .setTitle("Error")
    //     .setDescription(`The command: \`${args[0].toUpperCase()}\` has reloaded successfully! `)
    //     .setColor("#ff0000")
    //     .setTimestamp() 
    message.channel.send(`Reloaded!`)


}



module.exports.config = {
    name: "reload",
    description: "reloads the bot commands",
    usage: "-reload <name>",
    accessableby: "Developers",
    aliases: ["reload", "breload", "brd"]
}