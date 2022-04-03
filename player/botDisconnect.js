module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - ¡La música se detuvo porque me desconectaron del canal!`);
};