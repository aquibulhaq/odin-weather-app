import {merge} from 'webpack-merge';
import {InjectManifest} from 'workbox-webpack-plugin';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
    cssFilename: '[name].[contenthash].css',
  },
  optimization: {
    minimize: {
      html: {
        collapseWhitespace: 'smart',
        removeEmptyAttributes: false,
        removeRedundantAttributes: 'smart',
      },
    },
  },
  plugins: [
    new InjectManifest({
      swSrc: './src/service-worker.js',
    }),
  ],
});
