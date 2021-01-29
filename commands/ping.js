exports.run = (event, args, api, tcpp) => {

    api.setMessageReaction(":cry:", event.messageID);

    tcpp.ping({ address: '157.240.13.35' }, function (err, data) {
        api.sendMessage(data['avg'].toFixed(2) + " ms!",event.threadID);
    });
}