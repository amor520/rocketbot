/**
 * 时间
 */
'use strict'
let moment = require('moment');

module.exports = function (robot) {
    /**
     * 获取当前时间
     */
    robot.respond(/(.*)(时间 || time || date || 日期 || 几点)(.*)/, function (res) {
        let date = moment().format('YYYY-MM-DD HH:mm:ss');
        res.send("当前时间: " + date);
    });

}