require("dotenv").config()

import {Client} from "discord.js"

const client = new Client({intents: []})

client.once("ready", () => {
    console.log("Hallo Ian")
})

client.login(process.env.DISCORD_BOT_TOKEN)
