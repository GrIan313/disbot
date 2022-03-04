require("dotenv").config()

import {Client, Intents} from "discord.js"

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    console.log(message.author.username + ": " + message.content);
});

const rankings = new Map()

client.on('voiceStateUpdate', (oldState, newState) => {
    const userId = oldState.member.user.id;

    if (!rankings.has(userId)) {
        rankings.set(userId, 0)
    }

    let interval: NodeJS.Timeout = null;

    if (oldState.channelId === null && newState.channelId !== null) {
        interval = setInterval(function() {
            rankings.set(userId, rankings.get(userId) + 1)
        }, 1000)
    } else if (newState.channelId === null && oldState.channelId !== null) {
        clearInterval(interval)
    }
});

client.login(process.env.DISCORD_BOT_TOKEN)
