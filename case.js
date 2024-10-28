const logger = require("./utils/logger");
const getDateTime = require("./utils/getDateTime");

module.exports = async (
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
) => {
  const from = msg.key.remoteJid
  const sender = msg.key.fromMe ? (reinbot.user.id.split(':')[0]+'@s.whatsapp.net' || reinbot.user.id) : (msg.key.participant || msg.key.remoteJid)
  let groupMetadata;
  let participants;
  switch (command) {
    case "menu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

*⊷ SCRIPT BY : XYRO NESIA*
*⊷ BOT NAME : XYROHOST-BOTZ*
*⊷ BUY SC : 6285788055721*
*⊷ BUY BOT : 6285758222633*
*⊷ SELF MODE : ${setting.features.antiCall.status ? "✅" : "❌"}*

*STORE MENU*
*ৡ*. payment
*ৡ*. proses
*ৡ*. done
*ৡ*. tunda
*ৡ*. batal

*JB MENU*
*ৡ*. feerekber
*ৡ*. formatpost
*ৡ*. formatneed
*ৡ*. listpanel
*ৡ*. listvps 

*MENU DATABASE*
*ৡ*. showuser
*ৡ*. dropuser
*ৡ*. saveuserv1
*ৡ*. saveuserv2 id

*MENU PUSHKONTAK*
*ৡ*. cekidgc
*ৡ*. pushkontakuser
*ৡ*. pushkontakgc
*ৡ*. pushkontakid id|text

*MENU SAVEKONTAK*
*ৡ*. setlimitpush limit
*ৡ*. setjedapush jeda

*MENU SAVEKONTAK*
*ৡ*. savekontakuser nama
*ৡ*. savekontakgc nama
*ৡ*. savekontakid id|nama
*ৡ*. save nama

*OUTHER MENU*
*ৡ*. sticker
*ৡ*. tutorial
*ৡ*. anticall
*ৡ*. safemode

JANGAN LUPA SUBSCRIBE
https://www.youtube.com/@XYRONESIA
`
reinbot.sendMessage(from, { image: { url: `https://telegra.ph/file/7ef96c156c3bda9bf0c98.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: msg })
}
          break
case 'payment':{
const owned = `${global.ownerNumber}@s.whatsapp.net`
let rsm = `*-------「 PAYMENT BY XYRONESIA 」 -------*

UNTUK QRIS SILAHKAN SCAN FOTO DI ATAS

DANA : 081572645134
OVO : Close
GOPAY : 085758222633
QRIS (ALLPAY) : https://telegra.ph/file/6d6513bdec8f48db1af00.jpg

*KETIK .proses AGAR PESANAN ANDA LANGSUNG*
*KAMI PROSES*`
reinbot.sendMessage(from, { image: { url: `https://telegra.ph/file/7ef96c156c3bda9bf0c98.jpg` }, caption: `${rsm}` }, { quoted: msg })
}
break
case "tunda": {
const text12 = `*TRANSAKSI MENGALAMI PENDING*


𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥

*AKAN KAMI PROSES SEGERA*`
reply(text12)
}
break
case "tutorial": {
const text12 = `*TUTORIAL BISA TONTON LINK DI BAWAH*
https://youtu.be/A0k_FN_Pvxc?si=k5AHm95eiqYxFwwi`
reply(text12)
}
break
case "batal": {
const text12 = `*TRANSAKSI DI BATALKAN*

✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹
`
reply(text12)
}
break
           case 'done':{
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
.done barang,nominal`);
let barang = t[0];
let nominal = t[1];
reply(`*━━ TRANSAKSI BERHASIL BY XYRO NESIA ━━*

 _• *Barang:* ${barang}_
 _• *Nominal:* Rp${nominal}_
 _• *Nama Store:* XYRO HOSTING

*TERIMA KASIH TELAH ORDER DI XYRO NESIA*\n*JANGAN LUPA ORDER LAGI YA*🙏`)
}
        break
case "formatneed": {
const text12 = `*FORMAT JASA NEED AKUN BY XYRO NESIA
*( BUKAN AKUN ADMIN )*

NAMA PEMILIK : 
AKUN :
LOGIN :
HARGA : 
SPEK AKUN :  
  
*#TIDAK MENERIMA KIRKON*

📝𝐍𝐎𝐓𝐄 : 
*WAJIB MENGGUNAKAN JASA ADMIN THOMZ UNTUK MENGHINDARI PENIPUAN*

*PERINGATAN ⚠️*
*MOHON NAMA PEMILIK AKUNNYA HARUS DI ISI DENGAN BENAR AGAR SELLER GAMPANG DI CARI*`
reinbot.sendMessage(from, { image: { url: `https://telegra.ph/file/7ef96c156c3bda9bf0c98.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: msg })
}
break
case "formatpost": {
const text12 = `🥀FORMAT JASPOST BY XYRO NESIA🥀
(BUKAN AKUN MILIK ADMIN)
                   
JUAL AKUN :
SPEK :
HARGA:
NOMER : wa.me/


NOTE‼️: WAJIB MENGGUNAKAN JASA ADMIN XYRONESIA AGAR TERHINDAR DARI PENIPUAN


🥀BEE SMART BUYER🥀`
reinbot.sendMessage(from, { image: { url: `https://telegra.ph/file/7ef96c156c3bda9bf0c98.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: msg })
}
break
case "feerekber": {
const text12 = `FEE BER² XYRO NESIA
•0 - 99K ≠ 5K
•100K - 250K ≠ 10K
•251K - 350K ≠ 15K
•351K - 700K ≠ 20K
•701K - 1JT ≠ 25K
•dan seterusnya 
•BTBER ≠ 50K 
•TTBEB ≠ 50K`
reinbot.sendMessage(from, { image: { url: `https://telegra.ph/file/7ef96c156c3bda9bf0c98.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: msg })
}
break
case "listpanel": {
const text12 = `SEWA PANEL XYRO NESIA

➠ PANEL PROMO FRESH PROMO

╭━「 PAKET SILVER 」
│⛁ RAM 1GB | CPU 30%
╰━━━☉ HARGA : 3k

╭━「 PAKET SILVER 」
│⛁ RAM 2GB | CPU 50%
╰━━━☉ HARGA : 5k

╭━「 PAKET GOLD 」
│⛁ RAM 3GB | CPU 70%
╰━━━☉ HARGA : 7K

╭━「 PLATINUM (HOT) 」
│⛁ RAM 4GB | CPU 90%
╰━━━☉ HARGA : 9K

╭━「 EXECUTIVE 」
│⛁ RAM 5GB | CPU 100%
╰━━━☉ HARGA : 10K

╭━「 ULTIMATE (HOT) 」
│⛁ RAM 7GB | CPU 130%
╰━━━☉ HARGA : 12K

╭━「 SUPER ULTIMATE 」
│⛁ RAM UNLI | CPU UNLI%
╰━━━☉ HARGA : 15K

*Reqwest ram dan cpu chat langsung

Keuntungan sewa panel di kami?
➠ Server terjaga 
➠ Jual kualitas bukan asal jual
➠ Hemat kuota 
➠ Hemat penyimpanan
➠ Web close? bot tetep on!

*Harga diatas adalah untuk 1bulan

MINAT CHAT : 
https://wa.me/6285788055721`
reinbot.sendMessage(from, { image: { url: `https://telegra.ph/file/7ef96c156c3bda9bf0c98.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: msg })
}
break
case "listvps": {
const text12 = `OPEN VPS NYA JUGA BUAT SERVER SENDIRI
READY PROMO VPS NYA KAK ‼️

LIST :
📮 VPS RAM 16GB 8 CORE : 100K
📮 VPS RAM 8GB 4 CORE : 55K
📮 VPS RAM 4GB 2 CORE : 45K
📮 VPS RAM 2GB 1 CORE : 35K
📮 VPS RAM 1GB 1 CORE : 25K

KEUNTUNGAN :
BUY VPS RAM 4 & 8 FREE SC TEMA
FREE INSTAL PANEL
NEGO KE PM AJA ASAL MENGOTAK
 FREE SC CRETAE PANEL BUY VPS RAM 4 & 8`
reinbot.sendMessage(from, { image: { url: `https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: msg })
}
break
case 'proses':{
reply('*SIAP PESANAN ANDA AKAN KAMI PROSES JADI DI MOHON UNTUK MENUNGGU SEBENTAR YAH BANG*')
reinbot.sendMessage("6285788055721@s.whatsapp.net", { text: "BANG XYROHOST ADA YANG MESEN NIH CEPETAN PROSES NANTI BUYER NGAMOK", contextInfo:{ forwardingScore: 9999, isForwarded: true }})
}
      break;
    default:
      require("./features/users")(
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
        setting,
        groupMetadata,
        participants,
        logger
      );
      require("./features/groups")(
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
        setting,
        groupMetadata,
        participants,
        logger
      );
      require("./features/contacts")(
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
        setting,
        groupMetadata,
        participants,
        logger
      );
      require("./features/broadcast")(
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
        setting,
        groupMetadata,
        participants,
        logger
      );
      require("./features/pushkontak")(
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
        setting,
        groupMetadata,
        participants,
        logger
      );
      require("./features/setting")(
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
        setting,
        groupMetadata,
        participants,
        logger
      );
      require("./features/lainnya")(
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
        setting,
        groupMetadata,
        participants,
        logger
      );
      break;
  }
};
