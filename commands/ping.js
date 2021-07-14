module.exports = {
	name: 'ping',
	description: 'Ini Coding Ping',
	execute(message) {
		message.channel.send('Counting Bot Latency...').then((message) => {
		setTimeout(() => {
			message.edit(`:ping_pong: The Ping Of Bot Is \`${message.client.ws.ping}\` ms!\n:robot: Bot Latency \`${Date.now() - message.createdTimestamp}\` ms!`);
		}, 1000 * 5);
		});
	},
};