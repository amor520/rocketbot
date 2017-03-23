var TULING = require('tuling');
var tuling = new TULING({ key: '44674ef4014542909416ad050536c340' });
module.exports = function (robot) {
    robot.hear(/(.*)/, function (res) {
        var info = res.match[0];
        tuling.send({
            userid: 1,
            info: info,
            loc: '上海市'
        }).then(function (result) {
            res.send(result.text);
            res.send(result.url);
            // if (result.url) {
            //     res.http(result.url).get(function (err, res, body) {
            //         if (err || res.statusCode !== 200) {
            //             res.send(err)
            //         } else {
            //             res.send(JSON.parse(body))
            //         }
            //     });
            // }
        });
    });
}