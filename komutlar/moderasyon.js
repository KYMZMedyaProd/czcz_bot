const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("» CızCız Plus+ Bot Moderasyon Komutları")
.setTitle("<:czcz_kupa:784731387999551498>  » CızCızPlus+ Moderasyon Komutları <:czcz_kupa:784731387999551498>")
.setDescription("<a:mk_oksa:777633388202164274> **c+kayıt-bilgi** = Kayıt için bilgi. \n <a:mk_oksa:777633388202164274> **c+taç** = Sunucunun sahibini gösterir. \n <a:mk_oksa:777633388202164274> **c+sil** = Yazdığınız miktarda mesajı siler. \n <a:mk_oksa:777633388202164274> **c+ban** = Etiketlediğiniz kişiyi banlarsınız. \n <a:mk_oksa:777633388202164274> **c+kick** = Etiketlediğiniz kişiyi atarsınız. \n <a:mk_oksa:777633388202164274> **c+duyuru** = Bota duyuru yaptırırsınız. \n <a:mk_oksa:777633388202164274> **c+küfür** = Küfür engel sistemini açarsınız. \n <a:mk_oksa:777633388202164274> **c+reklam** = Reklam engel sistemi açarsınız. \n <a:mk_oksa:777633388202164274> **c+slowmode** = Yavaş modu ayarlarsınız. \n <a:mk_oksa:777633388202164274> **c+forceban** = Birisine id ban atarsınız. \n <a:mk_oksa:777633388202164274> **c+unban** = Birisinin banını açarsınız. \n <a:mk_oksa:777633388202164274> **c+sa-as** = Bot biri sa dedimi cevap verir. \n <a:mk_oksa:777633388202164274> **c+sunucubilgi** = Sunucu bilgilerini görürsün. \n <a:mk_oksa:777633388202164274> **c+üyedurum** = Üyelerin durumlarını görürsün. ")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'c+moderasyon'
}