module.exports = async (client) => {
    console.log(`Listo en ${client.guilds.cache.size} servidores, por un total de ${client.users.cache.size} usuarios`);

    client.user.setActivity(client.config.discord.activity);
};