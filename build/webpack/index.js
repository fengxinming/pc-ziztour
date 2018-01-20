'use strict';

const utils = require('./utils');

const { isDev } = utils;

if (isDev) {
  exports.config = require('./dev');
} else {
  exports.config = require('./prod');
}

exports.webpack = require('./pack');
