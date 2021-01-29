exports.run = (event, args, api) => {

    api.setMessageReaction(":love:", event.messageID);
    if(!args['1']){
        api.sendMessage(args['0'], event.threadID);
    }else if(!args['0']){
        api.sendMessage("➤ p!say <msg> <amount>", event.threadID);
    }else{
        if(args['1'] > 5){
            api.sendMessage("✖ อย่าหาใช้มากกว่า 5", event.threadID);
        }else{
            for (let index = 0; index < args['1']; index++) {
                api.sendMessage(args['0'], event.threadID);
            }
    
        }
    }
}
