const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal'); // Pour afficher le QR code dans la console

// Initialisation du client WhatsApp avec gestion des sessions
const client = new Client({
  authStrategy: new LocalAuth(),
});

// Gestion des événements
client.on('qr', (qr) => {
  console.log('📱 Scannez ce QR code pour connecter le bot :');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ Le client WhatsApp est prêt !');
});

client.on('authenticated', () => {
  console.log('🔑 Authentification réussie !');
});

client.on('auth_failure', (error) => {
  console.error('❌ Échec de l’authentification :', error);
});

client.on('disconnected', (reason) => {
  console.log('🔌 Déconnecté de WhatsApp. Raison :', reason);
});

// Exportation du client pour l'utiliser ailleurs
module.exports = {
  client,
  MessageMedia, // Permet d'envoyer des médias si nécessaire
};
