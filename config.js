const { useSingleFileAuthState } = require("@adiwajshing/baileys");

const config = {
  // Configuration des sessions
  session: {
    authState: useSingleFileAuthState('./auth_info.json'), // Emplacement du fichier de session
  },

  // Détails du bot
  bot: {
    name: "AIbot", // Nom de votre bot
    prefix: "!", // Préfixe pour les commandes
    ownerNumber: "237620934302@s.whatsapp.net", // Votre numéro WhatsApp
  },

  // Paramètres de message
  messages: {
    welcome: "Bienvenue sur AIbot ! Utilisez !help pour voir les commandes.",
    help: `
Liste des commandes disponibles :
1. !ping - Vérifiez si le bot fonctionne
2. !info - Obtenez des informations sur le bot
3. !help - Affiche cette liste
`,
  },

  // Autres options
  options: {
    autoReply: true, // Active/désactive les réponses automatiques
    adminsOnly: false, // Si activé, seules les commandes des administrateurs de groupe seront traitées
  },
};

module.exports = config;
