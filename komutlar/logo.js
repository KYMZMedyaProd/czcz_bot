const Discord = require ("discord.js");

exports.run = (client, message) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » CızCızPlus+ Logo Komutları **")
.setDescription(`
Tüm Komutlar: c+yardım

**• Komutlar**
> [c+grafiti]() → grafiti logo oluşturur. 
> [c+discord]() → discord logo oluşturur. 
> [c+gold]() → gold logo oluşturur. 
> [c+comic]() → comic logo oluşturur. 
> [c+bubble]() → bubble logo oluşturur. 
> [c+bubble2]() → bubble2 logo oluşturur. 
> [c+dinamik]() → dinamik logo oluşturur. 
> [c+altın]() → altın logo oluşturur. 
> [c+banner]() → banner logo oluşturur. 
> [c+basit]() → basit logo oluşturur. 
> [c+elmas]() → elmas logo oluşturur. 
> [c+neonmavi]() → neonmavi logo oluşturur. 
> [c+kalın]() → kalın logo oluşturur. 
> [c+anime]() → anime logo oluşturur. 
> [c+habbo]() → habbo logo oluşturur. 
> [c+arrow]() → arrow logo oluşturur. 
> [c+green]() → green logo oluşturur. 
> [c+alev]() → alev logo oluşturur. 
> [c+red]() → red logo oluşturur. 
> [c+kalp]() → kalp logo oluşturur. 

`)
 
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'logo',
  category: 'eğlence',
  description: 'logo',
   usage:'c+logo'
};