exports.run = (event, args, api) => {

    var helpmsg = "✖ 𝘼𝙡𝙡 𝙘𝙤𝙢𝙢𝙖𝙣𝙙 ✖\n➤ p!say <msg>\n➤ p!ping\n➤ p!spam <msg> <amount>\n\n𝙋𝙤𝙬𝙚𝙧 𝙗𝙮 ♥ 𝙋𝙝𝙖𝙞𝙬𝙖𝙣";
    api.sendMessage(helpmsg, event.threadID);

}
