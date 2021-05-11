/* eslint-disable no-console */
const Discord = require('discord.js');
const path = require('path');
const oneLine = require('common-tags').oneLine;
//const sqlite = require('sqlite');
const fs = require('fs')
const {prefix, token} = require("./config.json");

let playerList = [];

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }
	
  
    return message.channel.send(reply);
  }
  	
	
	try {
		command.execute(message, args, playerList);
		/*console.log("player list " + playerList[2]);
		client.users.fetch(playerList[2], false).then((user) => {
			///console.log(user);
			user.send("This is a DM");
			
		});
		testIncrement ++;
		console.log(testIncrement + "\n");
		*/
		console.log(playerList);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});




client.login(token);
