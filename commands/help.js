exports.run = (event, args, api) => {
    var commands = {
        cmd: [{
            1:"a",
            2:"a"
        }]
    }
    var helpmsg = "✖ 𝘼𝙡𝙡 𝙘𝙤𝙢𝙢𝙖𝙣𝙙 ✖\n➤ p!say <msg> <amount>\n➤ p!ping\n➤ p!emoji <emoji>\n➤p!color <1-15>\n➤p!nick <nick name> <@user>\n\n𝙋𝙤𝙬𝙚𝙧 𝙗𝙮 ♥ 𝙋𝙝𝙖𝙞𝙬𝙖𝙣";
    api.setMessageReaction(":like:", event.messageID);
    api.sendMessage(helpmsg, event.threadID);
}
