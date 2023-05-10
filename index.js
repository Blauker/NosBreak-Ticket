const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json');

const NosBreakSV = "1023616596226351114";

client.on('ready', () => {
    console.log('The client is ready!');
    client.user.setActivity('NosBreak', { type: "PLAYING" });
})

client.on('messageCreate', msg => {
    const prefix = config.prefix;
    const args = msg.content.slice(prefix.lenght).split(/ +/);
    const preCommand = args.shift().toLowerCase();
    const command = preCommand.substring(1);

    if (msg.guild.id == NosBreakSV)
    {
        for (var i = 0; i < msg.embeds.length; i++)
        {
            if (msg.embeds[i].title == "Create Ticket" && (msg.author.id == "1091795969940664452" || msg.author.id == "508391840525975553" ))
            {
                msg.channel.send("Your ticket will be handled by a <@&1081641197271003246> as soon as possible.\nTo make the process faster, you can tell us 👇\n· Your nick:\n· Your problem:");
                break;
            }
        }
    }
})

client.login(config.token);
