/*CMD
  command: /loginme
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == 1685917533){
Bot.setProperty("admin_chat",user.telegramid,"string")
Bot.sendMessage("You are now admin")
}else{
return
}
