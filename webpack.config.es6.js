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
        test: /\.(s*)css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  //   loaders: [
  //     { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
  //     { test: /\.(s*)css$/, loaders: ['style', 'css', 'sass'] },
  //   ],
  // },
}
