/*CMD
  command: /save
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var x = options.result.message_id;
User.setProperty("id",x,"Integer")
