const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'number ?(.*)', fromMe: false, desc: 'imash number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:IMASH NIDUSHA\n' // full name
            + 'ORG:IMASH(Zed);\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=94771323434:+94 771323434\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "IMASH NIDUSHA", vcard: vcard}, MessageType.contact)
}))
