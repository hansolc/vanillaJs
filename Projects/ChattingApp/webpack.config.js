const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "./src/Components/"),
      "@core": path.resolve(__dirname, "./src/core/"),
    },
  },
};
