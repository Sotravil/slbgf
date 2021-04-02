let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw [`
Level *${user.level} (${user.exp - min}/${xp})*\nTe faltan *${max - user.exp}* para subir de nivel!
`.trim(), {...user, min, xp, max}]
  }
  user.level++
  m.reply(`
✨Felicitaciones, has subido de nivel✨!
*${user.level - 1}* -> *${user.level}*
  `.trim())
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i

module.exports = handler
