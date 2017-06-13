const Discord = require('./node_modules/discord.js');
const bot = new Discord.Client();
const Help = require('./commands/help.js');
const Rand = require('./commands/rand.js');
const Carte = require('./commands/carte.js');
const Lore = require('./commands/lore.js');

bot.on('ready', function () {
    bot.user.setGame('Mode Sentinelle').catch(console.error);
});

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('BIP BIP BIP, l\'intrus ' + member.displayName + ' a été détécté !');
    }).catch(console.error)
});



bot.on('guildMemberAdd', member => {
  // Send the message to the guilds default channel (usually #general), mentioning the member
  member.guild.defaultChannel.send(`BIP BIP BIP, Bienvenue sur le serveur, ${member}!`);

  // If you want to send the message to a designated channel on a server instead
  // you can do the following:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

bot.on('message', function (message) {
    let commandUsed = Help.parse(message) || Rand.parse(message) || Carte.parse(message) || Lore.parse(message);
});

bot.login('MzIyNzgyOTE2OTY1MDQwMTMy.DBxqJw.28yzO541OBh9UI_TiLPUNp1si0s');
