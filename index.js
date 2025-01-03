```
const { Client, MessageMedia } = require('whatsapp-web.js');
const client = new Client();

// Configuration du bot
const phoneNumber = '237620934302'; // Remplacez par votre numéro de téléphone
const messageWelcome = 'Bienvenue sur AI bot !';

// Événement "ready" pour indiquer que le bot est prêt
client.on('ready', () => {
  console.log('Le bot est prêt !');
});

// Événement "message" pour gérer les messages reçus
client.on('message', message => {
  console.log(`Message reçu de ${message.from} : ${message.body}`);

  // Réponse automatique
  if (message.body === 'Bonjour') {
    client.sendMessage(message.from, 'salutations ! on dit quoi ?');
  } else if (message.body === 'Au revoir') {
    client.sendMessage(message.from, 'a plus ! sayonara !');
  } else {
    client.sendMessage(message.from, 'Je comprends rien faut répéter. Pouvez-vous réessayer ?');
  }
});

// Événement "error" pour gérer les erreurs
client.on('error', error => {
  console.error('Erreur :', error);
});

// Connexion au serveur WhatsApp
client.initialize();
```
