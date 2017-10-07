const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: { 
    main: [
      path.join(__dirname, 'resources', 'js', 'main.js'),
      path.join(__dirname, 'resources', 'sass', 'main.scss'),
    ]
  },
  output: {
    path: path.resolve(__dirname, 'web', 'assets'),
    publicPath: '/assets/',
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
        }) 
      },
      {
        test: /.js?$/,
        include: [
          path.resolve(__dirname, 'resources', 'js')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.json', '.js', '.css', '.sass']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/web/assets/js/')
  }
};