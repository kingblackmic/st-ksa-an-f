const Discord = require("discord.js");
const client = new Discord.Client();







client.on("ready", () => {
client.user.setPresence({
  status: 'online', 
  game: { 
     type: 0,
     name: 'WEEK_END 🔥',    
     details: `🎈خميس ومالي خلق ازعل🎈`,  
     url: 'http://twitch.tv/Streammingg',
     state: `انا فوق السحاب هناك شوفوني ☁`,
    application_id: '420956479747784715', 
        small_image: `421232881684316160`,  
        small_text: 'Hi' ,
        large_image: `421233046612869120`, 
        large_text: `Hi` } 
  }
    });
});



 client.login("MzQ2MTMxMzc1OTkwMjQzMzQw.DZ5dZg.Zl1QnGA8Knt0rLlyAhmRq6Ad4pA");
