import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool: 'source-map',
  // resolve: { symlinks: false },
  entry: {
    // Ruta del archivo index.js principal del modulo
    // main: path.resolve(__dirname, 'src/access'),
    main: path.resolve(__dirname, 'src/medipass.module'),
  },
  //bibliotecas externas que requiere este paquete para funcionar pero
  //que no se incluyen en el
  externals: {
    "angular": "angular",
    "moment": "moment",
    "angular-translate": "angular-translate",
    "angular-material": "angular-material",
    "angular-sanitize": "angular-sanitize",
    "angular-material-data-table": "angular-material-data-table"
  },
  // target: 'web',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'lib'),
    // nombre de la libreria
    filename: 'medipass-base.js',
    // para que webpack exporte el
    library: 'medipass-base',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    //Para manejar el css
    new ExtractTextPlugin('medipass-base.css'),

    //Divide el build en chunks
    new webpack.optimize.CommonsChunkPlugin({
      // vendor no es necesario
      names: ['main']
    }),

    // Minify JS

    new webpack.optimize.UglifyJsPlugin({ sourceMap: true})

  ],
  module: {
    //Esta exportación solo necesita cargar archivos .js y .css
    rules: [
      //Usamos babel para interpretar los JS en ES6 y dejarlos entendibles para el navegador
      {
        use: {
          loader: 'babel-loader',
        },
        test: /\.js$/,
        exclude: /nodes_modules/
      },
      {
        //Empaqueta html
        test: /\.html$/,
        loader: 'raw-loader'
      },

      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap') }
    ]
  }
};
