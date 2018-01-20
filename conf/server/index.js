'use strict';

const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

const projectDir = process.cwd();

const staticDir = path.resolve(projectDir, 'public');

const clientDir = path.resolve(projectDir, 'client');

const customStylusUtils = path.join(clientDir, 'css/utils/**/*.styl');

const autoprefixer = require('autoprefixer')({
  browsers: ['last 100 versions', 'ie > 7'],
  flexbox: true
});

const locals = require('../locals');

module.exports = {
  // 端口
  port: +process.env.port || +process.env.PORT || 5100,

  // 网页模板路径
  viewsDir: path.resolve(projectDir, 'server', 'views'),

  // client存放目录
  clientDir: clientDir,

  // 日志文件存放目录
  logsDir: path.resolve(projectDir, 'logs'),

  // 配置文件路径
  logsCfg: path.join(projectDir, 'conf/log4js.json'),

  // 静态文件目录
  staticDir: staticDir,

  // 静态资源前缀
  // staticPath: staticPath,

  // 静态文件的映射
  staticMappings: {},

  // 静态目录配置参数
  staticOpts: {},

  // 自定义favicon
  favicon: undefined,

  // 是否开启模板缓存
  viewsCache: NODE_ENV === 'production',

  // stylus 配置
  stylus: {
    // 是否开启stylus插件
    disabled: NODE_ENV !== 'development',
    define: {
      '$CDN_PATH': locals.CDN_PATH
    },
    use: [
      require('nib')(),
      // require('poststylus')(['autoprefixer', 'rucksack-css'])
      require('poststylus')([autoprefixer, 'rucksack-css'])
    ],
    import: [
      '~nib/lib/nib/index.styl',
      customStylusUtils
    ],
    url: {
      name: 'inline-url',
      limit: 50000,
      paths: [staticDir]
    },
    src: clientDir,
    dest: staticDir
  },

  // http请求相关配置
  req: {
    // 默认走nginx，需要解压缩
    gzip: true
  },

  // 路由配置
  router: {
    path: path.resolve(projectDir, 'server', 'routes'),
    exclude: []
  },

  // 控制器
  controller: {
    path: path.resolve(projectDir, 'server', 'controllers'),
  },

  // 构建打包
  build: {}
};
