"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNumber = isNumber;
exports.isMobile = isMobile;
exports.isIdCard = isIdCard;
exports.isMobileCaptcha = isMobileCaptcha;
exports.currency = currency;
exports.toNumber = toNumber;
exports.parseParam = parseParam;
exports.numberFormat = numberFormat;
/**
 @description: 通用函数
 @date: 2018/6/7
 @author: 雷利(Rayleight@baie.com.cn)
 */

Date.prototype.Format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return fmt;
};

/**
 * 判断字符串是否为纯数字
 * @param str
 * @returns {boolean}
 */
function isNumber(str) {
    return (/^\d+$/.test(str)
    );
}

/**
 * 判断是不是手机号
 * @param number
 * @returns {boolean}
 */
function isMobile(number) {
    return (/^1\d{10}$/.test(number + '')
    );
}

/**
 * 判断是不是身份证号
 * @param number
 * @returns {boolean}
 */
function isIdCard(number) {
    return (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(number + '')
    );
}

/**
 * 判断是不是手机验证码
 * @param number
 * @returns {boolean}
 */
function isMobileCaptcha(number) {
    return (/^\d{6}$/.test(number + '')
    );
}

/**
 * 转换为价格格式
 * @param number
 * @returns {*}
 */
function currency(number) {
    if(!isNaN(number)){
        number=parseFloat(number)
    }
    if (number && number.toFixed) {
        return number.toFixed(2);
    }
    return "0.00";
}

/**
 * 返回数字
 * @param number
 * @returns {*}
 */
function toNumber(number) {

    let num = parseFloat(number);
    if (isNaN(num)) {
        return 0;
    }
    return num;
}

/**
 * 对象转换为url参数形式的字符串
 * @param obj
 * @returns string
 */
function parseParam(obj) {
    try {
        return Object.keys(obj).map(k => `${k}=${encodeURIComponent(obj[k])}`).join("&");
    } catch (e) {
        return "";
    }
}

/**
 * 数字千分位分割
 * @param num
 * @param toFixed - 最多几位小数
 * @returns {*}
 */
function numberFormat(num, toFixed) {
    if (toFixed && num && num.toFixed) {
        //这里 可以刻意 != 的，用于判断num是否为整数
        if (parseInt(num, 10) != num) {
            num = num.toFixed(toFixed);
        }
    }
    try {
        if (toFixed === 0) {
            num = parseInt(num, 10);
        } else {}
    } catch (e) {}

    if (num && num.toString) {
        let num_str = num.toString();
        let num_split = num_str.split('.'); //针对有小数的情况
        let num_1 = num_split[0].replace(/(?=(?!^)(\d{3})+$)/g, ','); //整数部分
        if (num_split.length > 1) {
            num_1 += "." + num_split[1];
        }
        return num_1;
    }
    return "0";
}