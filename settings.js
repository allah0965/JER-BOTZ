const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'V19', // ISI APIKEY LU
}

global.namabot = "BayMax MD" // UBAH JADI NAMA LU
global.namaowner = "Mr Juice" // NAMA OWNER
global.footer_text = "© BayMax MD" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['263780699988'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.fakelink = "https://instagram.com/mr_juice7" // bebas asal jan hapus
global.grubbot = (`*JOIN MY GROUP*\n\nhttps://chat.whatsapp.com/GRuUvhCqhHK08msKMadAji`) // GANTI LINK GRUB BOT LU \\
// -- \\
// FALSE OR TRUE \\
global.autoTyping = true // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS
global.autoblok212 = true // BEBAS
global.autoread = false // BEBAS
global.autorespon = true // BEBAS
global.onlyprem = true // BEBAS
global.onlygrub = false // BEBAS
global.onlypc = false // BEBAS
// - \\
// PEMISAH \\
global.packname = '© BayMax' //sticker wm ubah
global.author = 'Mr Juice' //sticker wm ganti nama kalian

// BUG MENU \\
global.jumlah = "5"
global.audionya = fs.readFileSync("./sound.mp3")

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
