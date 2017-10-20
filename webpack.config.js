const path = require('path');

module.exports = [
  {
    devtool: 'source-map',
    entry:
      './src/index',
    output: {
      path: path.resolve(__dirname, './dist/'),
      filename: 'bundle.js',
      library: 'RealeaseNotesGenerator',
      libraryTarget: 'umd',
    },

    module: {
      loaders: [
        {
          test: /(\.js)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        },
        {
          test: (/\.css$/),
          loader: "style-loader!css-loader"
        }
      ]
    }
  }
];
