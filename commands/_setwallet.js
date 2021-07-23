/*CMD
  command: /setwallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let email = User.getProperty("email","Not Set")
var id =  request.message.message_id
var key = [[{text:"💼 Set / Change Email",callback_data:"/setwall"}],[{text:"⬅️ Return",callback_data:"/mainf r"}]]
var rxt = "*💡 Your currently set BB email address is:* \n `"+email+"`\n\n💹It will be used for *all future Buying bots*"
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:rxt,reply_markup:{inline_keyboard:key}
})

