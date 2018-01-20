'use strict';

const vinylFs = require('vinyl-fs');
const webpack = require('../webpack1');
const named = require('vinyl-named');
const gutil = require('gulp-util');

module.exports = (src, dest, options) => {
  return new Promise((resolve, reject) => {
    gutil.log('Starting "webpack" task', src, dest);
    vinylFs.src(src)
      .on('error', function (err) {
        gutil.log('Running "webpack" task but throw a error', err);
        reject(err);
      })
      .pipe(named())
      .pipe(webpack.webpack(Object.assign({}, webpack.config, options)))
      .on('end', function () {
        gutil.log('Finished "webpack" task');
        resolve();
      })
      .pipe(vinylFs.dest(dest));
  });
};
