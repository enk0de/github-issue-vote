const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  name: "github-issue-vote",
  mode: "production",
  entry: {
    index: path.resolve("./src/index.ts"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "auto",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(m?js|ts)$/,
        exclude: /[\\/].yarn[\\/]/,
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
  devtool: "source-map"
};
