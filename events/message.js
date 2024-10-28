const logger = require("../utils/logger.js");
const getDateTime = require("../utils/getDateTime.js");
const setting = require("../setting.js");

module.exports = (reinbot, m) => {
  const msg = m.messages[0];

  if (
    !msg.message ||
    (msg.key && msg.key.remoteJid === "status@broadcast") ||
    msg.broadcast
  ) {
    return;
  }

  const id = msg.key.remoteJid;
  let media;
  const isGroup = id.endsWith(".us");
  let userId = id;
  let groupId;
  const pushName = msg.pushName;
  if (isGroup) {
    groupId = id;
    userId = msg.key.participant;
  }
  const isMe = msg.key.fromMe;
  const isOwner = userId === setting.owner.whatsapp;

  if (setting.features.selfMode && !isMe) {
    return;
  }

  const msgType = Object.keys(msg.message)[0];
  const msgText =
    msgType === "conversation"
      ? msg.message.conversation
      : msgType === "extendedTextMessage"
      ? msg.message.extendedTextMessage.text
      : msgType === "videoMessage"
      ? msg.message.videoMessage.caption
      : msgType === "imageMessage"
      ? msg.message.imageMessage.caption
      : "";
  if (!msgText.startsWith(".")) {
    return;
  }
  const command = msgText.toLowerCase().substring(1).split(" ")[0].trim();
  const text = msgText.replace(/.(.+?)\s*\b/i, "");

  function logCommand() {
    logger("info", `COMMAND`, command);
  }

  async function reply(textReply) {
    try {
      await reinbot.sendMessage(
        id,
        {
          text: `*THOMZ\x20BOTZ*\x20|\x20*COMMAND*\n\n${textReply}\n\nBUY BOT HUBUNGI\nhttps://wa.me/6285788055721`,
        },
        { quoted: msg }
      );
    } catch (err) {
      logger("error", "COMMAND", err);
    }
  }

  async function replyCommand(textReply) {
    try {
      await reinbot.sendMessage(
        id,
        {
          text: `*THOMZ\x20BOTZ*\x20|\x20*${command.toUpperCase()}*\n\n${textReply}\n\nBUY BOT HUBUNGI\nhttps://wa.me/6285788055721`,
        },
        { quoted: msg }
      );
    } catch (err) {
      logger("error", "COMMAND", err);
    }
  }
  async function onlyOwner() {
    try {
      await replyCommand(
        `KHUSUS OWNER BOT JIKA INGIN MEMBELI BOT BISA LANGSUNG HUBUNGI NOMER XYRO NESIA DI BAWAH
      
  wa.me/6285788055721`
      );
    } catch (err) {
      logger("error", "ONLY OWNER", err);
    }
  }

  async function onlyGroup() {
    try {
      await replyCommand(
        "‼️\x20*ERROR:*\x20Perintah ini hanya dapat digunakan ketika dalam group chat"
      );
    } catch (err) {
      logger("error", "ONLY GROUP", err);
    }
  }

  require("../case")(
    reinbot,
    msg,
    id,
    media,
    isGroup,
    userId,
    groupId,
    isMe,
    isOwner,
    msgType,
    msgText,
    command,
    text,
    logCommand,
    reply,
    replyCommand,
    onlyOwner,
    onlyGroup,
    setting
  );
};
