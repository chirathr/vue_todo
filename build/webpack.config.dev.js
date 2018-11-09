const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugn = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: [
    './src/app.js'
  ],
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugn({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
