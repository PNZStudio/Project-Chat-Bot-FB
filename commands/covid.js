exports.run = (event, args, api) => {
    const axios = require('axios');
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    
    axios.get('https://covid19.th-stat.com/api/open/today')
    .then(function (response) {
        var msg = `❗รายงาน COVID❗\n\nติดเชื้อทั้งหมด : ${numberWithCommas(response.data.Confirmed)}\nผู้เสียชีวิต : ${numberWithCommas(response.data.Deaths)}\nติดเชื้อรายใหม่ : ${numberWithCommas(response.data.NewConfirmed)}\nเวลา : ${response.data.UpdateDate}`;
        api.sendMessage(msg,event.threadID);
        console.log(response.data.Confirmed);
    })
  
}