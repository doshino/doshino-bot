const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var string = args.join(" ");
  var colors = [
    {
      name: "Khaki",
      id: "855490432171376652"
    },
    {
      name: "Yellow",
      id: "855490432171376653"
    },
    {
      name: "Gold",
      id: "855490432171376654"
    },
    {
      name: "Orange",
      id: "855490432171376655"
    },
    {
      name: "DarkOrange",
      id: "855490432171376656"
    },
    {
      name: "OrangeRed",
      id: "855490432171376657"
    },
    {
      name: "Red",
      id: "855490432171376658"
    },
    {
      name: "Tomato",
      id: "855490432171376659"
    },
    {
      name: "Coral",
      id: "855490432183304203"
    },
    {
      name: "LightSalmon",
      id: "855490432183304204"
    },
    {
      name: "DarkSalmon",
      id: "855490432183304205"
    },
    {
      name: "Salmon",
      id: "855490432183304206"
    },
    {
      name: "FireBrick",
      id: "855490432183304207"
    },
    {
      name: "DarkRed",
      id: "855490432183304208"
    },
    {
      name: "Maroon",
      id: "855490432183304209"
    },
    {
      name: "Crimson",
      id: "855490432183304210"
    },
    {
      name: "IndianRed",
      id: "855490432183304211"
    },
    {
      name: "LightCoral",
      id: "855490432183304212"
    },
    {
      name: "Pink",
      id: "855490432196280320"
    },
    {
      name: "LightPink",
      id: "855490432196280321"
    },
    {
      name: "PaleVioletRed",
      id: "855490432196280322"
    },
    {
      name: "New Pink",
      id: "855490432196280323"
    },
     {
      name: "HotPink",
      id: "855490432196280324"
    },
     {
      name: "DeepPink",
      id: "855490432196280325"
    },
     {
      name: "MediumVioletRed",
      id: "855490432196280326"
    },
     {
      name: "Plum",
      id: "855490432196280327"
    },
     {
      name: "Orchid",
      id: "855490432196280328"
    },
     {
      name: "Violet",
      id: "855490432196280329"
    },
     {
      name: "DarkMagenta",
      id: "855490432204013629"
    },
     {
      name: "Magenta",
      id: "855490432204013628"
    },
     {
      name: "Purple",
      id: "855490432204013630"
    },
     {
      name: "MediumOrchid",
      id: "855490432204013631"
    },
    {
      name: "DarkOchid",
      id: "855490432204013632"
    },
    {
      name: "DarkViolet",
      id: "855490432204013633"
    },
    {
      name: "Indigo",
      id: "855490432204013634"
    },
    {
      name: "BlueViolet",
      id: "855490432204013635"
    },
    {
      name: "MediumPurple",
      id: "855490432204013636"
    },
    {
      name: "MediumSlateBlue",
      id: "855490432204013637"
    },
    {
      name: "Tan",
      id: "855490432217907231"
    },
    {
      name: "BurlyWood",
      id: "855490432217907232"
    },
    {
      name: "Wheat",
      id: "855490432217907233"
    },
    {
      name: "NavajoWhite",
      id: "855490432217907234"
    },
    {
      name: "SandyBrown",
      id: "855490432217907235"
    },
    {
      name: "Chocolate",
      id: "855490432217907236"
    },
    {
      name: "Peru",
      id: "855490432217907237"
    },
    {
      name: "RosyBrown",
      id: "855490432217907238"
    },
    {
      name: "Sienna",
      id: "855490432217907239"
    },
    {
      name: "SaddleBrown",
      id: "855490432217907240"
    },
    {
      name: "DarkGoldenrod",
      id: "855490432243204096"
    },
    {
      name: "Goldenrod",
      id: "855490432243204097"
    },
    {
      name: "DarkKhaki",
      id: "855490432243204098"
    },
    {
      name: "Lime",
      id: "855490432243204099"
    },
    {
      name: "LimeGreen",
      id: "855490432243204100"
    },
    {
      name: "ForestGreen",
      id: "855490432243204101"
    },
    {
      name: "Green",
      id: "855490432243204102"
    },
    {
      name: "DarkGreen",
      id: "855490432243204103"
    },
    {
      name: "SeaGreen",
      id: "855490432243204104"
    },
    {
      name: "MediumSeaGreen",
      id: "855490432243204105"
    },
    {
      name: "DarkSeaGreen",
      id: "855490432254869504"
    },
    {
      name: "LightGreen",
      id: "855490432254869505"
    }

  ];
  var names = colors.map(function(item) {
    return item["name"].toLowerCase();
  });
  var ids = colors.map(function(item) {
    return item["id"];
  });

  var role = message.guild.roles.cache.find(r => r.name.toLowerCase() === string.toLowerCase());

  if (!args[0]) {
      return await message.channel.send(`${message.author}, escreva o nome da cor após o comando.`);
  } else if (args[0].toLowerCase()  === "remove") {
      await message.member.roles.remove(ids);
      return await message.channel.send(`${message.author}, suas cores foram resetadas ao padrão.`);
  } else if (!names.includes(string.toLowerCase()) || !role) {
    return message.channel.send(
      `${message.author}, não existe cores com o nome ${string} neste servidor. Veja as mensagens fixadas para ver as cores disponíveis`
    );
  } else {
    try {
      await message.member.roles.remove(ids);
      await message.member.roles.add(role);
      return await message.channel.send(`${message.author}, agora você ganhou a cor ${string}`);
    } catch (err) {
      console.error("Erro: " + err);
    }
  }
};