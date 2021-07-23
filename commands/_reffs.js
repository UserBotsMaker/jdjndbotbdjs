/*CMD
  command: /reffs
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ref1= Bot.getProperty("refc01","⛔ Not set")
let ref2=Bot.getProperty("refc02"," ⛔ Not Set")
var ref3=Bot.getProperty("refc03", " ⛔Not Set")
var id = request.message.message_id
var text1="👥* Refferrals System*\n\n*3 Level:*\n🥇 Level°1 - "+ref1+"%\n🥈 Level°2 - "+ref2+"%\n🥉 Level°3 - "+ref3+"%"
var text2= "*👥 Refferrals direct bot url:* https://t.me/"+bot.name+"?start="+user.telegramid
let l1=Libs.ResourcesLib.userRes("ref");
let l2=Libs.ResourcesLib.userRes("ref2");
let l3=Libs.ResourcesLib.userRes("ref3");
var bonu=Libs.ResourcesLib.userRes("bonus");
var bonudep=Libs.ResourcesLib.userRes("refftotaldepo");
var text3="*👥 Refferrals Statistics*\n\n*1° Level: *"+l1.value().toFixed(0)+" users\n*2° Level: *"+l2.value().toFixed(0)+" users\n*3° Level: *"+l3.value().toFixed(0)+" users"+"\n\n *👥 Refferrals Deposits:* "+bonudep.value().toFixed(8)+" TRX " + "\n♾ *Earnings: *"+bonu.value().toFixed(8)+" TRX"
var rxt = text1+"\n\n"+text2+"\n\n"+text3
var b=[[{text:"📑 Detailed Report 📑",callback_data:"/list"}],[{text:"⬅️ Return",callback_data:"/mainf r"}]]
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:rxt,reply_markup:{inline_keyboard:b}
})

