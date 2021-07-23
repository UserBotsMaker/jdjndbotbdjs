/*CMD
  command: wallett
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id =  User.getProperty("id")
var key = [[{text:"⬅️ Return",callback_data:"/mainf r"}]]
var x = [[{title:"⬅️ Return",command:"/mainf r"}]]
var rxt = "🖊 Done: Your new Email is \n "+"`"+message+"`"
if (message.length <10){
Bot.sendInlineKeyboard(x,"*⛔️ Incorrect Email address!*")
}else{
User.setProperty("email",message,"string")
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:rxt,reply_markup:{inline_keyboard:key}
})
}

