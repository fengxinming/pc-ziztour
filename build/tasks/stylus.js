'use strict';

const nativePath = require('path');
const vinylFs = require('vinyl-fs');
const stylus = require('gulp-stylus');
const serverCfg = require('../../conf/server');
const gutil = require('gulp-util');

const stylusConfig = serverCfg.stylus;

module.exports = (src, dest) => {
  return new Promise((resolve, reject) => {
    gutil.log('Starting "stylus" task', src);
    vinylFs.src(src).pipe(stylus({
      'include css': true,
      compress: true,
      use: stylusConfig.use,
      import: [nativePath.join(require.resolve('nib').slice(0, -3), 'index.styl')].concat(stylusConfig.import.slice(1)),
      globals: stylusConfig.define,
      url: {
        name: 'inline-url',
        limit: 50000,
        paths: [serverCfg.staticDir]
      }
    })).on('error', (err) => {
      gutil.log('Running "stylus" task but throw a Error', err);
      reject(err);
    }).on('end', () => {
      gutil.log('Finished "stylus" task');
      resolve();
    }).pipe(vinylFs.dest(dest));
  });
};
