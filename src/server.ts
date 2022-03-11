require("dotenv").config()

import { Client, Intents } from "discord.js"

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });


// zeigt an das der Bot auf dem Server ist
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// zeigt nachrichten in der Console an
client.on('messageCreate', message => {
    console.log(message.author.username + ": " + message.content);
});

// tracker um die zeiten zu speichern
const allTime = new Map()
const sesTime = new Map()

// Command um sich die Commands anzeigen zu lassen
client.on('messageCreate', function (message) {
    const userId = message.member.user.id;
    if (message.content === '!help') {
        message.channel.send(`Zur verfügung steht der !session Command, welcher einem die Session Zeit anzeigen lässt und der !alltime Command, welcher einem die Gesamtzeit auf allen Voicechannel liefert!`);
    }
});

// Command um sich die sessiontime anzeigen zu lassen
client.on('messageCreate', function (message) {
    const userId = message.member.user.id;
    if (message.content === '!session') {
        message.channel.send(`${message.member.user.username} nervt jetzt schon ${Math.round((sesTime.get(userId)/3600)*100)/100} Stunden am Stück.`);
    }
});

// Command um sich die alltime anzeigen zu lassen
client.on('messageCreate', function (message) {
    const userId = message.member.user.id;
    if (message.content === '!alltime') {
        message.channel.send(`${message.member.user.username} labert jetzt schon insgesamt seit ${Math.round((allTime.get(userId)/3600)*100)/100} Stunden.`);
    }
});

// Command Level anzeigen
client.on('messageCreate', function (message) {
    const userId = message.member.user.id;
    if (message.content === '!level') {
        if (allTime.get(userId) < 36000)
            message.channel.send(`${message.member.user.username} du bist Level 0.`);

        if (allTime.get(userId) >= 36000  && allTime.get(userId) < 54000)
            message.channel.send(`${message.member.user.username} du bist Level 1.`);

        if (allTime.get(userId) >= 54000 && allTime.get(userId) < 81000)
            message.channel.send(`${message.member.user.username} du bist Level 2.`);

        if (allTime.get(userId) >= 81000  && allTime.get(userId) < 121500)
            message.channel.send(`${message.member.user.username} du bist Level 3.`);

        if (allTime.get(userId) >= 121500 && allTime.get(userId) < 182250)
            message.channel.send(`${message.member.user.username} du bist Level 4.`);

        if (allTime.get(userId) >= 182250 && allTime.get(userId) < 273375)
            message.channel.send(`${message.member.user.username} du bist Level 5.`);

        if (allTime.get(userId) >= 273375 && allTime.get(userId) < 410062)
            message.channel.send(`${message.member.user.username} du bist Level 6.`);

        if (allTime.get(userId) >= 410062 && allTime.get(userId) < 615093)
            message.channel.send(`${message.member.user.username} du bist Level 7.`);

        if (allTime.get(userId) >= 615093 && allTime.get(userId) < 922639)
            message.channel.send(`${message.member.user.username} du bist Level 8.`);

        if (allTime.get(userId) >= 922639 && allTime.get(userId) < 1383958)
            message.channel.send(`${message.member.user.username} du bist Level 9.`);

        if (allTime.get(userId) >= 1383958)
            message.channel.send(`${message.member.user.username} du bist Level 10.`);
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

                if (allTime.get(userId) === 36000){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 1 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 54000){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 2 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 81000){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 3 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 121500){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 4 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 182250){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 5 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 273375){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 6 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 410062){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 7 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 615093){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 8 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 922639){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 9 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 1383958){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 10 erreicht. Herzlichen Glückwunsch!`)
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
    
        if (newState.channelId === null && oldState.channelId !== null)
            sesTime.set(userId, 0)

        if (oldState.channelId === null && newState.channelId !== null) {
            var iid = setInterval(function () {
                sesTime.set(userId, sesTime.get(userId) + 1)
                    console.log(sesTime.get(userId))
        if (newState.channelId === null && oldState.channelId === null) {
            console.log(`${username} hat die Session beendet.`)
            clearInterval(iid)
            }  
        }, 1000)      
        }     
    });

client.login(process.env.DISCORD_BOT_TOKEN)