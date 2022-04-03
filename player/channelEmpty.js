module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - ¡La música se detuvo porque no hay más miembros en el canal de voz!`);
};