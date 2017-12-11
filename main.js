const Discord = require('discord.js')
const random = require('random-js')()

const client = new Discord.Client()
const { token, servers, users, channels } = require('./config')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', message => {
  if (message.channel.id == channels.poohs || message.channel.id == channels.splatoon)
    if (message.author.id == users.pooh) {
      if (random.bool(0.6))
        message.react('💩')
    }
})

client.login(token)
