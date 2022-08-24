const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
    time: path.resolve(__dirname, "./src/Time.js"),
  },
  optimization: {
    runtimeChunk: "single",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 4200,
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(|png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(|ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
    ],
  },
};
