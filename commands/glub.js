const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media1.tenor.com/images/a0cf903978120ede9cdab2bb7470f472/tenor.gif?itemid=7890844',
  'https://media.tenor.com/images/a967235282580b4c4097b54d82343b80/tenor.gif',
  'https://media.tenor.com/images/46430731417c5ada94f84fcb3b34c857/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para mamar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Mamou')
        .setColor('#730a0a')
        .setDescription(`${message.author} acaba de mamar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('eita eita')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}