const Discord = require("discord.js");
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")
const images = require("../../image.json");
const util = require("util");

ownerid = botconfig.ownerID;

let evalError = new Discord.RichEmbed()
.setTitle("Error whilst evaluating.")
.setDescription("Something went wrong when I tried to evaluate your code. Try again and make sure there are no missing arguments/errors in your code!")
.setColor(colour.red)
.setTimestamp();

let noPerms = new Discord.RichEmbed()
.setTitle("Error")
.setDescription("You do not have sufficient permissions to execute this command.")
.setColor(colour.red)
.setTimestamp()
    

module.exports.run = async (bot, message, args) => {
    if(message.author.id == ownerid) {
        let toEval = args.join(" ");
        let evaluated = util.inspect(eval(toEval, { depth: 0 } ))
        try {
            if(toEval) {
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart)
                return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms.*\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
                
            } else {
                message.channel.send(evalError)
            }
        } catch(e) {
            message.channel.send(`Error whilst evaluating: \`${e.message}\``)
        }
    } else {
        return message.channel.send(noPerms)
    }

}

module.exports.config = {
    name: "-",
    description: "Evaluates js code",
    accessableby: "Bot Owner",
    aliases: ["e"],
    usage: "- <input>"
}