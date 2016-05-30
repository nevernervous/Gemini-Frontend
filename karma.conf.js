var styleLoad = 'style!css?importLoaders=1!font?format[]=truetype&format[]=woff&format[]=embedded-opentype';
var webpackConfig = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.scss$/, loader: styleLoad + '!sass?sourceMap' },
      { test: /\.css$/, loader: styleLoad },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]' }
    ],
    postLoaders: [{
      test: /\.js/,
      exclude: /(test|node_modules|bower_components)/,
      loader: 'istanbul-instrumenter'
    }]
  },
  resolve: {
    modulesDirectories: [
      "",
      "client",
      "node_modules"
    ]
  }
};

module.exports = function(config) {
  config.set({

    files: [
      // all files ending in "test"
      'spec.bundle.js'
      // each file acts as entry point for the webpack configuration
    ],

    // frameworks to use
    frameworks: [ 'chai', 'mocha' ],

    preprocessors: {
      // only specify one entry point
      // and require all tests in there
      'spec.bundle.js': ['webpack']
    },

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'reports/coverage/'
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      noInfo: true
    },

    plugins: [
      require("karma-webpack"),
      require("istanbul-instrumenter-loader"),
      require("karma-chai"),
      require("karma-mocha"),
      require("karma-coverage"),
      require("karma-chrome-launcher"),
      require("karma-spec-reporter")
    ],

    // // start these browsers
    // // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome']

    // if true, Karma runs tests once and exits
    // singleRun: true

  });
};
