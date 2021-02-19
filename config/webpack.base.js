const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.styleModule = (isDev) => {
  const loaders = [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'];
  if (!isDev) {
    loaders.push('postcss-loader');
  }
  return [
    {
      test: /\.css$/,
      use: loaders,
    }, {
      test: /\.(sass|scss)$/,
      use: [...loaders, 'sass-loader'],
    },
  ];
};
