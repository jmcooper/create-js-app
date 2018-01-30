import webpack from 'webpack'
import path from 'path'
import ManifestPlugin from 'webpack-manifest-plugin'
import WebpackMd5Hash from 'webpack-md5-hash'

import config from './config'

export default {
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, 'src/index'),
  },
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: config.assets.publicPath,
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      URL_MOUNT_POINT: JSON.stringify(config.server.urlMountPoint),
    }),
    new ManifestPlugin({
      fileName: config.assets.manifestName,
      stripSrc: '.[chunkhash].js',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]---[hash:base64:5]',
            },
          },
          { loader: 'sass-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-import')(),
                require('postcss-cssnext')(),
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
}
