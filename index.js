const login = require("facebook-chat-api");
const fs = require("fs");
const axios = require("axios");
const cryptoRandomString = require('crypto-random-string');
var random_useragent = require('random-useragent');
var jsonfile = require('jsonfile');
var tcpp = require('tcp-ping');
//======================================================

/*login({email: "viwox34680@laklica.com", password: "0612204156"}, (err, api) => {
    if(err) return console.error(err);
    console.log("===== LOGIN SUCCESS =====\n");
fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
});*/

//======================================================
console.log("[OK] Bot is running success");
async function sendsms(phonenumber,count,service) {
	await axios.get('http://198.98.50.123:5555/?key=pieapple&phonenumber='+phonenumber+'&count='+count+'&service='+service)
	.then(function (response) {
		console.log('Attack'+ response.data[0].massage);
	}) .catch(function (error) {
		console.log('Attack'+ error.data);
	});	
}
login({ appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8')) }, (err, api) => {
    if (err) return console.error(err);

    api.setOptions({ listenEvents: true });

    var stopListening = api.listenMqtt((err, event) => {
        if (err) return console.error(err);

        switch (event.type) {
            case "message":
                // if (event.isGroup == true) {
                var body = event.body.split(' ');
                if (event.body === '!help') {
                    var d = new Date();
                    api.sendMessage({
                        body: "คำสั่งทั้งหมด!!\n✖ 𝘼𝙡𝙡 𝙘𝙤𝙢𝙢𝙖𝙣𝙙 ✖➤ \n➤ !ping\n➤ !speed\n➤ !covid\n➤ !myid\n➤ !spam [คำ] [จำนวน]\n➤ !spamtag [จำนวน] [@เพื่อน]\n➤ !sms [เบอร์] [จำนวน] [ais | monomax]\n➤ !addword [คำถาม] | [คำตอบ]\n➤ !removeword [คำถาม]\n➤ !setemoji [อิโมจิ]\n━━━━━━━━━\n𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟱.𝟬.𝟬\nTime : " + d.toLocaleTimeString() + "\n𝗘𝗱𝗶𝘁 𝗕𝘆 : 𝗙𝗲𝗲𝘇𝗶𝗮𝗹 ",
                        mentions: [{
                            tag: "Feezial",
                            id: "100011409407326",
                        }],
                    }, event.threadID);
                    api.setMessageReaction("😍", event.messageID)
                } else if (event.body === '!ping') {
                    api.sendMessage("Pong!", event.threadID);
                    api.setMessageReaction("😍", event.messageID)
                } else if (event.body === '!test') {
                    var http = require('http');
                    api.sendMessage("tooekwporkf!", event.threadID);
                    api.setMessageReaction("😍", event.messageID)
                }
                 else if (body['0'] === '!spam') {
                    if (body['1'] == undefined) {
                        api.sendMessage("วิธีใช้งาน\n!spam [คำ] [จำนวน]\nเช่น !spam ไอ้คนน่ารัก 5", event.threadID);
                    } else if (body['2'] > 5) {
                        api.sendMessage("กรุณากรอกจำนวนน้อยกว่า 5", event.threadID);
                    } else {
                        for (var i = 0; i < body['2']; i++) {
                            api.sendMessage(body['1'], event.threadID);
                        }
                        api.setMessageReaction("😍", event.messageID)
                    }
                } else if (body['0'] === '!sms') {
                    var services = ['ais','monomax','random'];
					var phonenumber = body['1'];
					var count = body['2'];
					var service = body['3'];
					if (phonenumber == undefined | phonenumber == ''){
						api.sendMessage("กรุณาใส่เบอร์", event.threadID);
						api.setMessageReaction("😠",event.messageID)
					} else if (phonenumber.length != 10) {
						api.sendMessage("กรุณาใส่เบอร์ให้ถูกต้อง", event.threadID);
						api.setMessageReaction("😠",event.messageID)
					} else if (count == '' | count == undefined | count < 0 | count > 50) {
						api.sendMessage("กรุณาใส่จำนวนต่ำกว่า 50", event.threadID);
						api.setMessageReaction("😠",event.messageID)
					} else if (service == '' | service == undefined | !services.includes(service)) {
						api.sendMessage("กรุณาใส่ " + services , event.threadID);
						api.setMessageReaction("😠",event.messageID)
					} else {
						sendsms(phonenumber,count,service);
						api.sendMessage("กำลังส่งข้อความไปที่\nเบอร์: " + phonenumber + '\nจำนวน: '+ count + ' ข้อความ\nบริการ: '+ service, event.threadID);
						api.setMessageReaction("😆",event.messageID);
					}
				}
                else if (event.body == "!myid") {
                    api.sendMessage("senderID ของคุณคือ\n" + event.senderID, event.threadID);
                    api.setMessageReaction("😆", event.messageID)
                }
                 else if (event.body == "!covid") {
                    axios({
                        method: 'get', 
                        url: 'https://covid19.th-stat.com/api/open/today',
                    }).then(function (response) {
                        api.sendMessage("รายงานโควิดวันนี้ !\nทั้งหมด : " + response.data.Confirmed + " \nเสียชีวิต : " + response.data.Deaths + "\nผู้ติดใหม่ : " + response.data.NewConfirmed + "\nล่าสุด : " + response.data.UpdateDate, event.threadID);
                        api.setMessageReaction("😍", event.messageID)
                    })
                } 
                else if (body['0'] == "!setemoji") {
                    if (body['1'] == undefined) {
                        api.sendMessage("วิธีใช้งาน\n!setemoji [อิโมจิ]\nเช่น !emoji 💯", event.threadID);
                        api.setMessageReaction("😆", event.messageID)
                    } else {
                        api.changeThreadEmoji(body['1'], event.threadID, (err) => {
                            if (err) return api.sendMessage("ไม่สามารถเปลื่ยนเป็นemojiนี้ได้!!", event.threadID);
                            api.sendMessage("เปลื่ยนemojiเป็น" + body['1'] + "สำเร็จแล้ว", event.threadID);
                            api.setMessageReaction("😆", event.messageID)
                        });
                    }

                } 
                else if (body['0'] == "!nick") {
                    if (body['1']== undefined) {
                        api.changeNickname(body['1'], event.threadID, event.senderID, (err) => {
                            if (err) return console.error(err);
                        });
                    } else{
                        if(body['1'].startsWith("@")){
                            var keys = Object.keys(event.mentions);
                            api.changeNickname(body['0'], event.threadID, keys['1'], (err) => {
                                if (err) return console.error(err);
                                api.setMessageReaction("😆", event.messageID)
                            });
                        }else{
                            api.sendMessage("✖ ใส่แท็คให้ดีไอ้เหี้ย", event.threadID);
                            api.setMessageReaction("😆", event.messageID)
                        }
                
                    }

                } 
                else if (event.body == "!meme") {
                    axios({
                        method: 'get',
                        url: 'https://api.imgflip.com/get_memes' + Math.floor(Math.random() * 10),
                    }).then(function (response) {
                        var msg = {
                            body: "อะเอาไปมีมหล่อเท่ห์ๆ",
                            attachment: fs.createReadStream(__dirname + '/duck.png')
                        }
                        console.log(response.data.data[Math.floor(Math.random() * 10)].image)
                        api.sendMessage(msg, event.threadID);
                    })
                } else if (body['0'] == "!spamtag") {
                    var keys = Object.keys(event.mentions);
                    if (body['2'] == undefined) {
                        api.sendMessage("วิธีใช้งาน\n!spamtag [จำนวน] [@เพื่อน]\nเช่น !spamtag 5 @Chok teparit", event.threadID);
                    } else if (body['1'] > 10) {
                        api.sendMessage("กรุณากรอกจำนวนน้อยกว่า 10", event.threadID);
                    } else if (keys[0] == undefined) {
                        api.sendMessage("กรุณาแท๊กเพื่อน", event.threadID);
                    } else {
                        for (var i = 0; i < body['1']; i++) {
                            api.sendMessage({
                                body: body['2'] + ' ผมขอแท๊กเรียกหน่อยน้าา',
                                mentions: [{
                                    tag: body['2'],
                                    id: keys[0],
                                }],
                            }, event.threadID);
                        }

                        api.setMessageReaction("😍", event.messageID)
                    }
                } else if (event.body == "!slot") {
                    var emojis = [
                        '👽', '✊🏿', '🍎', '🍒', '🍓'
                    ];
                    emojiresult1 = emojis[Math.floor(Math.random() * emojis.length)];
                    emojiresult2 = emojis[Math.floor(Math.random() * emojis.length)];
                    emojiresult3 = emojis[Math.floor(Math.random() * emojis.length)];
                    emojiresult4 = emojis[Math.floor(Math.random() * emojis.length)];
                    if (emojiresult1 == emojiresult2 && emojiresult2 == emojiresult3 && emojiresult3 == emojiresult4) {
                        api.sendMessage("ผลเครื่องสล็อตแมชชีน :\n | " + emojiresult1 + " | " + emojiresult2 + " | " + emojiresult3 + " | " + emojiresult4 + " |", event.threadID, function (err) {
                            if (err) return api.sendMessage(err, event.threadID);
                            api.sendMessage("สุดยอดไปเลยยย", event.threadID);
                            console.log("WINNER JACKPOT");
                        });
                    } else {
                        api.sendMessage("ผลเครื่องสล็อตแมชชีน :\n | " + emojiresult1 + " | " + emojiresult2 + " | " + emojiresult3 + " | " + emojiresult4 + " |", event.threadID, function (err) {
                            if (err) return api.sendMessage(err, event.threadID);
                            api.sendMessage("ลองใหม่อีกสักตาดู", event.threadID);
                        });
                        console.log("[SLOT] SLOT is running");
                    }
                } else if (body['0'] == "!addword") {
                    var answer = event.body.split(' | ');
                    if (body['1'] == undefined) {
                        api.sendMessage("กรุณาใส่คำถาม", event.threadID);
                    } else if (answer['1'] == undefined) {
                        api.sendMessage("กรุณาใส่คำตอบ", event.threadID);
                    } else {
                        rawdata = fs.readFileSync('question.json');
                        question = JSON.parse(rawdata);
                        answerjson = question.filter(item => {
                            return item.question === body['1'];
                        })
                        if (answerjson[0] == undefined) {
                            question.push({ "question": body['1'], "answer": answer['1'] });
                            jsonfile.writeFile('question.json', question, { spaces: 2 }, function (err) {
                                if (err) return api.sendMessage("ไม่สามารถเพิ่มคำที่มี emoji ได้!!", event.threadID);
                                api.sendMessage("ขอบคุณที่สอนนะ!!", event.threadID);
                            });
                        } else {
                            api.sendMessage("มีคำถามนี้อยู่แล้ว!!", event.threadID);
                        }
                    }
                } else if (body['0'] == "!removeword") {
                    if (body['1'] == undefined) {
                        api.sendMessage("กรุณาใส่คำถามที่ต้องการลบ!!", event.threadID);
                    } else {
                        rawdata = fs.readFileSync('question.json');
                        question = JSON.parse(rawdata);
                        result = 0;
                        for (i = 0; i < question.length; i++) {
                            if (question[i].question == body['1']) {
                                question.splice(i, 1);
                                result++;
                            }
                        }
                        jsonfile.writeFile('question.json', question, { spaces: 2 }, function (err) {
                            if (err) return api.sendMessage(err, event.threadID);
                            if (result > 0) {
                                api.sendMessage("ลบคำถามสำเร็จแล้ว!!", event.threadID);
                            } else {
                                api.sendMessage("ไม่พบคำถามนี้!!", event.threadID);
                            }
                        });
                    }
                } else {
                    rawdata = fs.readFileSync('question.json');
                    question = JSON.parse(rawdata);
                    answerjson = (question.filter(item => {
                        return item.question === event.body;
                    }))
                    if (answerjson[0] == undefined) {
                        console.log(event);
                    } else {
                        api.sendMessage(answerjson[0].answer, event.threadID);
                    }
                }
                // }else{
                // 	api.sendMessage("ตอบเฉพาะกลุ่มเท่านั้นจ้าา", event.threadID);
                // }
                api.markAsRead(event.threadID);
                break;
            case "event":
                break;
        }
    });
});