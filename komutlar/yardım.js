const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedNarcosCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      "**CızCız Plus+ #YılbaşındaCızCız**  **Prefixim: `c+`"
    )
    .setImage("https://cdn.glitch.com/f12053f3-f54b-4f51-9d3f-f1d92989a4cc%2FC%C4%B1zC%C4%B1zY%C4%B1lba%C5%9F%C4%B1%20banner.png?v=1608037706717")
    .setThumbnail() 
    .setDescription( `

**▬▬▬▬▬▬▬[** <:czcz_6:781981107431538708>   **Komut Listesi**   <:czcz_6:781981107431538708>  **]▬▬▬▬▬▬**

<a:star2:781211760706453534>  **» c+moderasyon :** Sunucun İçin Mükemmel Koruma Komutlaını Kullanabilirsin.
<a:star2:781211760706453534>  **» c+kullanıcı :** Tüm Herkezin Kullanabileceği Basit Komutlar .
<a:star2:781211760706453534>  **» c+logo :** Değişik logolar İçinde.  
<a:star2:781211760706453534>  **» c+eğlence :** Tadın Kaçtı ya da Canın Sıkkınsa tavsiye Ederim :D
<a:star2:781211760706453534>  **» c+davet :** Botu Ekleyebilir Destek Suncumuza Gidebilir ya da Yapımcınn YouTube Kanalına Abone Olabilirsin.
**▬▬▬▬▬▬▬[** <a:czcz_ayar:784731285264138240>   **Bilgilendirme** <a:czcz_ayar:784731285264138240>  **]▬▬▬▬▬▬**

> <a:mk_evet2:780868350975934502>  **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/av6WNA2hJ9)**
> <a:czcz_yldz:784720090607124501>  **c+istatistik** **Komudu İle Botun herşeyini Görebilirsiniz**
> <a:czcz_salla:784720090633076736> **Bot ile ilgili tavsiyelerinizi veya bulduğunuz hataları **c+istek-kod** yazarak bize iletebilirsiniz.**
> <a:czcz_salla:784720090633076736> **Hatalı bi kod veya buglu bi kod bulursanız **c+bug-bildir** yazarak bize bildirebilirsiniz.**

**» Bağlantılar** 
**[Destek Sunucusu](https://czcz.glitch.me/cdiscord)** **•** **[Botun Davet Linki](https://czcz.glitch.me/czczplus-davet)**
`
    )

    .setFooter("CızCızPlus+ Hosted By **Gyoze Uptime**")
    .setTimestamp();

  return message.channel.send(EmbedNarcosCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "c+yardım"
};
