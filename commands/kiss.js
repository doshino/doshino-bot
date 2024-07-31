const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_378.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_female/gif_296.gif',
  'https://loritta.website/assets/img/actions/kiss/both/gif_280.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_390.gif',
  'https://loritta.website/assets/img/actions/kiss/both/gif_286.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_307.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#fcbc4c')
        .setDescription(`${message.author} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Kissu kissu kissu')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}