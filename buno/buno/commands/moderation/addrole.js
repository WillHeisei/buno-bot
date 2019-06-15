const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")

module.exports.run = async (bot, message, args) => {
let noPerms = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("You do not have sufficient permissions to execute this command.")
    .setColor("#ff0000")
    .setTimestamp()
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply({embed : noPerms});
  
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  
  let missingUser = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription(`Could not find user with the name **${rMember}**.`)
    .setColor("#ff0000")
    .setTimestamp()
  if(!rMember) return message.reply({embed : missingUser});
  
  let role = args.join(" ").slice(22);

  let unspecifiedRole = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription(`You haven't specified a role.`)
    .setColor("#ff0000")
    .setTimestamp()
  if(!role) return message.reply({embed : unspecifiedRole});
  let gRole = message.guild.roles.find(n => n.name === role)
  
  let missingRole = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription(`Couldn't find a role with the name of **${gRole.name}**.`)
    .setColor("#ff0000")
    .setTimestamp()
  if(!gRole) return message.reply({embed : missingRole});

  let alreadyAcquired = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription(`That user aready has the role **${gRole.name}**.`)
    .setColor("#ff0000")
    .setTimestamp()
  if(rMember.roles.has(gRole.id)) return message.reply({embed : alreadyAcquired});
  await(rMember.addRole(gRole.id));

  try{
    
    let roleAdded = new Discord.RichEmbed()
    .setTitle("Success")
    .setDescription(`You have been give the role **${gRole.name}** in **${message.guild.name}**`)
    .setColor(colour.green)
    .setTimestamp()
    await rMember.send({embed : roleAdded})
  }catch(e){
    
    let roleSuccessfull = new Discord.RichEmbed()
    .setTitle("Success")
    .setDescription(`<@${rMember.id}> has been give the role **${gRole.name}** successfully.`)
    .setColor(colour.green)
    .setTimestamp()
    message.channel.send({embed : roleSuccessfull})
  }
}

module.exports.config = {
    name: "addrole",
    aliases: ["arole"],
    usage: "-addrole <user> <rolename>",
    description: `Adds <rolename> to <user>.`,
    accessableby: ["Moderators"]
}