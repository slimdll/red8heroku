const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '593469041:AAFuTMg63AR9I3TJJYQ_dMydmLC8QbPrzDg'
 
const bot = new TelegramBot (TOKEN, {polling: true})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'Hello Red8, bot says: "Hi, $(message.from.first_name}"')

})
