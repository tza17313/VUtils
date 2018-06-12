/**
 @description: 测试用例
 @date: 2018/6/7
 @author: 雷利(Rayleight@baie.com.cn)
 */

import * as common from '../lib/common'

test('isNumber for 3', () => {
    expect(common.isNumber(3)).toBe(true);
});
test('isNumber for "3"', () => {
    expect(common.isNumber("3")).toBe(true);
});
test('isNumber for "3s"', () => {
    expect(common.isNumber("3s")).toBe(false);
});
test('isNumber for null', () => {
    expect(common.isNumber(null)).toBe(false);
});
test('isNumber for undefined', () => {
    expect(common.isNumber(undefined)).toBe(false);
});
test('isNumber for {}', () => {
    expect(common.isNumber({})).toBe(false);
});

test('Date format for yyyy-MM-dd hh:mm:ss', () => {
    let temp=new Date(2018,6,6,6,6,6)
    expect(temp.Format("yyyy-MM-dd hh:mm:ss")).toMatch("2018-07-06 06:06:06")
});

test('isMobile for 13456789098', () => {
    expect(common.isMobile('13456789098')).toBe(true);
});

test('isMobile for 134567890981', () => {
    expect(common.isMobile('134567890981')).toBe(false);
});

test('isMobile for "xxx"', () => {
    expect(common.isMobile('xxx')).toBe(false);
});

test('isIdCard for "330988199001013212"', () => {
    expect(common.isIdCard('330988199001013212')).toBe(true);
});

test('isIdCard for "33098819900101321X"', () => {
    expect(common.isIdCard('33098819900101321X')).toBe(true);
});

test('isIdCard for "33098819900101321x"', () => {
    expect(common.isIdCard('33098819900101321x')).toBe(true);
});

test('isIdCard for "33098819900101321c"', () => {
    expect(common.isIdCard('33098819900101321c')).toBe(false);
});

test('isIdCard for "sdsdsdsdsd"', () => {
    expect(common.isIdCard('sdsdsdsdsd')).toBe(false);
});


test('isMobileCaptcha for "123456"', () => {
    expect(common.isMobileCaptcha('123456')).toBe(true);
});

test('isMobileCaptcha for "1234567"', () => {
    expect(common.isMobileCaptcha('1234567')).toBe(false);
});

test('isMobileCaptcha for "12345"', () => {
    expect(common.isMobileCaptcha('12345')).toBe(false);
});

test('isMobileCaptcha for "xxxxxx"', () => {
    expect(common.isMobileCaptcha('xxxxxx')).toBe(false);
});

test('currency for 19', () => {
    expect(common.currency(19)).toMatch("19.00");
});
test('currency for 19.33333', () => {
    expect(common.currency(19.33333)).toMatch("19.33");
});
test('currency for 19.33933', () => {
    expect(common.currency(19.33933)).toMatch("19.34");
});
test('currency for null', () => {
    expect(common.currency(null)).toMatch("0.00");
});
test('currency for "19.2223"', () => {
    expect(common.currency("19.2223")).toMatch("0.00");
});