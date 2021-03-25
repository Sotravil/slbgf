let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • PayPal [https://paypal.me/Sotravil]
│ • 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(r|sion|ción|ciones|te|si)$/i

module.exports = handler
