const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**İstek kod Bildirmek için Bir İstek Yazınız.** :x:')

const embed = new Discord.MessageEmbed()
.setTitle("CızCızPlus+ İstek İstediğiniz Zaman **Eklenebilir** İse Eklenir ")
.setColor('BLUE')
.setDescription(`**istek Kanalı** ${message.channel.name} \n **istek Bildirilen Sunucu** \`${message.guild.name}\` \n **İstek Bildiren Kullanıcı** <@${message.author.id}> \n **İstenen komut :** \`${istek}\``)
client.channels.cache.get('784817786031177770').send(embed)
  
message.channel.send("İstek kod  bildiriminiz gönderildi. <a:czcz_yldz:784720090607124501> ").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'istek-kod',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}