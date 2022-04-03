module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - ¡No se está reproduciendo música en este servidor!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - ¡No estás conectado en ningún canal de voz!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - No puedo unirme a su canal de voz, comprueba mis permisos.`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Algo salió mal
... Error : ${error}`);
    };
};
