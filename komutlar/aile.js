const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.cache.array()
  while (guildArray.length) {
    const embed = new Discord.MessageEmbed();

    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('RANDOM')
      embed.setTitle('<a:czcz_sabit:784731291476164629>  Sunucular')
      embed.setDescription(`<a:czcz_saok:784731284593180722> Büyük bir ailedeyiz !. Ailemde **${bot.guilds.cache.size}**  sunucu var !`)
    }
    message.channel.send({embed: embed});
  } 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ailemiz'],
  permLevel: 4,
};

exports.help = {
  name: "aile",
  description: "ne kadar büyük bi aileyiz.",
  usage: "ailemiz"
};