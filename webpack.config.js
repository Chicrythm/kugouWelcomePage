/*
 * @Description: 
 * @Autor: yzq
 * @Date: 2022-07-04 21:37:25
 * @LastEditors: yzq
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};