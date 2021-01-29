exports.run = (event, args, api) => {
    var hellp = {
        1:"✖ 𝘼𝙡𝙡 𝙘𝙤𝙢𝙢𝙖𝙣𝙙 ✖",
        2:"➤ p!say <amount> <message>",
        3:"➤ p!ping",
        4:"➤ p!emoji <emoji>",
        5:"➤p!color <1-15>",
        6:"➤p!nick <@user> <nick name>",
        7:" ",
        8:"𝙋𝙤𝙬𝙚𝙧 𝙗𝙮 ♥ 𝙋𝙝𝙖𝙞𝙬𝙖𝙣",        
    };
    var help = "";
    for (let index = 1; index < 100; index++) {
        if(hellp[index]){
            var help = help+hellp[index]+"\n";
        }else{
            break;
        }
    }
    api.setMessageReaction(":like:", event.messageID);
    api.sendMessage(help, event.threadID);

}
