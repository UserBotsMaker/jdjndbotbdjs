/*CMD
  command: /mining
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Bots
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("balance");
var email = User.getProperty("email")
var id =  request.message.message_id
var key = [[{text:"⬅️ Return",callback_data:"/mainf r"}]]

if (res.value() < 400){
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"*⛔️ You don't have enough balance to buy this bot!*" + "\n\n*💰 Your balance:* "+res.value()+" *TRX*",reply_markup:{inline_keyboard:key}
})
}else{
BBAdmin.installBot({
  email: email,
  bot_id: id
})
res.add(-400)
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"*✅ Bot has been sent successfully to your email* " +email,reply_markup:{inline_keyboard:key}
})
}

