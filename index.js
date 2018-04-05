const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '593469041:AAEKZX6deG4JZIcXyATXrd29g9Opaioza40'
 
const bot = new TelegramBot (TOKEN, {polling: true})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'Hi, RED8/Welcome', {
reply_markup: {
keyboard: [
['Харьков', 'Помощь']
]
})
})
