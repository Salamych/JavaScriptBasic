let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {

  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'assets/js/main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/main.css'
    }),
  ],

}

