exports.run = (event, args, api) => {

    api.setMessageReaction(":like:", event.messageID);

    var colors = {
        1: "null",
        2: "44bec7",
        3: "ffc300",
        4: "fa3c4c",
        5: "d696bb",
        6: "6699cc",
        7: "13cf13",
        8: "ff7e29",
        9: "e68585",
        10: "7646ff",
        11: "20cef5",
        12: "67b868",
        13: "d4a88c",
        14: "ff5ca1",
        15: "a695c7",
    }

    if(!args['0']){

    }else{
        api.changeThreadColor("#"+colors[args['0']], event.threadID, (err) => {
            if(err) return console.error(err);
        });
    }

}
