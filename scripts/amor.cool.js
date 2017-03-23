Amor_IMG = [
    "http://oawwrud0t.bkt.clouddn.com/IMG_0035.JPG",
    "http://oawwrud0t.bkt.clouddn.com/IMG_1226.JPG",
    "http://oawwrud0t.bkt.clouddn.com/IMG_3259.JPG",
    "http://oawwrud0t.bkt.clouddn.com/IMG_3300.JPG",
    "http://oawwrud0t.bkt.clouddn.com/IMG_1228.JPG",
    "http://oawwrud0t.bkt.clouddn.com/IMG_3419.JPG"
];
module.exports = function (robot) {
    robot.hear(/(.*)最聪明(.*)/, function (res) {
        res.send('肯定不是rainstop,一定是Amor');
    });

    robot.hear(/qr (.*)/, function (res) {
        test = res.match[1];
        res.send("https://sp0.baidu.com/5aU_bSa9KgQFm2e88IuM_a/micxp1.duapp.com/qr.php?value=amor" + test);
    });

    robot.hear(/(.*)最帅(.*)/, function (res) {
        res.send('最帅的是Amor' + "  " + res.random(Amor_IMG));
        res.http(res.random(Amor_IMG)).get(function (err, res, body) {
            if (err || res.statusCode !== 200) {
                res.send(err)
            } else {
                res.send(JSON.parse(body))
            }
        });
    });
};