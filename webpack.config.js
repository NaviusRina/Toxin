const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')//подключение статических файлов, например ico

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './js/script.js'
    /*можно добавить еще одну точку входа, то есть еще один путь*/
  },
  output: {
    filename: '[name].[contenthash].js',//таким образом юудут создаваться отдельные файлы бандл на каждый путь из entry
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {//оптимизация. даст импорт библиотеки во все файлы жс?
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {//отслеживание результатов в реальном времени? работает с командой npm start
    port: 4200
  },
  plugins: [//плагины, как, например, хтмл
    new HTMLWebpackPlugin({
      // title: 'Toxin',//установит tittle в файле индекс в папке дист? но он не нужен, если есть темплейт
      template: './index.html'//подключит содержимое файла индекс из папки срси к содержимому индекса из папки дист
    }),
    new CleanWebpackPlugin(),//очистка папки дист от лишнего кеша
    new CopyWebpackPlugin({
      patterns: [
          {
              from: path.resolve(__dirname, './images/favicon.ico'),
              to: path.resolve(__dirname, 'dist'),
              noErrorOnMissing: true
          }
      ]
 })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,//когда вебпак встречает файл сисс, необходимо использовать определенный тип лодера(юз)
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/,//когда вебпак встречает файл сисс, необходимо использовать определенный тип лодера(юз)
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg|gis)$/,//для файлов графики
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff)$/,
        use: ['file-loader']
      }
    ]
  }
}
