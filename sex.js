//sex has been born. your server is no longer a virgin

const Discord = require('discord.js');
const config = require ('./config.json');
const client = new Discord.Client();
let http = require('http');  

http.createServer(function (req, res) {   
  res.write('Alive');   
  res.end(); 
}).listen(8080);


client.once('ready', () => {
	console.log('Ready!');
});

client.login('config.token');
