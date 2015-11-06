'use strict';
var path = require('path');
console.log(path.resolve(__dirname, 'build'))
module.exports = {
  entry: {
    app: ['./js/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  }
}