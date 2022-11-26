const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const root = path.resolve(__dirname, '..')

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(root, 'src', 'index.js'),
  mode: 'development',
  output: {
    filename: '[contenthash].bundle.js',
    chunkFilename: '[contenthash].bundle.js',
    path: path.resolve(root, 'dist'),
    publicPath: '/'
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
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(root, 'src', 'index.template.html')
    }),
  ]
}
