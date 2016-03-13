// Config to be for building for 'commonjs' i.e. targets with no module system
var path = require('path');
var webpack = require('webpack');
var buildConfig = require('./webpack.config.build.js');

module.exports = Object.assign({}, buildConfig, {
  output: {
    path: path.join('.', 'lib/commonjs'),
    filename: 'index.js',
    library: 'qcNotification',
    libraryTarget: 'commonjs2'
  }
});
