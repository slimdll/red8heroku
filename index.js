const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '593469041:AAECycHv1PKrHOPZ9l-XMrtDc44Q7vFyiLM'
 
const bot = new TelegramBot (TOKEN, {polling: true})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'Hello Red8, bot says: "Hi, $(message.from.first_name)"')

})
