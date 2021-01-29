exports.run = (event, args, api) => {

    // var msg = {
    //     body: "HI",
    //     attachments:[{
    //         type: 'share',
    //         url: 'https://external.xx.fbcdn.net/safe_image.php?d=AQE8VTNmAH4JKlN0&w=960&h=540&url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0a%2F4d%2Fcb%2F0a4dcb92fa2d3c601b58d72720d6bec4.jpg&_nc_cb=1&_nc_hash=AQHDKbSCWGmRdxyG'
    //     }]    

    // }
    api.setMessageReaction(":like:", event.messageID);
    // api.sendMessage(msg,event.threadID);
    var keys = Object.keys(event.mentions);

    console.log(keys['0']);
}
