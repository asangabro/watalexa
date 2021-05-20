/*
# Exclusively from SL-Android project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Asanga_Udara
*/


const Asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');

Asena.addCommand({pattern: 'grp', fromMe: true, deleteCommand: false,}, (async (message, match) => {

  var msg = await message.reply('```getting links...```');

  await msg.delete();

  await message.client.sendMessage(

    message.jid,'*Welcome to sl android offical bot service working 100%*', MessageType.text);

}));
