module.exports = async bot => {
    console.log(`${bot.user.username} has signed in with an ID of: '${bot.user.id}' `)
   bot.user.setActivity("Making Pizza", {type: "LISTENING"});

   let statuses = [
       "-help",
       `over ${bot.users.size} users!`
   ]

   setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       bot.user.setActivity(status, {type: "WATCHING"});

   }, 5000)

}
