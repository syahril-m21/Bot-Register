const { PREFIX } = require('../config.json');

module.exports = {
	name: 'message',
	execute(message, client) {
		if (!message.content.startsWith(PREFIX) || message.author.bot) return;

        const args = message.content.slice(PREFIX.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!client.commands.has(commandName)) return;

        const command = client.commands.get(commandName);

        try {
            command.execute(message, args, client);
        } catch (error) {
            console.error(error);
            message.reply('Command Sedang Bermasalah');
        };
	},
};