// sex has been born. your server is no longer a virgin

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
	console.log('Your Bot is now Online.')
	let activities = ['peepee poopoo'],i = 0;
	setInterval(() => bot.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:'STREAMING',url:'https://www.youtube.com/watch?v=IOcQD04-0yw'}), 5000)
  
});

client.login('config.token');
