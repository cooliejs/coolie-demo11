/**
 * 文件描述
 * @author ydr.me
 * @create 2016-04-09 00:07
 */


describe('circle.js', function () {
    // 模块加载器配置
    coolie.config({
        base: coolie.dirname
    }).use('test/app-main.js');

    var circle = null;

    beforeAll(function (done) {
        // 模块加载完毕之后再进行单元测试
        coolie.callback(function (exports) {
            circle = exports.circle;
            done();
        });
    });

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
