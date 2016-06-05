/**
 * test square
 * @author ydr.me
 * @create 2016-04-09 00:07
 */


var square = require('../src/square');

describe('square.js', function () {
    // 方形面积
    it('.getArea', function () {
        // 边长为 1 的正方形
        expect(square.getArea(1, 1)).toEqual(1);
    });

    //// 方形周长
    //it('.getCircumference', function () {
    //    // 边长为 1 的正方形
    //    expect(square.getCircumference(1, 1)).toEqual(4);
    //});
});
