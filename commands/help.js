module.exports = (client, message) => {
  client.sendMessage(
    message.from,
    `📜 *Liste des commandes disponibles :*\n
    - !help : Voir la liste des commandes
    - !info : Informations sur le bot
    - !ping : Vérifier si le bot fonctionne\n`
  );
};
