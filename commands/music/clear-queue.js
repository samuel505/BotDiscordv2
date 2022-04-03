module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You'r¡No estás en un canal de voz!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - ¡No estás en un canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - ¡No hay música reproduciéndose actualmente!`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Solo hay una canción en la cola.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - ¡La cola acaba de ser **eliminada**!`);
    },
};