'use strict';

// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function makeWebpackConfig () {
  var config = {};

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
  config.entry = {
    app: './src/app/app.js'
  };

  config.output = {
    path      : __dirname + '/dist',
    publicPath: 'http://localhost:8080/',
    filename  : '[name].bundle.js',
  };

  config.module = {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
         test: /\.scss$/,
         loader: "style!css!sass",
         exclude: [
             /node_modules/
         ]
       },
      {
        // ASSET LOADER
        // Reference: https://github.com/webpack/file-loader
        // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
        // Rename the file using the asset hash
        // Pass along the updated reference to your code
        // You can add here any file extension you want to get copied to your output
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
      {
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  };

  config.plugins = [];

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      inject: 'body'
    })
  )

  config.devServer = {
    contentBase : './src/public',
    stats       : 'minimal'
  };

  return config;
}();
