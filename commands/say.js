exports.run = (event, args, api) => {



    if(args['0']){
        if(args['1']){
            var messahe = "";
            for (let index = 1; index < 100; index++) {
                if(args[index]){
                    var messahe = messahe+" "+args[index];
                }else{
                    break;
                }
            }
            if(args['0'] > 5){
                api.sendMessage("✖ อย่าหาใช้มากกว่า 5", event.threadID);
                api.setMessageReaction(":dislike:", event.messageID);

            }else{
                api.setMessageReaction(":love:", event.messageID);
                for (let index = 0; index < args['0']; index++) {
                    api.sendMessage(messahe, event.threadID);
                }
        
            }    
        }else{
            api.sendMessage("➤ p!say <amount> <message>", event.threadID);
            api.setMessageReaction(":dislike:", event.messageID);

        }
    }else{
        api.sendMessage("➤ p!say <amount> <message>", event.threadID);
        api.setMessageReaction(":dislike:", event.messageID);

    }
}
