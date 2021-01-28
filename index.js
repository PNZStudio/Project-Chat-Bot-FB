const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);
    
    api.setOptions({
        selfListen: true,
        logLevel: "silent"
    });
    console.log("[OK] Bot is running");
    
    var stopListening = api.listenMqtt((err, event) => {
        if(err) return console.error(err);
        var prefix = "p!";
        var msgcommand = event.body;
        var pcmd = msgcommand.split(' ');
        var helpmsg = "Phaiwan BOT \n============\n\np!say <msg>"

        switch(event.type) {
            case "message":
                if(pcmd['0'] === prefix+"help"){
                    api.sendMessage(helpmsg, event.threadID);
                }
        }
    });

});
