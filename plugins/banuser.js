let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'Quien quiere ser baneado?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta a alguien'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `ah sido baneado`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler
