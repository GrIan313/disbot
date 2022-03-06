require("dotenv").config()

import { Client, Intents, Interaction, Message } from "discord.js"

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    console.log(message.author.username + ": " + message.content);
});

// const joinStates = new Map()
const rankings = new Map()

client.on('messageCreate', function (message) {
    const userId = message.member.user.id;
    if (message.content === '/time') {
        message.channel.send(`${message.member.user.username} ist seit ${rankings.get(userId)} Sekunden auf dem Server.`);
    }
});

    /*client.on("ready", client => {
        console.log("Testchen")
        setInterval(() => {
            client.channels.cache.get("948614963092668449").send('Hello here!');
                
        }, 5000)
    })*/


    client.on('voiceStateUpdate', (oldState, newState) => {
        const userId = oldState.member.user.id;
        const username = oldState.member.user.username;
    
        if (!rankings.has(userId)) {
            rankings.set(userId, 0)
        }
    
        //let interval: NodeJS.Timeout = null;
    
        if (oldState.channelId === null && newState.channelId !== null) {
            const iid = setInterval(function () {
                rankings.set(userId, rankings.get(userId) + 1)
                    console.log(rankings.get(userId))
            if (newState.channelId === null && oldState.channelId === null) {
                console.log(`${username} hat den Server verlassen.`)
                clearInterval(iid)
            }
    
                if (rankings.get(userId) === 5) {
                    console.log(`${username} ist seit 5 Sekunden auf dem Sever.`)
                }

                if (rankings.get(userId) === 30){
                    client.channels.cache.get('948614963092668449').send(`${username} ist seit 30 Sekunden auf dem Server.`)
                }

            }, 1000)   
    
        }  
    
    });

client.login(process.env.DISCORD_BOT_TOKEN)
