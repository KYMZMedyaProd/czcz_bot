const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const kullanıcı = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("CızCızBot Plus Sürümüyle Sizlerle !")
    .setTitle(
      "<:czcz_kupa:784731387999551498>  » CızCızPlus+ Kullanıcı Komutları <:czcz_kupa:784731387999551498> "
    )
    .setTimestamp()
    .setDescription(
      "BAKIMDA Bir Komut !!!!"
    );
  message.channel.send(kullanıcı);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "kullanıcı",
  category: "kullanıcı",
  description: "Yardım Menüsü.",
  usage: "-kullanıcı"
};
