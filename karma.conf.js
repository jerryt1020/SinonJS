// Karma configuration
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['sinon-stub-promise', 'mocha', 'sinon', 'chai'],

        'plugins': [
            'karma-mocha',
            'karma-sinon',
            'karma-chai',
            'karma-sinon-stub-promise',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-mocha-reporter',
            'karma-coverage'
        ],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'TypeScripts/app.module.js',
            {pattern: 'TypeScripts/**/*.js', watched: false},
            {pattern: 'Test/**/*.spec.js', watched: false},
            {pattern: 'Example/**/*.js', watched: false}
        ],
        exclude: [],
        preprocessors: {
            'TypeScripts/**/*.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'Test' +
            'Test_Report/Unit/Coverage/',

            instrumenterOptions: {
                istanbul: { noCompact: true }
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots','coverage'],
        // reporter options
        mochaReporter: {
            colors: {
                success: 'blue',
                info: 'bgGreen',
                warning: 'cyan',
                error: 'bgRed'
            },
            symbols: {
                success: '+',
                info: '#',
                warning: '!',
                error: 'x'
            }
        },

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
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        }
    })
};
