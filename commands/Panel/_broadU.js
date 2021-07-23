/*CMD
  command: /broadU
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Input Message to Broadcast :
  keyboard: 
  aliases: 
CMD*/


var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
  let msg = " "+ message +" "
  Bot.sendMessageToAllPrivateChats(msg)
  Bot.sendMessage("✅ Message sent to all active members")
}else{
return
}
