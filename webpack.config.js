var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

var src = path.resolve(__dirname, 'src');
var entries = walk(src);

function walk(p) {
  var files = {};
  fs.readdirSync(p)
    .forEach(e => {
      if (fs.statSync(path.resolve(p, e)).isDirectory()) {
        Object.assign(files, walk(path.resolve(p, e)));
      } else {
        if (path.extname(e).match(/.*(js|jsx)$/)) {
          var rp = path.resolve(p, e);
          var ext = path.extname(e);
          var bn = path.basename(e, ext);
          var dir = path.dirname(path.relative(src, rp));
          files[dir + '/' + bn] = path.resolve(p, e);
        }
      }
    });
  return files;
}

module.exports = {
  entry: entries,
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: { 'react': path.resolve(__dirname, 'node_modules', 'react') },
  },
  node: {
    fs: 'empty',
  },
  output: {
    path: path.join(__dirname, 'component'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['url-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: ['json-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  }
}