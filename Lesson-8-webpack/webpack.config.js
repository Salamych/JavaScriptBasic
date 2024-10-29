let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = (env, argv) => {
  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'mains.js',
      path: path.resolve(__dirname, './dist'),
      clean: true,
    },
    target: ['web', 'es5'],
    module: {
      rules:[
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
      ]
    },
    devServer: {
      static: {
        directory: path.join(__dirname, './'),
      },
      port: 9000,
    },
  }
}