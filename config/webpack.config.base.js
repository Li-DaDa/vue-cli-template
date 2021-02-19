const HtmlPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { resolve } = require('../utils/path')

const config = {
  entry: {
    main: resolve('../src/main.js')
  },
  output: {
    filename: '[name]-[contenthash:6].js',
    path: resolve('../dist')
  },
  resolve: {
    alias: {
      "@": resolve('../src')
    },
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: ['url-loader']
      }, {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: resolve('../public/index.html')
    }),
    new VueLoaderPlugin()
  ],

}

module.exports = config
