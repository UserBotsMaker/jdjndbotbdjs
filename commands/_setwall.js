/*CMD
  command: /setwall
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id =  request.message.message_id
var key = [[{text:"⬅️ Return",callback_data:"/mainf r"}]]
var rxt = "*✏️ Send now your BB email address* to use it in future!"
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:rxt,reply_markup:{inline_keyboard:key}
})
Bot.runCommand("wallett",{onresult:"/save"})

