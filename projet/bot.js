const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

// Crée un nouveau client WhatsApp
const client = new Client();

client.on('qr', (qr) => {
    // Générer un QR code à scanner avec WhatsApp
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot prêt et connecté à WhatsApp !');
});

client.on('message', (message) => {
    if (message.body.toLowerCase() === 'bonjour') {
        message.reply('Bonjour ! Comment puis-je vous aider ?');
    } else {
        message.reply('Je ne comprends pas votre message.');
    }
});

// Initialise le client
client.initialize();
