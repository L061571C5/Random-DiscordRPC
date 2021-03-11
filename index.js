const DiscordRPC = require('discord-rpc');
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();
const random = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '{', '}', '[', ']'];
async function setActivity() {
    rpc.setActivity({
        details: randomProperty(),
        state: randomProperty(),
        startTimestamp: startTimestamp,
        largeImageKey: 'dice',
        largeImageText: randomProperty(),
        instance: false,
    });
}

rpc.on('connected', () => {
    console.log(`Done!`)
    setActivity();
    setInterval(() => {
        setActivity();
    }, 150);
});

function randomProperty() {
    return `${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}`
};

rpc.login({ clientId: '806211605326594079' }).catch(console.error).then(() => {
    setActivity();
    setInterval(() => {
        setActivity();
    }, 15)
})