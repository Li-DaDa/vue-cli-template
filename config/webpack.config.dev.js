const { merge } = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')

const { styleModule } = require('./webpack.base')

const config = merge(baseConfig, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: '8088',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      ...styleModule(true)
    ]
  }
})

module.exports = config
