const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#f70000')
    .setDescription(` Minha lista de comandos ${message.author}`)
    .setTimestamp()
    .setFooter(` Comando feito pelo usuario: Doshino`)
    .addFields(
        {
            name: 'clear',
            value: `Comando administrativo para limpar o chat`,
            inline: true
        },
        {
            name: 'avatar',
            value: `Deixara o download do avatar da pessoa que você mencionou`,
            inline: true
        },
        {
            name: 'say',
            value: `Eu irei copiar a sua msg uwu`,
            inline: true
        },
        {
            name: 'kiss',
            value: `Comando para beijar outra pessoa`,
            inline: true
        },
        {
            name: 'hug',
            value: `Comado para abraçar uma pessoa`,
            inline: true
        },
        {
            name: 'slap',
            value: `Comando para bater em alguma pessoa`,
            inline: true
        },
        {
            name: 'ideia',
            value: `De alguma sugestão para o servidor`,
            inline: true
        },
        {
            name: 'coinflip',
            value: `Cara ou coroa? Boa sorte :)`,
            inline: true
        }
    )
    message.channel.send(embed);
}