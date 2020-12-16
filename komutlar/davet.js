const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setImage("https://cdn.glitch.com/f12053f3-f54b-4f51-9d3f-f1d92989a4cc%2FBa%C5%9Fl%C4%B1ks%C4%B1z-1%20kopya.png?v=1608067108355")
  .setTitle('<a:mk_r_kalp:777633387983798272> **Destek Sunucum,Beni Ekle,MertKaymazYouTube** <a:mk_r_kalp:777633387983798272> ')
  .setDescription("**[Destek Sunucusu](https://czcz.glitch.me/cdiscord)** **•** **[Botun Davet Linki](https://czcz.glitch.me/czczplus-davet)** **•** **[Mert kaymaz YouTube](https://czcz.glitch.me/myoutube)**")
 .addField("**Yapımcı : @! 𝕂𝔂𝔪𝐳⚡𝑀𝑒𝓇𝓉 𝒦𝒶𝓎𝓂𝒶𝓏 ?¿#6365**") }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'BotDavet',
  usage: 'c+davet'
};