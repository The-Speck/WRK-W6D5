const path = require('path');

module.exports = {
  context: __dirname,
  entry: './widgets.jsx',
  output: {
  path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'] // Automatically resolves these extensions for us
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react'] // Transpiler efficiency!
          }
        },
      }
    ]
  },
  devtool: 'source-map'
};
