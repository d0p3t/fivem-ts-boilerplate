const webpack = require('webpack');
const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

const server = {
  entry: __dirname + '/src/server/server.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new webpack.DefinePlugin({ 'global.GENTLY': false }),
    new RemovePlugin({
      before: {
        include: [
          path.resolve(buildPath, 'server')
        ]
      },
      watch: {
        include: [
          path.resolve(buildPath, 'server')
        ]
      }
    })
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[contenthash].server.js',
    path: path.resolve(buildPath, 'server')
  },
  target: 'node',
};

const client = {
  entry: __dirname + '/src/client/client.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new RemovePlugin({
      before: {
        include: [
          path.resolve(buildPath, 'client')
        ]
      },
      watch: {
        include: [
          path.resolve(buildPath, 'client')
        ]
      }
    })
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[contenthash].client.js',
    path: path.resolve(buildPath, 'client'),
  },
};

module.exports = [server, client];
