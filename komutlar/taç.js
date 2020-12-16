const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (bot, message, args) => {
message.delete();

const pinkcode = new Discord.MessageEmbed()

    .setColor("RED")
    .setDescription(
      `Bu Sunucunun Gerçek Kurucusu **<a:star2:781211760706453534>** <@${message.guild.owner.id}>`
    )
    .setFooter(`Taç Komutu ${message.author.tag} Tarafından Kullanıldı`);

return message.channel.send(pinkcode).then(msg => {
msg.delete(30000);
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurucu','tac','sahip'],
  permLevel: 0
};

exports.help = {
  name: "taç",
  description: "OldugunuzSunucugunSahibniGosterir",
  usage: "c+taç"
};