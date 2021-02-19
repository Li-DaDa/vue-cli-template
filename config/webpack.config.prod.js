const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.config.base');

const { styleModule } = require('./webpack.base');

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
];

if (process.env.BUNDLE_ANALYZER) {
  plugins.push(new BundleAnalyzerPlugin());
}

const config = merge(baseConfig, {
  mode: 'production',
  plugins,
  module: {
    rules: [
      ...styleModule(),
    ],
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          name: 'commons',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
});

module.exports = config;
