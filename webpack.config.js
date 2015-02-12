var webpack = require('webpack');

module.exports = {
  entry: './app.jsx',
  target: 'web',
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  devtool: 'source-map',
  debug: true,
  module: {
    loaders: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        loaders: ['6to5-loader?modules=common']
      }
    ]
  }
};