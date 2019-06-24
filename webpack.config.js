const isDev = process.env.NODE_ENV === 'development';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js',
    './client/style.css',
  ],
  output: {
    path: __dirname, // assumes your bundle.js will also be in the root of your project folder
    filename: './public/bundle.js',
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
    ],
  },
};
