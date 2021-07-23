/*CMD
  command: /bbgiveaway10992
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Email
  keyboard: 
  aliases: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done!")
