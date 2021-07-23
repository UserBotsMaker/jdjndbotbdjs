/*CMD
  command: /onresult1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}

let status = options.result.status;

var isJoined = (
   (status == "member")||
   (status == "administrator")||
   (status == "creator")
)

if(isJoined){
Bot.runCommand("/mainf");
}else{
var key = Bot.getProperty("channel","@vierats")
var x = [[{title:"✅ Joined",command:"/joined"}]]
Bot.sendInlineKeyboard(x,"*💡 To use this bot you must join this channel: * " +key)
}
