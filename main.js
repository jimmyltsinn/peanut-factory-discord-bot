const Discord = require('discord.js');
const random = require('random-js')();

const client = new Discord.Client();
const {token, users, channels} = require('./config');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  let poop = 0;
  if (message.author.id == users.pooh &&
      (message.channel.id == channels.poohs ||
      message.channel.id == channels.splatoon)) {
    poop = 0.75;
  } else if (message.channel.id == channels.poohs) {
    poop = 0.2;
  }
  if (random.bool(poop)) {
    message.react('💩');
  }
});

client.login(token);
