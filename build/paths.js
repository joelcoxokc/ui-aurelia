var path = require('path');

var appRoot = 'src/';
var pluginRoot = 'plugins/';

module.exports = {
  root: appRoot,
  source: {
    js   : appRoot + '**/*.js',
    html : appRoot + '**/*.html',
    style: 'styles/**/*.css',
  },
  plugins:{
    root : pluginRoot,
    js   : pluginRoot+ '**/*.js',
    html : pluginRoot+ '**/*.html',
    fonts: pluginRoot+'styles/fonts/**/*',
    styl : {
      index: pluginRoot+'styles/index.styl',
      all  : pluginRoot+'styles/**/*.styl'
    },
  },
  style: 'styles/**/*.css',
  output: 'dist/',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
