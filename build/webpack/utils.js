'use strict';

const HappyPack = require('happypack');
const os = require('os');
const path = require('path');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const PROJECT_DIR = process.cwd();

const NODE_ENV = exports.NODE_ENV = process.env.NODE_ENV || 'development';

exports.isDev = NODE_ENV === 'development';

exports.isProd = NODE_ENV === 'production';

// HappyPack生成器
exports.happyPack = (id, loaders) => new HappyPack({
  id,
  loaders,
  debug: false,
  verbose: false,
  // threads: 4,
  threadPool: happyThreadPool // 自动分配线程池
});

const cssModules = false;
const cssModuleStr = 'css-loader?-autoprefixer&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';
exports.cssLoader = cssModules ? cssModuleStr : 'css-loader?-autoprefixer';

exports.cssProcessors = [
  { test: /\.css$/, use: '' },
  { test: /\.scss$/, use: 'sass-loader?sourceMap' },
  { test: /\.less$/, use: 'less-loader?sourceMap' },
  { test: /\.styl$/, use: 'stylus-loader?sourceMap' },
  { test: /\.sass$/, use: 'sass-loader?indentedSyntax&sourceMap' }
];

exports.resolve = (...dir) => path.join(PROJECT_DIR, ...dir);
