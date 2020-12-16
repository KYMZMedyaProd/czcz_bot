  
const Discord = require('discord.js');

exports.run = (client, message, args) => {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin 'MESAJLARI_YÖNET' yetkisine Sahip Olmanız Lazım !");
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Lütfen Duyuru İçin metin Giriniz !');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'dyuru',
  usage: 'c+duyuru'
};