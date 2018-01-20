'use strict';

const webpack = require('webpack');
const utils = require('./utils');

const { NODE_ENV } = utils;

const config = {
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.[hash:8].js'
  },
  performance: {
    hints: NODE_ENV === 'production' ? 'warning' : false,
    assetFilter(assetFilename) {
      return assetFilename.endsWith('.js');
    }
  },
  resolve: {
    // modulesDirectories: ['node_modules', 'public/bower-components'],
    // alias: {}
    extensions: ['.js', '.json'],
  },
  module: {
    noParse: [/jquery$/], // 不解析某些模块
    rules: [{
      test: /\.(js|jsx)$/,
      use: ['happypack/loader?id=Babel'],
      include: [utils.resolve('client', 'js')],
      exclude: file => !!file.match(/node_modules/)
    }, {
      test: /\.(ico|png|jpe?g|gif|svg)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 30000,
          name: '/images/[name].[hash:8].[ext]'
        }
      }]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      include: [utils.resolve('public', 'fonts')],
      use: [{
        loader: 'file-loader',
        options: {
          name: '/fonts/[name].[hash:8].[ext]'
        }
      }]
    }, {
      test: /\.pug$/,
      use: ['pug-loader']
    }]
  },
  //插件
  plugins: [
    // new webpack.ProvidePlugin({
    // }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // 全局属性
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    })
  ],
  target: 'web'
};

module.exports = config;
