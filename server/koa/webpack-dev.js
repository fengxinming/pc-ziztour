'use strict';

const chalk = require('chalk');
const nativePath = require('path');
const clientConfig = require('../../build/webpack1/dev');

const pkg = require(nativePath.join(process.cwd(), 'package.json'));

class LogPlugin {
  constructor(port) {
    this.port = port;
  }

  apply(compiler) {
    compiler.plugin('done', () => {
      const address = `http://localhost:${this.port}`;
      console.log(`> ${pkg.name} is running at ${chalk.yellow(address)}\n`);
    });
  }
}

module.exports = function setupDevServer(danu, router) {
  const webpack = require('webpack');
  const koaWebpack = require('koa-webpack');

  const app = danu.app;
  const serverConfig = danu.config.get('server');
  clientConfig.plugins.push(new LogPlugin(serverConfig.port));

  const clientCompiler = webpack(clientConfig);
  const middleware = koaWebpack({
    compiler: clientCompiler,
    dev: {
      quiet: true,
      stats: {
        colors: true,
        chunks: false
      }
    }
  });
  app.use((ctx, next) => {
    ctx.state.env = app.env;
    ctx.state.reload = true;
    return next();
  });
  app.use(middleware);
};
