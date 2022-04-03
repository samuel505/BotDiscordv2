module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - ¡No estás en un canal de voz!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - ¡No estás en el mismo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - ¡No hay música reproduciéndose actualmente!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - ¡Especifique un filtro válido para habilitar o deshabilitar!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - El filtro no existe, prueba por ejemplo (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Estoy **agregando** el filtro a la música, espera... Nota: cuanto más larga sea la música, más tardará.`);
          
        else message.channel.send(`${client.emotes.music} - Estoy **deshabilitando** el filtro de la música, espera... Nota: cuanto más se reproduzca la música, más tardará.`);
    },
};