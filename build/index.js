'use strict';

const clean = require('./tasks/clean');
const stylus = require('./tasks/stylus');
const webpack = require('./tasks/webpack');

clean(['public/css/*']).then(() => {
  stylus([
    'client/css/*/*.styl',
    '!client/css/commons/**/*.styl',
    '!client/css/utils/**/*.styl',
    '!client/css/partials/**/*.styl',
  ], 'public/css');
});

clean(['public/js/*']).then(() => {
  webpack('client/js/controllers/**/*.js', 'public/js');
});
