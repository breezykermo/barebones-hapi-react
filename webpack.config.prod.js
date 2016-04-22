/*eslint-disable */
var path = require('path');

module.exports = {
  entry: [
    './src/public/js/client-app.js'
  ],
  output: {
    path: path.join(__dirname, 'src/public/js/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
};
