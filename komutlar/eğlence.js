const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("CızCızBot Plus Sürümüyle Sizlerle !")
.setTitle("<:czcz_kupa:784731387999551498> » CızCızPlus+ Eğlence Komutları <:czcz_kupa:784731387999551498>")
 .setTimestamp()
.setDescription("<a:czcz_saok:784731284593180722>  **c+zarat** =  zar atmaya ne dersin benim,rekorum 5 gecebilirmisin?. \n <a:czcz_saok:784731284593180722>  **c+kasaaç** =  CsGo kasası açmaya ne dersin?. \n <a:czcz_saok:784731284593180722>**c+emojiyazı** =  Emojili yazı yazmaya ne dersin?. \n <a:czcz_saok:784731284593180722>**c+espiri** =  Sana güzel bi espiri yapmama ne dersin?. \n <a:czcz_saok:784731284593180722>**c+sor** = bana soru sormaya ne dersin. \n <a:czcz_saok:784731284593180722>**c+ara112** = İhtiyacın oldunda kullan ;) \n <a:czcz_saok:784731284593180722>**c+vine** = Raskele komik paylaşımları görmeye ne dersin..! \n  <a:czcz_saok:784731284593180722>**c+adamasmaca** = Birlikte bir oyun oynamaya ne dersin **adam asmaca**. \n  <a:czcz_saok:784731284593180722>*c+balıktut** = birlikte balık tutmaya ne dersin :D?. \n <a:czcz_saok:784731284593180722>**c+tersyazı** = Bir Yazıyı Bot Ters Yazar. \n <a:czcz_saok:784731284593180722>**c+mcskin** = Yazdığınız ismin minecraft görünüşünü atar. \n <a:czcz_saok:784731284593180722>**c+fbi** = Bot FBi Gif Atar. \n <a:czcz_saok:784731284593180722>**c+token** = Tokenimi Öğrenmek İstemezmisin? \n <a:czcz_saok:784731284593180722>**c+düello** = Düello Atarsın. \n <a:czcz_saok:784731284593180722>**c+wasted** = Polis tarafından yakalanırsın. \n <a:czcz_saok:784731284593180722>**c+atatürk** = Dene ve gör... (1881-1938) \n <a:czcz_saok:784731284593180722>**c+yumruk-at** = istediğin kişinin gafasına yumruk atar. \n**c+yazan-kazanır** =  Yazan karanır oyununu oynadıktan sonra tekrar oynamaya ne dersin?. \n <a:czcz_saok:784731284593180722>**c+kapaklaf** =  Birine güzel bi söz sözlemeye ne dersin?. \n <a:czcz_saok:784731284593180722>**c+kralol** =  Kral olmaya ne dersin?. \n ")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'c+eğlence'
}