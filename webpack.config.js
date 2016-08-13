var fs = require('fs');
var path = require('path');
var publicDir = path.join(__dirname, 'public');

module.exports = {
  entry: "./frontend/scripts/entry.js",
  output: {
    path: publicDir,
    filename: "bundle.js"
  },
  devtool: 'source-map',
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
  }
};