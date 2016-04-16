var path = require('path');


module.exports = {
  entry: [
    path.normalize('es6-shim/es6-shim.min'),
    'reflect-metadata',
    path.normalize('zone.js/dist/zone'),
    path.resolve('app/app')
  ],
  output: {
    path: path.resolve('www/build/js'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['transform-decorators-legacy']
        },
        include: path.resolve('app'),
        exclude: /node_modules/
      }
    ],
    noParse: [
      /es6-shim/,
      /reflect-metadata/,
      /zone\.js(\/|\\)dist(\/|\\)zone/
    ]
  },
  resolve: {
    root: ['app'],
    alias: {
      'angular2': path.resolve('node_modules/angular2')
    },
    extensions: ['', '.js']
  }
};
