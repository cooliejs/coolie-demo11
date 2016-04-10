/**
 * 文件描述
 * @author ydr.me
 * @create 2016-04-09 00:07
 */


describe('square.js', function () {
    // 模块加载器配置
    coolie.config({
        base: coolie.dirname
    }).use('test/main.js');

    var square = null;

    beforeAll(function (done) {
        // 模块加载完毕之后再进行单元测试
        coolie.callback(function (exports) {
            square = exports.square;
            done();
        });
    });

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
