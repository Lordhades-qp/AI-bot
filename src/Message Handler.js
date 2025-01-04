module.exports.handleIncomingMessage = (message) => {
    const text = message.message.conversation || '';
    if (text.toLowerCase() === 'bonjour') {
        return 'Salut ! Comment puis-je vous aider ?';
    } else if (text.toLowerCase() === 'bye') {
        return 'Au revoir !';
    }
    return 'Désolé, je ne comprends pas.';
};
