/*අමාරුවෙන් හොයාගෙන අටෝ ගත්තේ උස්සන්න එපෝ
*/

const Asena = require("../events");
const Language = require("../language");
const {setMsg,enableGreetings,genButtons,genGreetingsPreView,enableAntilink,enableAntiFake,enableAntiBad,checkImAdmin,antiList,clearGreetings,mentionMessage,enableMention} = require('../Utilis/Misc");
const { MessageType } = require("@adiwajshing/baileys");
const { getMessage, deleteMessage } = require("../Utilis/warn");
const Lang = Language.getString("asena");
const config = require('../config');
let fm = true;
const s = "```";

if (Config.WORKTYPE == 'private') {
  
  Asena.addCommand(
  {
    pattern: "mention ?(.*)",
    fromMe: true,
    desc: Lang.BOT_DESC
  },
  async (message, match) => {
    if (match == "")
      return await message.sendMessage(
        genButtons(["ON", "OFF", "GET"], Lang.BOT_DESC, 'Choose'),
        {},
        MessageType.buttonsMessage
      );
    if (match == "get") {
      let msg = await mentionMessage()
      if (!msg) return await message.sendMessage(Lang.BOT_DESC.format('Mention'));
      return await message.sendMessage(msg);
    } else if (match == "on" || match == "off") {
      await enableMention(match);
      return await message.sendMessage(
        Lang.BOT_DESC.format('Reply to Mention', `${match == "on" ? Lang.BOT_DESC : Lang.BOT_DESC}`)
      );
    }
    await enableMention(match);
    return await message.sendMessage(Lang.BOT_DESC.format('Mention'));
  }
);
