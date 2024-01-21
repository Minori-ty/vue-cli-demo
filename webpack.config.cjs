const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: {
    code: './src/code.js',
  },
  plugins: [
    new MomentLocalesPlugin({
      // 剥离除 “zh-cn” 以外的所有语言环境。
      localesToKeep: ['zh-cn'],
    }),
    new CompressionPlugin({
      test: /\.js$/,
      threshold: 1024 * 50,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'js',
          target: 'es2022',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // minSize: 1024 * 5,
      // maxSize: 1024 * 20,
      cacheGroups: {
        elementUI: {
          name: 'chunk-elementUI',
          priority: 30,
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
        },
        moment: {
          name: 'chunk-moment',
          priority: 30,
          test: /[\\/]node_modules[\\/]_?moment(.*)/,
        },
      },
    },
  },
}
