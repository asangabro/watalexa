/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const speedTest = require('@lh2020/speedtest-net');
const TinyURL = require('tinyurl');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('web');
const SLang = Language.getString('webss');

// https://github.com/ddsol/speedtest.net/blob/master/bin/index.js#L86
function speedText(speed) {
    let bits = speed * 8;
    const units = ['', 'K', 'M', 'G', 'T'];
    const places = [0, 1, 2, 3, 3];
    let unit = 0;
    while (bits >= 2000 && unit < 4) {
      unit++;
      bits /= 1000;
    }

    return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
}

Asena.addCommand({pattern: 'speedtest', fromMe: true, desc: Lang.SPEEDTEST_DESC}, (async (message, match) => {
    var msg = await message.reply(Lang.SPEEDTESTING);
    var st = await speedTest({acceptLicense: true, acceptGdpr: true});
    
    await message.client.sendMessage(
      message.jid,Lang.SPEEDTEST_RESULT + '\n\n' + 
    '*ISP:* ```' + st.isp + '```\n' +
    '*Ping:* ```' + st.ping.latency + 'ms```\n' +
    '*' + Lang.UPLOAD + ':* ```' + speedText(st.upload.bandwidth) + '```\n' +
    '*' + Lang.DOWNLOAD + ':* ```' + speedText(st.download.bandwidth) + '```\n',MessageType.text
    );
    await msg.delete();
}));

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'ping', fromMe: true, deleteCommand: false, desc: Lang.PING_DESC}, (async (message, match) => {
  var start = new Date().getTime();
  var msg = await message.reply('```Ping!```');
  var end = new Date().getTime();

  await message.client.sendMessage(
     message.jid,'*☄️Running 🏃🏃🚶*\n⚡speed⚡```' + (end - start) + 'ms```', MessageType.text);
}));
}
else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'ping', fromMe: false, deleteCommand: false, desc: Lang.PING_DESC}, (async (message, match) => {
  var start = new Date().getTime();
  var msg = await message.reply('```Need to know am I working....?```');
  var end = new Date().getTime();

  await message.client.sendMessage(
     message.jid,'*☄️Running 🏃🏃🚶*\n⚡speed⚡```' + (end - start) + 'ms```', MessageType.text);
}));
}

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'short ?(.*)', fromMe: true, desc: Lang.URL}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

        TinyURL.shorten(`${match[1]}`, async(res, err) => {
          if (err)
            await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

            await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* ` + res, MessageType.text)
        });
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'short ?(.*)', fromMe: false, desc: Lang.URL}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

        TinyURL.shorten(`${match[1]}`, async(res, err) => {
          if (err)
            await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

            await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* ` + res, MessageType.text)
        });
    }));
}