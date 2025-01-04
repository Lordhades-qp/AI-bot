const logMessage = require('./utils/logger');

client.on('message', (message) => {
  logMessage(message); // Utilisation du logger
});
