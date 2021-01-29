exports.run = (event, args, api) => {
    const axios = require('axios');

    axios.get('https://covid19.th-stat.com/api/open/today')
    .then(function (response) {
        var msg = `รายงาน COVID!\nทั้งหมด : ${response.data.Confirmed}\nเสียชีวิต : ${response.data.Deaths}\nผู้ติดใหม่ : ${response.data.NewConfirmed}\nล่าสุด : ${response.data.UpdateDate}`;
        api.sendMessage(msg,event.threadID);
        console.log(response.data.Confirmed);
    })
  
}