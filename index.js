const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal'); // Affichage du QR code dans la console

// Initialisation du client avec gestion des sessions
const client = new Client({
  authStrategy: new LocalAuth(), // Sauvegarde de la session
});

// Événement : Affichage du QR code pour la première connexion
client.on('qr', (qr) => {
  console.log('Scannez ce QR code pour connecter le bot :');
  qrcode.generate(qr, { small: true }); // Affichage du QR code
});

// Événement : Prêt (connexion réussie)
client.on('ready', () => {
  console.log('✅ Le bot est prêt et connecté à WhatsApp !');
});

// Événement : Gestion des messages entrants
client.on('message', async (message) => {
  console.log(`📩 Message reçu de ${message.from}: ${message.body}`);

  // Gestion des commandes
  if (message.body.startsWith('!')) {
    const command = message.body.slice(1).trim().toLowerCase();

    switch (command) {
      case 'help':
        client.sendMessage(
          message.from,
          `📜 *Liste des commandes disponibles :*\n
          - !help : Voir la liste des commandes
          - !info : Informations sur le bot
          - !ping : Vérifier si le bot fonctionne\n`
        );
        break;

      case 'info':
        client.sendMessage(
          message.from,
          '🤖 *AI Bot WhatsApp* \nCréé pour automatiser vos réponses sur WhatsApp.'
        );
        break;

      case 'ping':
        client.sendMessage(message.from, '🏓 Pong ! Le bot fonctionne.');
        break;

      default:
        client.sendMessage(
          message.from,
          '❓ Commande inconnue. Tapez !help pour voir la liste des commandes.'
        );
    }
  }

  // Réponses automatiques basées sur des mots-clés
  if (message.body.toLowerCase() === 'bonjour') {
    client.sendMessage(message.from, '👋 salutations ! Comment puis-je vous aider ?');
  } else if (message.body.toLowerCase() === 'au revoir') {
    client.sendMessage(message.from, '👋 sayonara !');
  }
});

// Événement : Gestion des erreurs
client.on('error', (error) => {
  console.error('❌ Une erreur est survenue :', error);
});

// Initialisation du client
client.initialize();
