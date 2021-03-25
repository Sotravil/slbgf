let handler = function (m) {
  // this.sendContact(m.chat, '19728806294', 'Sotravil, m)
  this.sendContact(m.chat, '19728806294', 'Sotravil', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(info|creador|owner|creator)$/i

module.exports = handler
