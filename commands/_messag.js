/*CMD
  command: /messag
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
var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}

var admin_chat = Bot.getProperty("admin_chat")
let inf =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
if (!admin_chat) {
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"*⚠️ Bot doesn't have any admin now!*",reply_markup:{inline_keyboard:key}
})
  return // exit
}

let msg = message
if (msg.length < 3) {
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"*⚠️ Please, send a longer message!*\n_Try to explain better what you need, as much as you can in a single message!_",reply_markup:{inline_keyboard:key}
})
} else {
  let user_link = Libs.commonLib.getLinkFor(user)
  let msg = message

  var b = [
    [
      {
        title: "Reply to user " + user.first_name,
        command: "/reply" + user.telegramid
      }
    ]
  ]

  Bot.sendInlineKeyboardToChatWithId(
    admin_chat,
    b,
    "📩 New Support Message\nFrom User: " + inf + "\nMessage: " + msg)
 
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"*Message sent to the administrator:*" + "\n" + message + "\n",reply_markup:{inline_keyboard:key}
})
}

