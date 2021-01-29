exports.run = (event, args, api) => {

    api.setMessageReaction(":like:", event.messageID);
    if(args['0']){
        if(args['0']){
            if(args['0'].startsWith("@")){

                var nick = "";
                for (let index = 1; index < 100; index++) {
                    if(args[index]){
                        var nick = nick +" "+args[index];
                    }else{
                        break;
                    }
                }
                var keys = Object.keys(event.mentions);
                api.setMessageReaction(":love:", event.messageID);
                api.changeNickname(nick, event.threadID, keys['0'], (err) => {
                    if (err) return console.error(err);
                });
            }else{
                api.setMessageReaction(":angry:", event.messageID);
                api.sendMessage("✖ ใส่แท็คให้ดีไอ้เหี้ย", event.threadID);
            }

        }else{
            api.setMessageReaction(":angry:", event.messageID);
            api.sendMessage("➤ p!nick <@user> <nick name>", event.threadID);
        }
    }else{
        api.setMessageReaction(":angry:", event.messageID);
        api.sendMessage("➤ p!nick <@user> <nick name>", event.threadID);
    }
}
