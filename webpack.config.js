var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const styleLoad = [
  'style',
  'css?importLoaders=1',
  'font?format[]=truetype&format[]=woff&format[]=embedded-opentype'
];

module.exports = {
  devtool: 'sourcemap',
  entry: {},
  module: {
    loaders: [
       { test: /\.(ttf|eot|otf|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file-loader' },
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.scss$/, loaders: [ ...styleLoad, 'sass?sourceMap'] },
       { test: /\.css$/, loaders: styleLoad },
       { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]' }
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
