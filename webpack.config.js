const path = require('path');
const ExtractTextPlugin = require("mini-css-extract-plugin");
const PAGES_DIR = `${PATHS.src}/src/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  entry: [
    './src/js/script.js',
    './src/scss/style.scss'
  ],
  output: {
    filename: './src/js/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'env'
          }
        }
      },
        {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: true,
                url: false
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
        {
         test: /\.pug$/,
         loader: 'pug-loader'
       },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './src/scss/style.bundle.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/src/pug/pages/index.pug`, // либо написать template: `${PAGES_DIR}/${page}`,
          filename: './src/index.html', // либо написать filename: `./${page.replace(/\.pug/,'.html')}`
          inject: true
        }),
  ]
};
