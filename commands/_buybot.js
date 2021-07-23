/*CMD
  command: /buybot
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = [[{text:"👨‍💻 See Demo Bots",callback_data:"/demobots"}],[{text:"➕ Single Currency Investment [200 TRX]",callback_data:"/singleinvest"}],[{text:"💱 Multi Currency Investment [500 TRX]",callback_data:"/multiinvest"}],[{text:"💫 Normal Coinbase Invite [150 TRX]",callback_data:"/coinbaseinvite"}],[{text:"🔭 Advanced Coinbase Invite [550 TRX]",callback_data:"/advancedcoinbase"}],[{text:"📱 Airdrop [100 TRX]",callback_data:"/airdrop"}],[{text:"🔆 Single Investment V2 [150 TRX]",callback_data:"/singleinvestv2"}],[{text:"💻 Mining [400 TRX]",callback_data:"/mining"}],[{text:"🖥 Mining V2 [600 TRX]",callback_data:"/miningv2"}],[{text:"🎲 Dice & Game [120 TRX]",callback_data:"/dice"}],[{text:"🏪 Bot Seller [2000 TRX]",callback_data:"/botsell"}],[{text:'⬅️ Return',callback_data:"/mainf r"}]]
var id = request.message.message_id
var rxt = "🤖 *Select the Bot full codes you want to purchase it!*"
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:rxt,reply_markup:{inline_keyboard:key}
})
