const HtmlWebpackPlugin = require('html-webpack-plugin');
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path';

// Bundling - Compiler

export default {
  // Sets node env to prod
  mode: 'production',
  // Grants ability to debug compiled code
  // https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',
  // Apps Entry point to bundle up code - Bundle Splitting
  entry: {
    // Apps code
    main: path.resolve(__dirname, 'src/index'),
    // Third party library code
    vendor: path.resolve(__dirname, 'src/vendor')
  },
  // Location of bundled up code (Will not create file in dev mode)
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    // Name each bundle with a dynamic name and a hash
    // Hash - chunkhash only updates when the code changes
    filename: '[name].[chunkhash].js'
  },
  // Plugins to enhance webpack
  plugins: [
    // Generate an external css file with a has in the filename
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css'
    }),
    // Create HTML file that includes reference to bundled js
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  // How to handle different file types, granting ability to import files
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }
    ]
  }
};
