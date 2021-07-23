/*CMD
  command: /mainf
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = [[{text:"👤 Account",callback_data:"/bal"}],[{text:"🤖 Buy Bots",callback_data:"/buybot"},{text:"💣 Buy Codes",callback_data:"/buycode"}],[{text:"➕ Deposit",callback_data:"/depo"},{text:"⛓ Referral",callback_data:"/reffs"},{text:"📧 Set Email",callback_data:"/setwallet"}],[{text:"📞 Support",callback_data:"/support"}]]

if(params=="r"){

var id = request.message.message_id
var rxt = "😎 " +user.first_name+" *Welcome to* *"+bot.name+"*"
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:rxt,reply_markup:{inline_keyboard:key}
})
}else{
var ke = [[{title:"👤 Account",command:"/bal"}],[{title:"🤖 Buy Bots",command:"/buybot"},{title:"💣 Buy Codes",command:"/buycode"}],[{title:"➕ Deposit",command:"/depo"},{title:"⛓ Referral",command:"/reffs"},{title:"📧 Set Email",command:"/setwallet"}],[{title:"📞 Support",command:"/support"}]]
Bot.sendInlineKeyboard(ke,"😎 " +user.first_name+" *Welcome to* *"+bot.name+"*",{on_result:"/save"})
}
