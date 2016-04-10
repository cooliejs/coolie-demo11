// Karma configuration
// Generated on Mon Nov 17 2014 14:46:48 GMT+0800 (中国标准时间)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        // 单元测试框架
        frameworks: ['jasmine'],


        client: {},


        // list of files / patterns to load in the browser
        files: [
            // 直接引入模块加载器
            './coolie.js',
            {
                // 加载 src 下的原始文件，但不直接引入，使用模块加载器引入
                pattern: './src/**',
                included: false
            },
            {
                // 加载 test 下的入口文件，但不直接引入，使用模块加载器引入
                pattern: './test/app-main.js',
                included: false
            },
            // 直接引入测试主文件
            './test/test.*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // 原始模块，需要测试覆盖率
            './src/**': ['coverage']
        },


        // optionally, configure the reporter
        // 覆盖率报告
        coverageReporter: {
            type: 'lcov',
            dir: './coverage/'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // 报告类型
        reporters: ['progress', 'coveralls', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,


        // plugins
        plugins: ['karma-*']
    });
};
