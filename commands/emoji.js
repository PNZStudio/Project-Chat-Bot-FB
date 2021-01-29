exports.run = (event, args, api) => {

    api.setMessageReaction(":love:", event.messageID);

    if(!args['0']){
        api.sendMessage("➤ p!emoji <emoji>",event.ThreadID);
    }else{
        api.changeThreadEmoji(args['0'], event.threadID, (err) => { 
            if (err) return console.error(err); 
        });
    
    }

}