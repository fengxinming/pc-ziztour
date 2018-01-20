'use strict';

const webpack = require('webpack');
const utils = require('../webpack/utils');

const { NODE_ENV } = utils;

const config = {
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  performance: {
    hints: NODE_ENV === 'production' ? 'warning' : false,
    assetFilter(assetFilename) {
      return assetFilename.endsWith('.js');
    }
  },
  resolve: {
    modulesDirectories: ['node_modules', 'public/bower-components']
  },
  module: {
    noParse: [ // 不解析某些模块
      /node_modules\/jquery/
    ],
    loaders: [{
      test: /\.pug$/,
      loader: 'pug'
    }]
  },
  //插件
  plugins: [
    // new webpack.ResolverPlugin([
    //   new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('package.json', ['main']),
    //   new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    // ], ['normal', 'loader'])
  ],
  target: 'web'
};

module.exports = config;
