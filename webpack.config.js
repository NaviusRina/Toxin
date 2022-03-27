const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/script.js'
    /*можно добавить еще одну точку входа, то есть еще один путь*/
  },
  output: {
    filename: '[name].[contenthash].js',//таким образом юудут создаваться отдельные файлы бандл на каждый путь из entry
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [//плагины, как, например, хтмл
    new HTMLWebpackPlugin({
      // title: 'Toxin',//установит tittle в файле индекс в папке дист? но он не нужен, если есть темплейт
      template: './src/index.html'//подключит содержимое файла индекс из папки срси к содержимому индекса из папки дист
    }),
    new CleanWebpackPlugin()//очистка папки дист от лишнего кеша
  ]
}
