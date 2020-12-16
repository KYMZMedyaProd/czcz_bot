const { MessageEmbed } = require("discord.js");
exports.run = (Bot, Mesaj, Argüman) => {
  const Sayı = Number(Argüman[0]);

  const Hata = new MessageEmbed()
    .setColor("#7f0000")
    .setTitle("Hata!")
    .setFooter(`${Mesaj.author.username} Tarafından İstendi.`,Mesaj.author.avatarURL());

  const Başarılı = new MessageEmbed()
    .setColor("#007f00")
    .setTitle("Başarılı!")
    .setFooter(`${Mesaj.author.username} Tarafından İstendi.`,Mesaj.author.avatarURL());
  {
    if (!Mesaj.member.hasPermission("MANAGE_MESSAGES")) {
      Hata.setDescription("Bu komutu kullanmak için `Mesajları Yönet` yetkisine sahip olmanız gerekmektedir. <a:czcz_dikkat:784731284403519558> ");
      Mesaj.channel.send(Hata).then(msg => msg.delete({ timeout: 5000}));
      
    } else {
      if (!Sayı) {
        Hata.setDescription("Ne Kadar Silecem yazarmısın ? <a:czcz_dikkat:784731284403519558> ");
        Mesaj.channel.send(Hata).then(msg => msg.delete({ timeout: 5000}));
      } else {
        if (Sayı < 101) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613>  `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 5000}));
          Mesaj.channel.bulkDelete(Sayı);
        }
        if (Sayı > 100 && Sayı < 200) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 5000}));
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 100);
          });
        }
        if (Sayı == 200) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 200 && Sayı < 300) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 5000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 200);
          });
        }
        if (Sayı == 300) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 300 && Sayı < 400) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 6000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 300);
          });
        }
        if (Sayı == 400) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 400 && Sayı < 500) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 7000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 400);
          });
        }
        if (Sayı == 500) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 500 && Sayı < 600) {
          Başarılı.setDescription(`${Sayı} aAdet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 8000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 500);
          });
        }
        if (Sayı == 600) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613>`);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 600 && Sayı < 700) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 5900}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 600);
          });
        }
        if (Sayı == 700) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 700 && Sayı < 800) {
          Başarılı.setDescription(`${Sayı}Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 10000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 700);
          });
        }
        if (Sayı == 800) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 800 && Sayı < 900) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 11000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 800);
          });
        }
        if (Sayı == 900) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 900 && Sayı < 1000) {
          Başarılı.setDescription(`${Sayı} aAdet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 900);
          });
        }

        if (Sayı == 1000) {
          Başarılı.setDescription(`${Sayı} Adet Mesaj Patlatıldı ! <:czcz_alevpng:785819005244014613> `);
          Başarılı.setThumbnail("https://cdn.discordapp.com/attachments/776349415278772234/785817980499656744/patlama-hareketli-resim-0011.gif")
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 13000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 1000) {
          Hata.setDescription("Discord APİ İzin vermediği İçin En Fazla 1000 Mesaj Silebilrim. <a:czcz_uzgun:785769885211820042> ");
          Mesaj.channel.send(Hata).then(msg => msg.delete({ timeout: 5000}));
        }
      }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Temizle", "sil", "temizle"],
  permLevel: 0
};

exports.help = {
  name: "sil"
};