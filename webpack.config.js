const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')//подключение статических файлов, например ico

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pug/includes`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  externals: {
    paths: PATHS
  },
  entry: {
    main: './index.js'
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
      template: `${PATHS.src}/index.html`//подключит содержимое файла индекс из папки срси к содержимому индекса из папки дист
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
      // ...
      PAGES.map(page => new HTMLWebpackPlugin)([ //чтобы автоматически компилировал файлы паг в хтмл?
        template: `${PAGES_DIR}/${page}`,
        filename: `./${page.replace(/\.pug/,'.html')}`
      ])
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
      {
        test: /\.pug$/,//когда вебпак встречает файл pug, необходимо использовать определенный тип лодера(юз)
        use: ['pug-loader']
      }
      {
        test: /\.js$/,
        use: ["source-map-loader"]
      }
    ]
  }
}
