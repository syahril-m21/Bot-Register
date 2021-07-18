//config
const { NAMA_PROJECT_GLITCH, PORT, TOKEN } = require('./config.json');

//package glitch
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(PORT); 
setInterval(() => {
  http.get(`http://${NAMA_PROJECT_GLITCH}.glitch.me/`);
}, 280000);

//package
const fs = require('fs');
const { Client, Collection } = require('discord.js');
const client = new Client();
client.commands = new Collection();

//command handler
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};

//events handler
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
};

client.login(TOKEN);