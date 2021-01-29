exports.run = (event, args, api) => {

    api.setMessageReaction(":like:", event.messageID);

    if(!args['0']){
        api.sendMessage("➤ p!nick <nick name> <@user>", event.threadID);
    }else if(!args['1']){
        api.changeNickname(args['0'], event.threadID, event.senderID, (err) => {
            if (err) return console.error(err);
        });

    }else{
        if(args['1'].startsWith("@")){
            var keys = Object.keys(event.mentions);
            api.changeNickname(args['0'], event.threadID, keys['0'], (err) => {
                if (err) return console.error(err);
            });
        }else{
            api.sendMessage("✖ ใส่แท็คให้ดีไอ้เหี้ย", event.threadID);
        }

    }
}
