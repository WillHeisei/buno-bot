const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
    if(args[0] === "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var sEmbed = new Discord.RichEmbed()
            .setTitle("Buno's Service Helper")
            .setColor(colour.grey)
            .setDescription(`The bot prefix is ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Verified"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            .setFooter("Buno's Italian Restaurant", bot.user.displayAvatarURL)
            message.channel.send(sEmbed)
        }}

        if(!args[0]) {
            message.delete();
            let embed = new Discord.RichEmbed()
            .setAuthor("Help Command", message.guild.iconURL)
            .setColor(colour.grey)
            .setDescription(`**${message.author.username}** I have sent a list of commands to you through your DMs!`)

            let dEmbed = new Discord.RichEmbed()
            .setColor(colour.grey)
            .setThumbnail(bot.user.displayAvatarURL)
            .setTimestamp()
            .setThumbnail(bot.user.displayAvatarURL)
            .setDescription(`These are the available commands for this bot!\nThe bot prefix is ${prefix}`)
            .addField("Commands:", "`cat`, `dog`, `meme`, `help`, `announce`, `myinfo`, `serverinfo`")
            .setFooter("Buno's Italian Restaurant", bot.user.displayAvatarURL)
            message.channel.send(embed);
            message.author.send(dEmbed)
        }
}

module.exports.config = {
    name: "help",
    aliases: ["h", "cmds", "commands"],
    usage: "-usage",
    description: "Helps you with the bots current commands.",
    accessableby: "Verified"
}
