/**
 * 计算圆的面积、周长
 * @author ydr.me
 * @create 2016-04-08 23:35
 */


define(function (require, exports, module) {
    /**
     * 圆的面积
     * @param radius {Number} 半径
     * @returns {number}
     */
    exports.getArea = function (radius) {
        return Math.PI * radius * radius;
    };


    /**
     * 圆的周长
     * @param radius {Number} 半径
     * @returns {number}
     */
    exports.getCircumference = function (radius) {
        return 2 * Math.PI * radius;
    };
});