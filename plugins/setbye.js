let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.DATABASE._data.chats.sBye = text
    m.reply('Bye se configuro correctamente\n@user (Mention)')
  } else throw 'y el texto?'
}
handler.help = ['setbye <texto>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler

