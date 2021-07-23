/*CMD
  command: /depo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id =  request.message.message_id
var key = [[{text:"TRX",callback_data:"/depot"},{text:"DOGE",callback_data:"/depod"},{text:"LTC",callback_data:"/depol"}],[{text:"⬅️ Return",callback_data:"/mainf r"}]]
var rxt = "➕ Select Deposit Currency\n\n*❗️ All deposits will be converted to TRX*"
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:rxt,reply_markup:{inline_keyboard:key}
})

