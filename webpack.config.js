const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
          options: {
            "presets": ['@babel/preset-env', 'minify'],
           }
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            // options: {
            //   // sourceMap: true
            // }
           },
           MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            // options: {
              // sourceMap: true,
              // url: true,
            // }
          },
          {
            loader: 'postcss-loader',
             options: {
              // sourceMap: true,
              config: { path: './postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            // options: {
              // sourceMap: true
            // }
          }
        ]
      },

      {
        test: /\.(woff2?|eot|ttf|otf|png|jpe?g)(\?.*)?$/,
        loader: 'url-loader',
        // options: { limit: 8000 },
      },
    ]
  },
   plugins: [
    new MiniCssExtractPlugin({
      filename: 'application.css',
    })
  ],
  output: {
    filename: 'javascripts/[name].js',
    path: path.resolve(__dirname, '.tmp/dist')
  }
};
