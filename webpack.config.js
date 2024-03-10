const path = require("path");

exports.default = {
  entry: "./main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.svg/,
        type: "asset/inline"
      },
      {
        test: /\.ttf/,
        type: "asset/resource"
      },
      // {
      //   test: /\.html$/i,
      //   type: "asset/source"
      // },
      {
        assert: { type: "css" },
        loader: "css-loader"
      },
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