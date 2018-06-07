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
    expect(common.isNumber("3")).toBe(true);
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