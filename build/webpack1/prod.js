'use strict';

const webpack = require('webpack');
const base = require('./base');

base.devtool = '#source-map';

base.plugins.push(...[
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: module => {
      return module.resource && /\.(js|css|es6)$/.test(module.resource) && module.resource.indexOf('node_modules') !== -1;
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    uglifyOptions: {
      ie8: true
    },
    compress: {
      warnings: false,
      drop_console: false,
    },
    output: {
      comments: false
    }
  })
]);

base.stats = {
  // Add children information
  children: false,
  // Add chunk information (setting this to `false` allows for a less verbose output)
  chunks: false,
  // Add built modules information to chunk information
  chunkModules: false,
  chunkOrigins: false,
  modules: false
};

module.exports = base;
