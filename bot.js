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




client.on("message", message => {
    if (message.content === "-help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setFooter('By KingDom')
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
  
     **✨Administrationr Commands | اوامر الاداره✨**
   -قريباً
   `)
   message.author.sendEmbed(embed)
   
   }
});
















 client.login("NDI5MzgwNzYyNTM0Njc0NDMy.DaDznw.QxTgfCCu3C7Lv9DRnQZ8K0BgsfU"); //توكن حسابك


