'use strict';

const pathApi = require('path');
const base = require('./base');
const utils = require('../webpack/utils');
const serverCfg = require('../../conf/server');
const localsCfg = require('../../conf/locals/development');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const FriendlyErrors = require('friendly-errors-webpack-plugin');
const fileUtil = require('danu/utils/file');

const { cssProcessors, cssLoader } = utils;
const fnameexp = /^(\S+\/controllers\/)(\S+)\.js$/;
const filePatterns = [serverCfg.clientDir + '/js/controllers/**/*.js'];

const entries = {};
fileUtil.matchesByPatterns(filePatterns).forEach((n) => {
  // entries[n.replace(fnameexp, '$2')] = ['webpack-hot-middleware/client?reload=true', n.slice(0, -3)];
  entries[n.replace(fnameexp, '$2')] = [n.slice(0, -3)];
});
base.entry = entries;
base.output.path = pathApi.join(serverCfg.staticDir, localsCfg.DYN_JS_PATH);
base.output.publicPath = localsCfg.DYN_JS_PATH;
base.devtool = 'eval';
base.plugins.push(...[
  // webpack-dev-server enhancement plugins
  new DashboardPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(), // 更新组件时在控制台输出组件的路径而不是数字ID，用在开发模式
  // new webpack.NoEmitOnErrorsPlugin(),
  new FriendlyErrors()
]);
// cssProcessors.forEach(processor => {
//   let loaders;
//   if (processor.use === '') {
//     loaders = ['postcss-loader'];
//   } else {
//     loaders = ['postcss-loader', processor.use];
//   }
//   base.module.rules.push({
//     test: processor.test,
//     use: ['style-loader', cssLoader].concat(loaders)
//   });
// });

module.exports = base;
