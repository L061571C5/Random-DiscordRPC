const DiscordRPC = require('discord-rpc');
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const random = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '{', '}', '[', ']', 'ᔑ', 'ʖ', 'ᓵ', '↸', 'ᒷ', '⎓', '⊣', '⍑', '╎', '⋮', 'ꖌ', 'ꖎ', 'ᒲ', 'リ', '𝙹', '!', '¡', 'ᑑ', '∷', 'ᓭ', 'ℸ', ' ̣ ', '⚍', '⍊', '∴', '/', '|', '|', '⨅'];
async function setActivity() {
    rpc.setActivity({
        details: randomProperty(),
        state: randomProperty(),
        startTimestamp: new Date(),
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
    }, 100);
});

function randomProperty() {
    return `${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}${random[Math.floor(Math.random() * random.length)]}`
};

rpc.login({ clientId: '806211605326594079' }).catch(console.error).then(() => {
    setActivity();
    setInterval(() => {
        setActivity();
    }, 100)
})