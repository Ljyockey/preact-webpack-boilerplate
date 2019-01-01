'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      { exclude: ['node_modules'], use: {loader: 'babel-loader'}, test: /\.jsx?$/ },
      {test: /\.scss$/, use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {sourceMap: true}
      }, {
        loader: 'sass-loader',
        options: {sourceMap: true}
      }
      ]}
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: './src/index.js',
  output: {
    filename: 'dist/javascript/[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html' //this ensures we get the html file with preact imported in a script tag and the target html element for our preact component
    })
  ]
};