module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} ha sido añadido a la cola (**${playlist.tracks.length}** canciones) !`);
};