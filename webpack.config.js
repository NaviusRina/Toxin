const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');//подключение статических файлов, например ico
const AirDatepicker = require('air-datepicker');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const $ = require('jquery');
const configurePug = require('pug-require');


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    index: './js/script.js'
    /*можно добавить еще одну точку входа, то есть еще один путь*/
    // registration: './pug/pages/Registration/registration.js',
    // roomdetails: './pug/pages/Room details/room-details.js',
    // searchroom: './pug/pages/Search room/search-room.js',
  },
  output: {
    filename: 'script.[contenthash].js',//таким образом юудут создаваться отдельные файлы бандл на каждый путь из entry
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {//оптимизация. даст импорт библиотеки во все файлы жс?
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {//отслеживание результатов в реальном времени? работает с командой npm start
    port: 4200
  },
  stats: {
    children: true
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, './assets/images/'),
    },
  },
  plugins: [//плагины, как, например, хтмл
    new MiniCssExtractPlugin({
    }),
    new HtmlWebpackPugPlugin(),
    new HTMLWebpackPlugin({
      // title: 'Toxin',//установит tittle в файле индекс в папке дист? но он не нужен, если есть темплейт
      template: './pug/pages/Index/index.pug',//подключит содержимое файла индекс из папки срси к содержимому индекса из папки дист
      filename: 'index.html',
      // chunks: ['index']
    }),
    new HTMLWebpackPlugin({
      template: './pug/pages/Registration/registration.pug',
      filename: 'registration.html',
      // chunks: ['registration']
    }),
    new HTMLWebpackPlugin({
      template: './pug/pages/Room details/room-details.pug',
      filename: 'room-details.html',
      // chunks: ['roomdetails']
    }),
    new HTMLWebpackPlugin({
      template: './pug/pages/Search room/search-room.pug',
      filename: 'search-room.html',
      // chunks: ['searchroom']
    }),

    new CleanWebpackPlugin(),//очистка папки дист от лишнего кеша
    new CopyWebpackPlugin({
      patterns: [
          {
              from: path.resolve(__dirname, './assets/images/favicon.ico'),
              to: path.resolve(__dirname, 'dist'),
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
                    // Options
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
        test: /\.pug$/,//когда вебпак встречает файл pug, необходимо использовать определенный тип лодера(юз)
        // use: ['pug-loader', 'pug-html-loader']
        loader: '@webdiscus/pug-loader',
      },
      {
        test: /\.(png|jpg|svg|gif)$/,//для файлов графики
        use: [
          'file-loader',
          // 'url-loader',
          {
            options: {
              name: './assets/images/[name].[ext]',
              esModule: false,
            }
          }
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
