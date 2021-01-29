exports.run = (event, args, api) => {

    api.setMessageReaction(":like:", event.messageID);
    api.sendTypingIndicator(event.threadID);

}
