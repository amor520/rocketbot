/**
 * 图灵机器人:输入的信息没有被任何脚本捕获时，调用图灵机器人
 */
var TULING = require('tuling');
var tuling = new TULING({ key: '44674ef4014542909416ad050536c340' });
module.exports = function (robot) {
    robot.catchAll(/(.*)/, function (res) {
        var info = res.match[0];
        tuling.send({
            userid: 1,
            info: info,
            loc: '上海市'
        }).then(function (result) {
            res.send(result.text);
            res.send(result.url);
        });
    });
}