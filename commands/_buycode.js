/*CMD
  command: /buycode
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = [[{text:"TYPING BOT [3 TRX]",callback_data:"/typing"},{text:"HIDE KEYBOARD [Free]",callback_data:"/hide"}],[{text:"OTP CHANNEL [5 TRX]",callback_data:"/otpchannel"}],[{text:"CAPTCHA [7 TRX]",callback_data:"/captcha"},{text:"MINER [2 TRX]",callback_data:"/miner"}],[{text:"MAINTAINCE [5 TRX]",callback_data:"/maint"},{text:"BAN & UNBAN [15 TRX]",callback_data:"/ban&un"}],[{text:"Check User balance [15 TRX]",callback_data:"/checkuser"}],[{text:"Top Referrals [10 TRX]",callback_data:"/top"},{text:"Animated Emoji [4 TRX]",callback_data:"/animated"}],[{text:"Get Users Profile photo [20 TRX]",callback_data:"/getuser"}],[{text:"Redeem Code [15 TRX]",callback_data:"/redeemcode"},{text:"Links Shortner [50 TRX]",callback_data:"/linkshort"}],[{text:" Join Then refer count [30 TRX]",callback_data:"/joinref"}],[{text:"Live Price [30 TRX]",callback_data:"/liveprice"},{text:" QR Code [40 TRX]",callback_data:"/qrcode"}],[{text:"Loading bjs [20 TRX]",callback_data:"/load"},{text:"Downloading bjs [10 TRX]",callback_data:"/download"}],[{text:"Transfer Admin Panel [10 TRX]",callback_data:"/transfer"}],[{text:"⬅️ Return",callback_data:"/mainf r"}]]
var id = request.message.message_id
var rxt = "💱 *Select the code you want to purchase it!*"
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:rxt,reply_markup:{inline_keyboard:key}
})
