const { STATUS, TYPE_STATUS } = require('../config.json');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`${client.user.tag} Bot Sudah Online`);

        const status = `${STATUS}` || `${client.users.cache.size} members!`;
        client.user.setActivity(status,{
            type: `${TYPE_STATUS}`
        });
	},
};