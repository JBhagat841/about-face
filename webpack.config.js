const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const rootPath = path.resolve(__dirname);
const frontendDir = path.join(rootPath, 'frontend');
const publicDir = path.join(rootPath, 'public');

module.exports = {
  entry: path.join(frontendDir, "entry.js"),
  output: {
    path: publicDir,
    filename: "bundle.js"
  },
  devtool: 'source-map',
  resolve: {
    root: frontendDir
  },
  module: {
    loaders: [
      {
        test: /\.css$/, loader: "style!css"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass?sourceMap"]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      React: "react"
    })
  ]
};