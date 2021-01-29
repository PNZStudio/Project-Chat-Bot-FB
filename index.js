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
        switch(event.type) {
            case "message":

                const args = event.body.slice(prefix.length).trim().split(/ +/g);
                let cmd = args.shift().toLowerCase();

                if (!event.body.startsWith(prefix)) return;

                try {

                    delete require.cache[require.resolve(`./commands/${cmd}.js`)];

                    let commandFile = require(`./commands/${cmd}.js`);
            
                    commandFile.run(event, args, api);
            
                } catch (e) {
            
                    console.log(e.stack);
            
                }
        }
    });

});
