var fs = require('fs');
var path = require('path');
var publicDir = path.join(__dirname, 'public');

module.exports = {
  entry: "./frontend/scripts/entry.js",
  output: {
    path: publicDir,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};