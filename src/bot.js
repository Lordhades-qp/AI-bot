const { default: makeWASocket, DisconnectReason } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
require('dotenv').config();

async function startBot() {
    const sock = makeWASocket({
        printQRInTerminal: true, // Affiche le QR pour scanner
    });

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Connexion perdue, reconnexion :', shouldReconnect);
            if (shouldReconnect) startBot();
        } else if (connection === 'open') {
            console.log('Connecté à WhatsApp');
        }
    });

    sock.ev.on('messages.upsert', async (msg) => {
        console.log(JSON.stringify(msg, null, 2));
        const message = msg.messages[0];
        if (!message.key.fromMe && message.message) {
            const text = message.message.conversation || '';
            await sock.sendMessage(message.key.remoteJid, { text: `Vous avez envoyé : ${text}` });
        }
    });
}

startBot();
