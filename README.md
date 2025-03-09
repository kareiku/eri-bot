# Eri Bot

Eri is a bot for Discord, written in discord.js v14.

## Environment Variables

In the `.env` file, the following environment variables are required to be defined:
- `TOKEN` (string): The token the bot client will use to log into Discord.
- `ALLOWED_USERS_IDS` (a single string with IDs separated by commas (,)): The Discord IDs for each user that is allowed to run administration commands over this instance of the bot. **This is not related to the Discord permission *Administrator* by any means**.
