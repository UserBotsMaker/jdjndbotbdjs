/*CMD
  command: /download
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Codes
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("balance");
var id =  request.message.message_id
var key = [[{text:"⬅️ Return",callback_data:"/mainf r"}]]

if (res.value() < 10){
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"*⛔️ You don't have enough balance to buy this code!*" + "\n\n*💰 Your balance:* "+res.value()+" *TRX*",reply_markup:{inline_keyboard:key}
})
}else{
Bot.sendMessage("`Bot.sendMessage('Downloading...',{on_result:'/save'})`\n\nCommand /save\n\n`let id = options.result.message_id;\nBot.editMessage('10%',id)\nBot.editMessage('50%',id)\nBot.editMessage('70%',id)\nBot.editMessage('100%',id)\n`\n\n*😎 Here is the code👆*",{disable_web_page_preview:true})
res.add(-10)
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"*✅ Code Purchased Successfully*",reply_markup:{inline_keyboard:key}
})
}

