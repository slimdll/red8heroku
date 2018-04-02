const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '593469041:AAEKZX6deG4JZIcXyATXrd29g9Opaioza40'
 
const bot = new TelegramBot (TOKEN, {polling: true})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'Hello Red8, bot says: "Hi, $(message.from.first_name)"')

})
