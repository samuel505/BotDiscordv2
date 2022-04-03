module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title} ha sido añadido a la cola!`);
};