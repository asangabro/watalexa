const Asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');

Asena.addCommand({pattern: 'grp', fromMe: true, deleteCommand: false,}, (async (message, match) => {

  var msg = await message.reply('```getting links...```');

  await msg.delete();

  await message.client.sendMessage(

    message.jid,'*✔️Groups List📃* \n\n දැනුම Telegram👉\n 💠 https://t.me/danuma01\n උසස් පෙල සවිය 📊 \n💠 http://t.me/alxams\n සාමාන්‍ය පෙල සවිය 🔍 \n💠http://t.me/olxams \nPro Apps 📱 \n💠 http://t.me/danuma \nFilm Store 🎬 \n💠 http://t.me/films_SL_x \nBot Project 🤖 \n💠 http://t.me/danumabots \nදැනුම blog👉 \n💠 https://danumagroup.blogspot.com/?m=1 \n📚 දැනුම පොත් Web Site එක \n💠 https://danuma.danuma.workers.dev/ \n\n💡දැනුම Whatsapp 📚සමූහ  \n\n*Group 10* \nhttps://chat.whatsapp.com/HJP8Nya6bubLlyowDvdVYY \n\n*Group 9* \nhttps://chat.whatsapp.com/IT92AiIBHHD1i1EMhvlTQD \n\n*Group 8*  \nhttps://chat.whatsapp.com/Brn9KwB4vf29PFvvV2LV4x \n\n*Group 7* \nhttps://chat.whatsapp.com/DMhkJIM1NCm8Nsh5iBeNaF \n\n*Group 6* \nhttps://chat.whatsapp.com/GsqFiZpJhC61zOIwmyrTD0 \n\n*group 5* \nhttps://chat.whatsapp.com/FaPZBiAK37Y2my4RenHm5K \n\n*group 4* \nhttps://chat.whatsapp.com/DJzGuFUOXZOFRlG6APWR6a \n\n*group 3* \nhttps://chat.whatsapp.com/DjG7hi3kL7mCzP9UwRe38m \n\n*group 2* \nhttps://chat.whatsapp.com/Le60XJtUJMK1zZBwyJfstu \n\n*group 1* \nhttps://chat.whatsapp.com/JVEdzU42Qmw3KsOkBApTOM', MessageType.text);

}));
