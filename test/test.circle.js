/**
 * test circle
 * @author ydr.me
 * @create 2016-04-09 00:07
 */


var circle = require('../src/circle');

describe('circle.js', function () {
    // 圆面积
    it('.getArea', function () {
        // 半径为 1 的圆
        expect(circle.getArea(1)).toEqual(Math.PI);
    });

    // 圆周长
    it('.getCircumference', function () {
        // 半径为 1 的圆
        expect(circle.getCircumference(1)).toEqual(2 * Math.PI);
    });
});
