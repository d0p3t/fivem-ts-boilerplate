const path = require('path');

module.exports = {
  entry: "./src/client/client.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "dist")
  }
};
