/*CMD
  command: /checkuser
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

if (res.value() < 2){
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"*⛔️ You don't have enough balance to buy this code!*" + "\n\n*💰 Your balance:* "+res.value()+" *TRX*",reply_markup:{inline_keyboard:key}
})
}else{
Bot.sendMessage("`let res = Libs.ResourcesLib.userRes('M1')\nlet M = Libs.ResourcesLib.userRes('M11')\nlet hourly = M.value() * 0.00001\nlet daily = 24 * hourly\nres.growth.add({value: hourly,interval : 1*60*60})`\n\n*😎 Here is the code👆*",{disable_web_page_preview:true})
res.add(-2)
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"*✅ Code Purchased Successfully*",reply_markup:{inline_keyboard:key}
})
}

