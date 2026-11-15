import path from 'node:path';

export default {
  entry: './src/index.html',
  output: {
    path: path.resolve(import.meta.dirname, 'dist'),
    clean: true,
    htmlFilename: 'index.html',
  },
};
