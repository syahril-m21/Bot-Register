const { ID_CHANNEL, TAG, ID_ROLE , ID_ROLE_REMOVE } = require('../config.json');

module.exports = {
    name: 'register',
    description: 'Ini Coding register',
    async execute(message, args, client) {
        if(message.channel.type == "dm") return message.channel.send("Kamu tidak bisa registrasi dari DM.");
        if (message.channel.id != `${ID_CHANNEL}`) return message.channel.send(`Kamu bisa menggunakan command ini di <#${ID_CHANNEL}>`);
        if(!args.length) return message.channel.send(`${message.author} **Denied**,***Tolong tulis nama kamu.***`);

        const nickname = args.join(" ");
        const private = client.channels.cache.get(`${ID_CHANNEL}`);

        try {
            message.member.roles.add(`${ID_ROLE}`);
            message.member.roles.remove(`${ID_ROLE_REMOVE}`);
            message.member.setNickname(`${TAG} ${nickname}`);
            private.send(`${message.author} **Accept**, ***Kamu sudah menjadi ${TAG} di ${message.guild.name}.***`);
        } catch(error) {
            console.error(error); 
        }
    },
};