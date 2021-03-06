// Karma configuration
// Generated on Tue Jul 18 2017 14:21:40 GMT+0800 (中国标准时间)

module.exports = function(config) {
  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js':'coverage'
    },

    coverageReporter: {
      reporters: [
        { type: 'lcovonly', dir: 'coverage/' },
        { type: 'html', dir: 'coverage/' },
        { type: 'cobertura', dir: 'coverage/' }
      ]
    },
    
    //https://npmjs.org/browse/keyword/karma-reporter
    //'coverage','kjhtml' 这两个覆盖率报告
    reporters: ['progress','coverage','kjhtml'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'ChromeCanary'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  }

  console.log("evn:"+process.env.TRAVIS)
  if(process.env.TRAVIS){
    configuration.browsers = ['Chrome_travis_ci'];
  }else{
    configuration.browsers =['Chrome'];
  }

  config.set(configuration);
}
