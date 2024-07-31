const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://loritta.website/assets/img/actions/slap/generic/gif_226.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_female/gif_199.gif',
  'https://loritta.website/assets/img/actions/slap/male_x_female/gif_189.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_221.gif',
  'https://pa1.narvii.com/6389/264b77d2a39405487e260c44b9508dec4ada9f31_hq.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar');
}
/*
message.channel.send(`${message.author.username} **Meteu o tapa em** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Slap')
        .setColor('#28044d')
        .setDescription(`${message.author} Meteu o tapa em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('slap slap slap')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}