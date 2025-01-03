const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot prêt à fonctionner !');
});

client.on('message', (message) => {
    if (message.body === 'ping') {
        message.reply('pong');
    }
});

client.initialize();
