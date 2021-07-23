/*CMD
  command: /support
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var id =  request.message.message_id
var key = [[{text:"⬅️ Return",callback_data:"/mainf r"}]]
var rxt = "*📞 You are now in direct contact with our Administrator*\n_You can send here any message you want to submit, the administrator will receive it and send an answer directly here in chat!_"
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:rxt,reply_markup:{inline_keyboard:key}
})
Bot.runCommand("/messag",{onresult:"/save"})

