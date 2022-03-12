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
        message.channel.send("```!session — Zeit einer Session``````!alltime — Gesamtzeit``````!level — Levelanzeige```");
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
    const level2 = 1.5
    const level3 = 1.5*1.5
    const level4 = 1.5*1.5*1.5
    const level5 = 1.5*1.5*1.5*1.5
    const level6 = 1.5*1.5*1.5*1.5*1.5
    const level7 = 1.5*1.5*1.5*1.5*1.5*1.5
    const level8 = 1.5*1.5*1.5*1.5*1.5*1.5*1.5
    const level9 = 1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5
    const level10= 1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5
    const level11= 1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5
    const level12= 1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5
    const level13= 1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5
    const level14= 1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5

    if (message.content === '!level') {
        if (allTime.get(userId) < 36000)
            message.channel.send(`${message.member.user.username} du bist Level 0.`);

        if (allTime.get(userId) >= 36000  && allTime.get(userId) < 36000*level2)
            message.channel.send(`${message.member.user.username} du bist Level 1.`);

        if (allTime.get(userId) >= 36000*level2 && allTime.get(userId) < 36000*level3)
            message.channel.send(`${message.member.user.username} du bist Level 2.`);

        if (allTime.get(userId) >= 36000*level3  && allTime.get(userId) < 36000*level4)
            message.channel.send(`${message.member.user.username} du bist Level 3.`);

        if (allTime.get(userId) >= 36000*level4 && allTime.get(userId) < 36000*level5)
            message.channel.send(`${message.member.user.username} du bist Level 4.`);

        if (allTime.get(userId) >= 36000*level5 && allTime.get(userId) < 36000*level6)
            message.channel.send(`${message.member.user.username} du bist Level 5.`);

        if (allTime.get(userId) >= 36000*level6 && allTime.get(userId) < 36000*level7)
            message.channel.send(`${message.member.user.username} du bist Level 6.`);

        if (allTime.get(userId) >= 36000*level7 && allTime.get(userId) < 36000*level8)
            message.channel.send(`${message.member.user.username} du bist Level 7.`);

        if (allTime.get(userId) >= 36000*level8 && allTime.get(userId) < 36000*level9)
            message.channel.send(`${message.member.user.username} du bist Level 8.`);

        if (allTime.get(userId) >= 36000*level9 && allTime.get(userId) < 36000*level10)
            message.channel.send(`${message.member.user.username} du bist Level 9.`);

        if (allTime.get(userId) >= 36000*level10 && allTime.get(userId) < 36000*level11)
            message.channel.send(`${message.member.user.username} du bist Level 10.`);

        if (allTime.get(userId) >= 36000*level11 && allTime.get(userId) < 36000*level12)
            message.channel.send(`${message.member.user.username} du bist Level 11.`);

        if (allTime.get(userId) >= 36000*level12 && allTime.get(userId) < 36000*level13)
            message.channel.send(`${message.member.user.username} du bist Level 12.`);
            
        if (allTime.get(userId) >= 36000*level13 && allTime.get(userId) < 36000*level14)
            message.channel.send(`${message.member.user.username} du bist Level 13.`);

        if (allTime.get(userId) >= 36000*level14)
            message.channel.send(`${message.member.user.username} du bist Level 14.`);
    }
});


    // Funktion um alltime zu tracken + lvl anzeige

    client.on('voiceStateUpdate', (oldState, newState) => {
        const userId = oldState.member.user.id;
        const username = oldState.member.user.username;
        const level2 = 1.5
        const level3 = 1.5*1.5
        const level4 = 1.5*1.5*1.5
        const level5 = 1.5*1.5*1.5*1.5
        const level6 = 1.5*1.5*1.5*1.5*1.5
        const level7 = 1.5*1.5*1.5*1.5*1.5*1.5
        const level8 = 1.5*1.5*1.5*1.5*1.5*1.5*1.5
        const level9 = 1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5
        const level10 = 1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5
        const level11= 1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5
        const level12= 1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5
        const level13= 1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5
        const level14= 1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5*1.5



        if (!allTime.has(userId)) {
            allTime.set(userId, 0)
        }

        //allTime.set(userId, 80995)
    
        if (oldState.channelId === null && newState.channelId !== null) {
            const iid = setInterval(function () {
                allTime.set(userId, allTime.get(userId) + 1)
                    console.log(allTime.get(userId))
            if (newState.channelId === null && oldState.channelId === null) {
                console.log(`${username} hat den Server verlassen.`)
                clearInterval(iid)
            }   

                /*if (allTime.get(userId) === 5){
                client.channels.cache.get('948618213049114686').send(`${username} hat Level 0 erreicht. Herzlichen Glückwunsch!`)
                }*/

                if (allTime.get(userId) === 36000){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 1 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000*level2){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 2 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000*level3){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 3 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000*level4){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 4 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000*level5){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 5 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000*level6){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 6 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000*level7){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 7 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000*level8){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 8 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000*level9){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 9 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000*level10){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 10 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000*level11){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 11 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000*level12){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 12 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000*level13){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 13 erreicht. Herzlichen Glückwunsch!`)
                }

                if (allTime.get(userId) === 36000*level14){
                    client.channels.cache.get('948618213049114686').send(`${username} hat Level 14 erreicht. Herzlichen Glückwunsch!`)
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