var path = require("path");

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, "../src/index.ssr.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "v-aspect-ratio.ssr.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
