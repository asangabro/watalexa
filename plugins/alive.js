const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'alive', fromMe: true, deleteCommand: true,}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[2] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[3] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[4] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[5] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[6] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[7] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[8] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[9] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[10] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[11] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[12] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[13] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[14] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[15] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[16] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[17] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[18] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[19] ="https://telegra.ph/file/436aeac91196835b95596.jpg";

var i = Math.floor(20*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '            *💢Sl Android💢* \n          ☢ *Offical Bot Service* ☢\n\n*Hosted* • ๛```Google Cloud```\n*Version* • ๛ ```'+Config.VERSION+'```\n*Branch* • ๛ ```'+Config.BRANCH+'```\n*Owner* ๛ Bumidu Sandeepa \n*Bot Owner* ๛ Asanga Udara \n✧ Sl Android\n\n **\n ```Thanks For your choosing bot```'})
    }));
}
else if (Config.WORKTYPE == 'public') {
	
	Asena.addCommand({pattern: 'alive', fromMe: false, deleteCommand: false,}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[2] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[3] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[4] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[5] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[6] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[7] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[8] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[9] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[10] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[11] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[12] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[13] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[14] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[15] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[16] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[17] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[18] ="https://telegra.ph/file/436aeac91196835b95596.jpg";
        r_text[19] ="https://telegra.ph/file/436aeac91196835b95596.jpg";

var i = Math.floor(20*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '                   *💢Sl Android💢* \n          ☢ *Offical Bot Service* ☢\n\n*Hosted* • ๛```Google Cloud```\n*Version* • ๛ ```'+Config.VERSION+'```\n*Branch* • ๛ ```'+Config.BRANCH+'```\n*Owner* ๛ Bumidu Sandeepa \n*Bot Owner* ๛ Asanga Udara \n✧ Sl Android\n\n **\n ```Thanks For your choosing bot```'})
    }));
}
