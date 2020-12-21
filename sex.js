//sex has been born. your server is no longer a virgin

const Discord = require('discord.js');
const config = require ('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('config.token');
