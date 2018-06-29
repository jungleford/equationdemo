import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'

const root = path.resolve(__dirname);

const clientInclude = [
  path.join(root, 'src', 'js'),
  path.join(root, 'examples', 'js')
];

const babelQuery = {
  presets: [
    'babel-preset-es2015',
    'babel-preset-stage-0',
    'babel-preset-react'
  ],
  'plugins': [
    ['transform-decorators-legacy'],
    ['babel-plugin-transform-runtime'],
    ['babel-plugin-add-module-exports']
  ]
};

export default {
  mode: 'development',
  devtool: 'source-map',
  entry: ['babel-polyfill', path.join(root, 'examples', 'js', 'app.jsx')],
  output: {
    path: path.join(root, 'dist', 'js'),
    filename: 'bundle.js'
  },
  devServer: {
    //publicPath: '/',
    contentBase: [path.join(root, 'dist')], // Access address /index.html, instead of /dist/index.html
    watchContentBase: true,
    inline: true,
    hot: true
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        query: babelQuery,
        include: clientInclude,
        exclude: /node_modules/
      }
    ]
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      template: path.join(root, 'examples', 'index.html'),
      filename: '../index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};