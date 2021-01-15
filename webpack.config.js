const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          'file-loader', 'image-webpack-loader',
        ],
        enforce: 'pre',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
};