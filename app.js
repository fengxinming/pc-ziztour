'use strict';

const Koa = require('koa');
const path = require('path');
const Danu = require('danu');
const webpackDev = require('./server/koa/webpack-dev');

const projectDir = process.cwd();

const app = new Koa();
const danu = new Danu(app, {
  confDir: path.resolve(projectDir, 'conf'),
  confName: 'server',
  locals: 'locals',
  httpLogger: 'http'
});

if (app.env === 'development') {
  webpackDev(danu);
}

const appLog = danu.logFactory.getLogger('app');
const port = danu.config.get('server').port;
const server = danu.listen(port);

server.on('error', (error) => {
  appLog.error('服务器异常：', error);
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      appLog.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      appLog.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  appLog.info('Listening on ' + bind);
  console.log('Listening on ' + bind);
});
