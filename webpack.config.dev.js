import path from "path";

export default {
  // Sets node env to dev
  mode: "development",
  // Grants ability to debug compiled code
  // https://webpack.js.org/configuration/devtool/
  devtool: "eval-source-map",
  // Apps Entry point to bundle up code
  entry: "./src/index.js",
  // Location of bundled up code (Will not create file in dev mode)
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  // Plugins to enhance webpack
  plugins: [],
  // How to handle different file types, granting ability to import files
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};