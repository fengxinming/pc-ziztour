'use strict';

const vinylFs = require('vinyl-fs');
const clean = require('gulp-clean');
const gutil = require('gulp-util');

module.exports = (src) => {
  return new Promise((resolve, reject) => {
    gutil.log('Starting "clean" task', src);
    vinylFs.src(src, {
        read: false
      })
      .on('error', (err) => {
        gutil.log('Running "clean" task but throw a Error', err);
        reject(evt);
      })
      .on('end', () => {
        gutil.log('Finished "clean" task');
        resolve();
      })
      .pipe(clean());
  });

};
