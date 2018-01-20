'use strict';

const locals = require('../locals/qa');

module.exports = {

  // stylus 配置
  stylus: {
    define: {
      '$CDN_PATH': locals.CDN_PATH
    }
  }
};
