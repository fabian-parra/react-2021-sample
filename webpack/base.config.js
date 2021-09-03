const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const postcssUrl = require('postcss-url')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const root = path.resolve(__dirname, '..')

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(root, 'src', 'index.js'),
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(root, 'dist')
  },
  resolve: {
    modules: [
      path.resolve(root, 'src'),
      path.resolve(root, 'test'),
      path.resolve(root, 'node_modules')
    ],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(root, 'dist'),
    compress: true,
    hot: true,
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(root, 'src', 'index.template.html')
    }),
  ]
}
