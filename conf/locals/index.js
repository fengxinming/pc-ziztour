'use strict';

const PACKAGE = require('../../package');

module.exports = {
  TITLE: '蜘蛛旅游网',
  DESCRIPTION: '深圳市蜘蛛旅游网络技术有限公司成立于2014年，是一家在线旅游互联网技术平台公司，瞄准的是中国酒店行业B2B市场。公司汇集了一大批BAT背景的互联网高级人才。不同于传统的中介分销模式，蜘蛛旅游网旨在利用互联网思维，通过自有平台技术和产品服务，为酒店和酒店产品行业客户（旅行社、会展公司、企业客户等）搭建一个开放、透 明、中立的酒店产品在线直销和交易撮合平台。作为完全中立的第三方，蜘蛛旅游网不介入或影响任何平台交易的达成。我们将专注于通过互联网技术和在线交易机制的创新，帮助解 决传统酒店产品线下交易的种种问题和弊端，提高交易效率、减少交易环节及降低交易成本。蜘蛛旅游网的愿景是成为中国酒店行业第一个B2B在线直销交易平台，真正推进中国酒店行业在线化进程。',
  KEYWORDS: '携程,艺龙,去哪儿,OTA,客房销售,客房管理,酒店管理,酒店推广,酒店采购,酒店预订,三亚预订,客房预订,订房,包房,酒店空房率,协议酒店,公司接待,公司预订,蜘蛛旅游,蜘蛛旅游网,深圳市蜘蛛旅游网络技术有限公司',
  VERSION: PACKAGE.version, // 此版本号应于工程版本号一致
  NODE_ENV: process.env.NODE_ENV || 'development',
  // 动态编译的js片段路径
  DYN_JS_PATH: '/js/',
  CONTEXT_PATH: '',
  PC_TRAVEL_PATH: 'http://b.ziztour.com',
  CDN_PATH: 'http://img.ziztour.com/static/www',
  // CDN_PATH: '',
  NAV: [{
    name: '首页',
    path: '/',
  }, {
    name: '蜘蛛差旅',
    path: '/travel/index.html'
  }, {
    name: '蜘蛛智游行',
    path: '/tech-travel/index.html'
  }, {
    name: '关于我们',
    path: '/others/index.html'
  }]
};
