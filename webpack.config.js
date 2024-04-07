const path = require("path");

exports.default = {
  entry: "./main.ts",
  devtool: "inline-source-map",
  mode: "development",
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, "public")
  //   },
  //   watchFiles: ["public/**/*"],
  //   // hot: false,
  //   // liveReload: true
  // },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        oneOf: [
          {
            test: /\.svg$/,
            type: "asset/inline",
            resourceQuery: /inline/
          },
          {
            test: /\.(jpg|png|svg)$/,
            type: "asset/resource"
          },
        ]
      },
      {
        test: /\.ttf$/,
        type: "asset/resource"
      },
      {
        test: /\.css$/,
        loader: "css-loader"
      }
    ]
  },
  resolve: {
    // alias: {
    //   "@css": path.resolve(__dirname, "./public/css")
    // },
    extensions: [".css", ".ts", ".js"],
    modules: [
      path.join(__dirname, "./"),
      path.join(__dirname, "./node_modules/")
    ]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./public/dist"),
    library: {
      name: "main",
      type: "var",
    },
  }
};