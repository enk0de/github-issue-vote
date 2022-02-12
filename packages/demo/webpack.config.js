const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  name: "demo",
  mode: "development",
  target: "web",
  entry: "./index.ts",
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/[name].[contenthash:8].js",
    chunkFilename: "static/js/[name].[contenthash:8].js",
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.(m?js|ts)$/,
        exclude: /[\\/].yarn[\\/]/,
        // exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  devtool: "source-map",
  devServer: {
    historyApiFallback: { disableDotRule: true },
    port: 4000,
    hot: true,
  },
};
