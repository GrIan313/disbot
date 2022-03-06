require("dotenv").config()

import { Client, Intents } from "discord.js"

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

// zeigt an das der Bot auf dem Server ist
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// zeigt nachrichten in der Console an
client.on('messageCreate', message => {
    console.log(message.author.username + " : " + message.content);
});

// tracker um die zeiten zu speichern
const allTime = new Map()
const sesTime = new Map()

// Command um sich die sessiontime anzeigen zu lassen
client.on('messageCreate', function (message) {
    const userId = message.member.user.id;
    if (message.content === '/session') {
        message.channel.send(`${message.member.user.username} nervt jetzt schon ${sesTime.get(userId)} Sekunden am Stück.`);
    }
});

// Command um sich die alltime anzeigen zu lassen
client.on('messageCreate', function (message) {
    const userId = message.member.user.id;
    if (message.content === '/alltime') {
        message.channel.send(`${message.member.user.username} labert jetzt schon insgesamt seit ${allTime.get(userId)} Stunden.`);
    }
});

    // Funktion um alltime zu tracken + lvl anzeige

    client.on('voiceStateUpdate', (oldState, newState) => {
        const userId = oldState.member.user.id;
        const username = oldState.member.user.username;
    
        if (!allTime.has(userId)) {
            allTime.set(userId, 0)
        }
    
        if (oldState.channelId === null && newState.channelId !== null) {
            const iid = setInterval(function () {
                allTime.set(userId, allTime.get(userId) + 1)
                    console.log(allTime.get(userId))
            if (newState.channelId === null && oldState.channelId === null) {
                console.log(`${username} hat den Server verlassen.`)
                clearInterval(iid)
            }   
                if (allTime.get(userId) === 10){
                    client.channels.cache.get('948614963092668449').send(`${username} hat Level 0 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000){
                    client.channels.cache.get('948614963092668449').send(`${username} hat Level 1 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 54000){
                    client.channels.cache.get('948614963092668449').send(`${username} hat Level 2 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 81000){
                    client.channels.cache.get('948614963092668449').send(`${username} hat Level 3 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 121500){
                    client.channels.cache.get('948614963092668449').send(`${username} hat Level 4 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 182250){
                    client.channels.cache.get('948614963092668449').send(`${username} hat Level 5 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 273375){
                    client.channels.cache.get('948614963092668449').send(`${username} hat Level 6 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 410062){
                    client.channels.cache.get('948614963092668449').send(`${username} hat Level 7 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 615093){
                    client.channels.cache.get('948614963092668449').send(`${username} hat Level 8 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 922639){
                    client.channels.cache.get('948614963092668449').send(`${username} hat Level 9 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 1383958){
                    client.channels.cache.get('948614963092668449').send(`${username} hat Level 10 erreicht. Herzlichen Glückwunsch!`)
                }

            }, 1000)      
        }     
    });


    // Funktion um sessiontime zu tracken
    client.on('voiceStateUpdate', (oldState, newState) => {
        const userId = oldState.member.user.id;
        const username = oldState.member.user.username;
    
        if (!sesTime.has(userId)) {
            sesTime.set(userId, 0)
        }

        if (sesTime.has(userId)) {
            sesTime.set(userId, 0)
        }
    
        if (oldState.channelId === null && newState.channelId !== null) {
            var iid = setInterval(function () {
                sesTime.set(userId, sesTime.get(userId) + 1)
                    console.log(sesTime.get(userId))
            if (newState.channelId === null && oldState.channelId === null) {
                console.log(`${username} hat den Server verlassen.`)
                clearInterval(iid)
            }   
        }, 1000)      
        }     
    });

client.login(process.env.DISCORD_BOT_TOKEN)