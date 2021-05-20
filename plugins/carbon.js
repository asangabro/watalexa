/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('carbon');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'carbon ?(.*)', fromMe: true, desc: Lang.CARBON_DESC, warn: Lang.CARBON_WARN}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=blackboard&exportSize=3x&paddingVertical=200px&paddingHorizontal=200px&language=JavaScript`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '🚀Made by X-Troid ☄️'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'carbon ?(.*)', fromMe: false, desc: Lang.CARBON_DESC, warn: Lang.CARBON_WARN}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=blackboard&exportSize=3x&paddingVertical=200px&paddingHorizontal=200px&language=JavaScript`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '🚀Made by X-Troid ☄️'})

    }));
}

