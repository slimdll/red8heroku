const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '593469041:AAEKZX6deG4JZIcXyATXrd29g9Opaioza40'
 
const bot = new TelegramBot (TOKEN, {polling: true})

bot.onText(/\/start/, msg => {
	const text = 'Hi,red', $(msg.from.first_name)\nПривет
	
  bot.sendMessage(msg.chat.id, 'Hi, text, {
	  reply_markup: {
		  keyboard: [
		  ['ХАРЬКОВ', 'ПОМОЩЬ']
		 ]
	  }) 
})
