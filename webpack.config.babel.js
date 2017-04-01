import webpack from 'webpack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'
import StyleExtHtmlWebpackPlugin from 'style-ext-html-webpack-plugin'

const env = process.env.NODE_ENV

const config = {}

const preloadCSS = new ExtractTextPlugin('preload.css')
const mainCSS = new ExtractTextPlugin('sif.[hash].css')

config.default = {
  entry: {
    sif: './src/',
  },

  output: {
    path: './dist/',
    filename: '[name].[hash].js',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }, {
      test: /\.html?$/,
      loader: 'html-loader?minimize=true&removeAttributeQuotes=false&interpolate=require',
    }, {
      test: /\.woff2?$/,
      loader: 'url',
    }, {
      test: /preload\.scss$/,
      loader: preloadCSS.extract(['css', 'postcss', 'sass']),
    }, {
      test: /sif\.scss$/,
      loader: mainCSS.extract(['css', 'postcss', 'sass']),
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'url?limit=15000&name=assets/images/[name].[ext]',
        'img',
      ]
    }]
  },

  postcss: [
    autoprefixer({ browsers: ['last 2 versions', 'ie 9-11'] }),
  ],

  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.js', '.jsx', '.scss'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env === 'development' ? 'development' : 'production'),
      },
    }),
    new CleanWebpackPlugin(['dist', 'build']),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    preloadCSS,
    mainCSS,
    new StyleExtHtmlWebpackPlugin('preload.css'),
  ],
}

config.production = {
  ...config.default,

  output: {
    ...config.default.output,
    publicPath: 'http://sif.witch.zone',
  },

  plugins: [
    ...config.default.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ]
}

config.development = {
  ...config.default,

  output: {
    ...config.default.output,
    publicPath: '/',
  },

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only',
  },
}

export default (env === 'development') ? config.development : config.production
