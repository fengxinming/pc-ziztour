'use strict';

const locals = require('../locals/development');

module.exports = {

  // stylus 配置
  stylus: {
    define: {
      '$CDN_PATH': locals.CDN_PATH
    }
  }
};
