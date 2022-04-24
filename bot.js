const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('m!help', { type: 'WATCHING' })
});
 
client.on('message', msg => {
  if (msg.content.startsWith('m!help')) {
    msg.reply('ㅗ');
  }
});
 
client.login(process.env.TOKEN);