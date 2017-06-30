import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
  "angular","angular-ui-router","axios","promise","bootstrap","jquery"
];

export default {
  devtool: 'source-map',
  entry: {
    main : path.resolve(__dirname, 'src/index'),
    vendor : VENDOR_LIBS
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    //Para manejar el css
    new ExtractTextPlugin('style.css'),
    //Divide el build en chunks
    new webpack.optimize.CommonsChunkPlugin({
      names : ['main','vendor']
    }),

     // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      // Properties you define here are available in index.html
      // using htmlWebpackPlugin.options.varName
      // Ejemplo:
      // trackJSToken: 'INSERT YOUR TOKEN HERE'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules :[
      //Usamos babel para interpretar los JS en ES6 y dejarlos entendibles para el navegador
      {
        use :'babel-loader',
        test :/\.js$/,
        exclude : /nodes_modules/
      },
      {
        //Empaqueta html
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        //Empaqueta woff woff2 ttf eot
        test: /\.(woff2?|ttf|eot)$/,
        loader: 'raw-loader'
      },
      {
        //Loeader para los CSS
        //use : ['style-loader','css-loader'],
        test:/\.css$/,
        loader : ExtractTextPlugin.extract({
          loader : 'css-loader'
        })
      },
      {
        //Esto permite incluir imagenes como recursos empaquetados
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
          ]
      }
    ]
  }
}
