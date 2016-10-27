'use strict'

var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var plugins = [
  new HtmlWebpackPlugin({
    title: 'We are awesome!!',
    inject: false,
    template: path.resolve(__dirname, 'index.html')
  })
]

module.exports = {
  devtool: 'source-map',
  entry: {
    application: [
      './index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist/app'),
    filename: '[name].bundle.[chunkhash].js'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    historyApiFallback: {
      index: '/app/index.html'
    }
  }
}
