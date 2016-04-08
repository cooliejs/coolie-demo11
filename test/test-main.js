/**
 * 文件描述
 * @author ydr.me
 * @create 2016-04-09 00:07
 */


describe('coolie-demo11 unit test', function () {
    // 模块加载器配置
    coolie.config({
        base: coolie.dirname
    }).use('test/app-main.js');


    // 圆
    describe('circle', function () {
        // 圆面积
        it('.getArea', function (done) {
            coolie.callback(function (exports) {
                exports = exports.circle;

                // 半径为 1 的圆
                expect(exports.getArea(1)).toEqual(Math.PI);
                done();
            });
        });

        // 圆周长
        it('.getCircumference', function (done) {
            coolie.callback(function (exports) {
                exports = exports.circle;

                // 半径为 1 的圆
                expect(exports.getCircumference(1)).toEqual(2 * Math.PI);
                done();
            });
        });
    });


    // 方形
    describe('square', function () {
        // 方形面积
        it('.getArea', function (done) {
            coolie.callback(function (exports) {
                exports = exports.square;

                // 边长为 1 的正方形
                expect(exports.getArea(1, 1)).toEqual(1);
                done();
            });
        });

        // 方形周长
        it('.getCircumference', function (done) {
            coolie.callback(function (exports) {
                exports = exports.square;

                // 边长为 1 的正方形
                expect(exports.getCircumference(1, 1)).toEqual(4);
                done();
            });
        });
    });
});
