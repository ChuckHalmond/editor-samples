const path = require("path");

exports.default = {
  entry: "./main.ts",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      },
      {
        test: /\.svg/,
        type: "asset/resource"
      },
      {
        test: /\.ttf/,
        type: "asset/resource"
      },
      {
        test: /\.css/,
        type: "asset/resource"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: [
      path.join(__dirname, "./"),
      path.join(__dirname, "./node_modules/")
    ]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
    library: {
      name: "main",
      type: "var",
    },
  }
};