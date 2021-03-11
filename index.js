const clientId = '806211605326594079';
const DiscordRPC = require('discord-rpc');
DiscordRPC.register(clientId);
const stuff = require('./assets/assets.json')
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

async function setActivity() {
    rpc.setActivity({
        details: randomProperty(stuff.details),
        state: randomProperty(stuff.state),
        startTimestamp,
        largeImageKey: randomProperty(stuff.largeImage),
        largeImageText: randomProperty(stuff.largeImageText),
        instance: false,
    });
}

rpc.on('ready', () => {
    setActivity();

    // activity can only be set every 15 seconds
    setInterval(() => {
        setActivity();
    }, 15e3);
});
function randomProperty(obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};
rpc.login({ clientId }).catch(console.error);