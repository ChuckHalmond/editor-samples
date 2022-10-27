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
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: [
      path.join(__dirname, "./")
    ],
    alias: {
      "editor": path.resolve(__dirname, "./node_modules/editor/lib/")
    }
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