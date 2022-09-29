const { MessageEmbed } = require('discord.js');

const superagent = require('superagent');

module.exports = {

    name: 'ipinfo',

    aliases: ['infoip'],

    owner: false,

    dsc: false,

    description: 'Returns the informations on an ip',

    run: async (client, msg, args) => {

        if (!args[0]) return msg.channel.send(`**Please enter IP!**`);

        var color = "6700FF";

        let messageArray = msg.content.split(" ");

        let query = args.join(" ");

        async function ipinfos(){

            let ip = await superagent

            .get(`http://ip-api.com/json/${query}?fields=66846719`);

            

            let e = new MessageEmbed()

            .setColor(color)

            .setTitle(`**__IP = ${ip.body.query}__**`)

            .setDescription(`>>> Status = ${ip.body.status}\nContinent = ${ip.body.continent}\nContinent Code = ${ip.body.continentCode}\nCountry = ${ip.body.country}\nCountry Code = ${ip.body.countryCode}\nRegion name = ${ip.body.regionName}\nRegion = ${ip.body.region}\nCity = ${ip.body.city}\nDistrict = ${ip.body.district}\nZip = ${ip.body.zip}\nLatitude / Longitude = ${ip.body.lat} / ${ip.body.lon}\nTimezone = ${ip.body.timezone}\nCurrency = ${ip.body.currency}\nISP = ${ip.body.isp}\nORG = ${ip.body.org}\nAS = ${ip.body.as}\nAS name = ${ip.body.asname}\nReverse DNS = ${ip.body.reverse}\nMobile = ${ip.body.proxy}\nHosting = ${ip.body.hosting}`)

            .setThumbnail(client.user.displayAvatarURL())

            .setFooter("Tracker Ip\n"+ client.user.username + " Developer", client.user.displayAvatarURL())

            msg.channel.send({ embeds: [e] });

        }

        ipinfos();

    }

}
