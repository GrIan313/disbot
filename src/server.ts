require("dotenv").config()

import {Client, Intents, Interaction, Message} from "discord.js"

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    console.log(message.author.username + ": " + message.content);
});

// const joinStates = new Map()
const rankings = new Map()


/* client.on('message', message => {
    if (rankings = 1000)
        schreibe in chat UserXY ist seit XY minuten in einem Voce Channel
        }) */

client.on('voiceStateUpdate', (oldState, newState) => {
    const userId = oldState.member.user.id;
    const username = oldState.member.user.username;

    if (!rankings.has(userId)) {
        rankings.set(userId, 0)
    }

    let interval: NodeJS.Timeout = null; 

    if (oldState.channelId === null && newState.channelId !== null) {
        interval = setInterval(function() {
            rankings.set(userId, rankings.get(userId) + 1)
            console.log(rankings.get(userId))
            if (rankings.get(userId) === 5) {
                console.log(`${username} ist seit 5 Sekunden auf dem Sever`)
            }
        }, 1000)

    } else if (newState.channelId === null && oldState.channelId !== null) {
        console.log("Left channel", interval)
        clearInterval(interval)
    }

});

client.login(process.env.DISCORD_BOT_TOKEN)
