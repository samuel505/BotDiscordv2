module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - No ha proporcionado una respuesta válida... ¡Envíe el comando de nuevo!`);
};