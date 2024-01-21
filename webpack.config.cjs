const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    iframe: './src/iframe.js',
    app: './src/main.js',
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'vue2',
      chunks: ['iframe', 'chunk-vendors', 'app'],
      chunksSortMode: 'manual',
      inlineSource: /iframe.+\.js$/,
      templateParameters: {
        BASE_URL: './',
      },
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
        axios: {
          name: 'chunk-axios',
          priority: 30,
          test: /[\\/]node_modules[\\/]_?axios(.*)/,
        },
      },
    },
  },
}
