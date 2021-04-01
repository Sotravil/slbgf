let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Ingrese el número de coins que se darán'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta a alguien'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Solo números'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw 'Minimal 1'
    let users = global.DATABASE._data.users
    if (limit > users[m.sender].limit) throw 'coins insuficientes para la transferencia'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} Coins) + (${-pjk} Coins (Impuestos 2%)) = ( ${-limit} Coins)`)
    conn.fakeReply(m.chat, `+${poin} Coins`, who, m.text)
}
handler.help = ['paycoins @user <cantidad>']
handler.tags = ['xp']
handler.command = /^paycoins$/
handler.rowner = false

module.exports = handler

