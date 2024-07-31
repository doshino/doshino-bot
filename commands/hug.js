const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_134.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_0.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_male/gif_162.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_132.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar');
}
/*
message.channel.send(`${message.author.username} **Abraçou** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('hug <3')
        .setColor('#000000')
        .setDescription(`${message.author} Abraçou ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Eles se amam :3')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}