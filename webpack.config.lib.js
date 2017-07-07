import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

// const VENDOR_LIBS = [
//   "angular","angular-ui-router","axios","promise","bootstrap","jquery"
// ];

export default {
  devtool: 'source-map',
  entry: {
    // main : path.resolve(__dirname, 'src/index'),
    main: path.resolve(__dirname, 'src/access'),
    // vendor : VENDOR_LIBS
  },
  //bibliotecas externas que requiere este paquete para funcionar pero
  //que no se incluyen en el
  externals: {
    "angular": "angular",
    "angular-ui-router": "angular-ui-router",
    "axios": "axios",
    "promise": "promise",
    "bootstrap": "bootstrap",
    "jquery": "jquery",
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'lib'),
    // publicPath: '/',
    // filename: 'medipass-base.js'
    library: 'medipass-base',
    libraryTarget: 'umd',
    // umdNamedDefine: true,
    filename: 'medipass-base.js'
  },
  plugins: [
    //Para manejar el css
    // new ExtractTextPlugin('style.css'),
    new ExtractTextPlugin('medipass-base.css'),

    // new OptimizeCssAssetsPlugin({
    //   assetNameRegExp: /\.css$/g,
    //   cssProcessor: require('cssnano'),
    //   cssProcessorOptions: { discardComments: { removeAll: true } },
    //   canPrint: true
    // }),
    //Divide el build en chunks
    new webpack.optimize.CommonsChunkPlugin({
      // names: ['main', 'vendor']
      names: ['main']
    }),
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      // template: 'src/index.html',
      template: 'demo/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        // minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      // Properties you define here are available in index.html
      // using htmlWebpackPlugin.options.varName
      // Ejemplo:
      // trackJSToken: 'INSERT YOUR TOKEN HERE'
    }),
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery"
    // }),
    // Eliminate duplicate packages when generating bundle
    // ya no es necesario https://webpack.js.org/guides/migrating/#dedupeplugin-has-been-removed
    // new webpack.optimize.DedupePlugin(),
    // Minify JS

    new webpack.optimize.UglifyJsPlugin(
      {
        compress: {
          unused: false
        }
      })

  ],
  module: {
    rules: [
      //Usamos babel para interpretar los JS en ES6 y dejarlos entendibles para el navegador
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /nodes_modules/
      },
      {
        //Empaqueta html
        test: /\.html$/,
        loader: 'raw-loader'
      },
      // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      // { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
      // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      // { test: /\.json$/, loader: 'json-loader'},
      { test: /\.scss/, exclude: /node_modules/, loader: 'style-loader!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap') },
      // //{ test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240'}, // si hay un error mirar
      // {
      //   //Esto permite incluir imagenes como recursos empaquetados
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: { limit: 40000 }
      //     },
      //     'image-webpack-loader'
      //     ]
      // }
    ]
  }
}
