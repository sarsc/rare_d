const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    application: ['./source/javascripts/application.js', './source/stylesheets/application.scss']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env']
          // }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            // options: {},
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: __dirname + '/stylesheets/',
          //     sourceMap: true
          //   }
          // },
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
           },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
             options: {
              sourceMap: true,
              config: { path: './postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: { limit: 1000, name: 'fonts/[name].[ext]', },
      // },
    ]
  },
  // plugins: [
  //   new _MiniCssExtractPlugin({
  //     filename: 'stylesheets/[name].css',
  //     // chunkFilename: '[id].css'
  //   })
  // ],
  output: {
    filename: 'javascripts/[name].js',
    path: path.resolve(__dirname, '.tmp/dist')
  }
};
