const logMessage = (message) => {
  console.log(`[${new Date().toISOString()}] Message de ${message.from}: ${message.body}`);
};

module.exports = logMessage;
