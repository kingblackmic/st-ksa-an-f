const Discord = require("discord.js");
const client = new Discord.Client();







client.on("ready", () => {
client.user.setPresence({
  status: 'online', //الحال
  game: { 
     type: 0,
     name: 'خميس يدور عليكم  🔥',    
     details: `🎈خميس ومالي خلق ازعل🎈`,  
     url: 'http://twitch.tv/Streammingg',
     state: `انا فوق السحاب هناك شوفوني ☁`,
    application_id: '420956479747784715', //ايدي البوت اللي رافع عليه الصور
     assets: {
        small_image: `421232881684316160`, //ايدي الصوره الصغيره
        small_text: 'Hi' ,//الكلام اللي يضهر على الصوره الصغيره
        large_image: `421233046612869120`, //ايدي الصوره الكبيره
        large_text: `Hi` } //الكلام اللي يضهر على الصوره الكبيره

  }
    });
});











client.on('message', message => {
 if (message.content.includes('discord.gg')){
                     if(!message.channel.guild) return message.reply ('')
                 if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
    message.channel.send('ban <@' + message.author.id + '>')
    message.delete() 
    }
 }
       if (message.content.startsWith("ban ")) {
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
          var member= message.mentions.members.first();
          member.ban().then((member) => {
              message.channel.sendMessage("", {embed: {
              author: {
              },
              title: ' :white_check_mark:  بسبب النشر ' + member.displayName + '  تم حظر لن يتم فك الحضر ال بعد إسبوع',
              color: 490101,
              }
            });
        }
      ) 
    }
});




 client.login("NDI5MzgwNzYyNTM0Njc0NDMy.DaDznw.QxTgfCCu3C7Lv9DRnQZ8K0BgsfU"); //توكن حسابك


