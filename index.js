const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '591138848:AAFCHgjDvTAn3Qm5zUD3-a-Aj5QO3jZCcxg'
 
const bot = new TelegramBot (TOKEN, {polling: true})

bot.onText(/\/start/, msg => {
	const text = 'Hi,red', $(msg.from.first_name)\nПривет
	
  bot.sendMessage(msg.chat.id, 'Hi, text, {
	  reply_markup: {
		  keyboard: [
		  ['ХАРЬКОВ', 'ПОМОЩЬ']
		 ]
	  }
})