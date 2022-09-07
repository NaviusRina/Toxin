const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AirDatepicker = require('air-datepicker');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const $ = require('jquery');
const configurePug = require('pug-require');


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    index: './js/script.js'
  },
  output: {
    filename: 'script.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    port: 4200
  },
  stats: {
    children: true
  },
  plugins: [
    new MiniCssExtractPlugin({
    }),
    new HtmlWebpackPugPlugin(),
    new HTMLWebpackPlugin({
      template: './pug/pages/Index/index.pug',
      filename: 'index.html'
    }),
    new HTMLWebpackPlugin({
      template: './pug/pages/Registration/registration.pug',
      filename: 'registration.html'
    }),
    new HTMLWebpackPlugin({
      template: './pug/pages/Room details/room-details.pug',
      filename: 'room-details.html'
    }),
    new HTMLWebpackPlugin({
      template: './pug/pages/Search room/search-room.pug',
      filename: 'search-room.html'
    }),

    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
          {
              from: path.resolve(__dirname, 'src/assets/images/favicon.ico'),
              to: path.resolve(__dirname, 'dist'),
              noErrorOnMissing: true
          },
          {
              from: path.resolve(__dirname, 'src/assets/images/'),
              to: path.resolve(__dirname, 'dist/assets/images'),
              noErrorOnMissing: true
          }
        ]
      })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['file-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.pug$/,
        loader: '@webdiscus/pug-loader',
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)?$/,
        use: [
          'file-loader'
        ],

      },
      {
        test: /\.ttf$/,
        use: ['file-loader']
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}
