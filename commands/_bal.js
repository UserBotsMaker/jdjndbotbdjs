/*CMD
  command: /bal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("balance");
let email = User.getProperty("email","Not Set")
var id =  request.message.message_id
var key = [[{text:"⬅️ Return",callback_data:"/mainf r"}]]
var rxt = "*User:* " +user.first_name+"\n\n*💰 Balance : *" +res.value().toFixed(2)+" *TRX*\n\n*📧 Email:* `" +email+"`\n"
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:rxt,reply_markup:{inline_keyboard:key}
})

