const path = require('path')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  'process.env.CONFIG_SERVICE_USER': JSON.stringify(process.env.CONFIG_SERVICE_USER)
}

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CopyWebpackPlugin([
      {from: 'static', to: '.'}
    ]),
    new webpack.HotModuleReplacementPlugin({quiet: true}),
    new webpack.DefinePlugin(config)
  ],
  devServer: {
    hot: true,
    port: 8080,
    compress: true
  }
}
