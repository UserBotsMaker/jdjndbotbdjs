/*CMD
  command: /list
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

let r=Bot.getProperty("activereflistinv"+user.telegramid,"No Any Deposit")
var id =  request.message.message_id
var key = [[{text:"⬅️ Return",callback_data:"/mainf r"}]]
var rxt = "📑 Advanced Active Referrals Report\n\n"+r
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:rxt,reply_markup:{inline_keyboard:key}
})
