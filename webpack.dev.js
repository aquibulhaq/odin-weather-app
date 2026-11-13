import {loadEnvFile} from 'node:process';
import {merge} from 'webpack-merge';
import common from './webpack.common.js';

try {
  loadEnvFile('.env.development');
} catch (err) {
  if (err.code !== 'ENOENT') {
    throw err;
  }
}
try {
  loadEnvFile('.env');
} catch (err) {
  if (err.code !== 'ENOENT') {
    throw err;
  }
}

export default merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    watchFiles: ['./src/template.html'],
    host: process.env.APP_HOST ?? 'localhost',
    port: Number(process.env.APP_PORT ?? 8080),
    open: true,
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
