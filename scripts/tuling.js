var TULING = require('tuling');
var tuling = new TULING({ key: '44674ef4014542909416ad050536c340' });
module.exports = function (robot) {
    robot.hear(/(.*)/, function (res) {
        var info = res.match[0];
        console.log(info);
        tuling.send({
            userid: 1,
            info: info,
            loc: '上海市'
        }).then(function (result) {
            res.send(result.text);
        });
    });
}