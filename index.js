const fs = require(fs);
const login = require(facebook-chat-api);

login({appState JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) = {
    if(err) return console.error(err);
    api.setOptions({
        selfListen true,
        logLevel silent
    });
    console.log([OK] Bot is running);
    
    var stopListening = api.listenMqtt((err, event) = {
        if(err) return console.error(err);
        var prefix = p!;
        var msgcommand = event.body;
        var helpmsg = '✖ 𝘼𝙡𝙡 𝙘𝙤𝙢𝙢𝙖𝙣𝙙 ✖n➤ p!say msgn➤ p!pingn➤ p!spam msg amountnn𝙋𝙤𝙬𝙚𝙧 𝙗𝙮 ♥ 𝙋𝙝𝙖𝙞𝙬𝙖𝙣';

        switch(event.type) {
            case message
                if(msgcommand.split(' ')['0'] === prefix+help){
                    api.sendMessage(helpmsg, event.threadID);
                }
        }
    });

});
