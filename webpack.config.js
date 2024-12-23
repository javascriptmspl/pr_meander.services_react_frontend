

// const path = require('path');
// const webpack = require('webpack');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// const publicPath = '/beauty-salon/';
// // const publicPath = '/';

// module.exports = {
//  mode: "development",
// //  externals: {
// //   // require("jquery") is external and available
// //   //  on the global var jQuery
// //   "jquery": "jQuery"
// // },
//  entry: {
//    app: "./src/index.js"
//  },
//  devtool: 'inline-source-map',
//  devServer: {
//    contentBase: path.join(__dirname, './'), // where dev server will look for static files, not compiled
//   //  publicPath: '/', //relative path to output path where  devserver will look for compiled files
//    host: '0.0.0.0',
//     compress: true,
//     port: 3001, // port number
//     historyApiFallback: true,
//     quiet: true
//  },
//  externals: {
//   // global app config object
//   config: JSON.stringify({
//       apiUrl: '',
//       imageapiUrl: '',
      
//       publicPath : '/beauty-salon'            
//   })
// },
//  output: {
//    filename: 'js/[name].bundle.js',
//    path: path.resolve(__dirname, 'dist'), // base path where to send compiled assets
//    publicPath: publicPath, // base path where referenced files will be look for
//  },
//  resolve: {
//    extensions: ['*', '.js', '.jsx'],
//    alias: {
//       Assets: path.resolve(__dirname, 'src/assets/'),
//    },
//    modules: [
//     path.join(__dirname, "js/helpers"),
//     "node_modules"
//   ]
//  },
//  module: {
//    rules: [
//      { // config for es6 jsx
//        test: /\.(js|jsx)$/,
//        exclude: /node_modules/,
//        use: {
//          loader: "babel-loader"
//        }
//      },
//      {
//          test: /\.css$/,
//          use: ['style-loader', 'css-loader'],
//      },
//      { // config for sass compilation
//        test: /\.scss$/,
//        use: [
//          {
//            loader: MiniCssExtractPlugin.loader
//          },
//          'css-loader',
//          {
//            loader: "sass-loader"
//          }
//        ]
//      },
//      {
//        test: /\.(png|jpg|gif)$/i,
//        use: [
//          {
//            loader: 'url-loader',
//            options: {
//              limit: 8192,
//            },
//          },
//        ],
//      },
//      {
//          test: /\.(woff|woff2|eot|ttf|svg)$/,
//          loader: 'url-loader?limit=100000'
//      },
//     //  { // config for fonts
//     //    test: /\.(woff|woff2|eot|ttf|otf)$/,
//     //    use: [
//     //      {
//     //        loader: 'file-loader',
//     //        options: {
//     //          outputPath: 'fonts',
//     //        }
//     //      }
//     //    ],
//     //  }
//    ]
//  },
//  optimization: {
//   minimizer: [new UglifyJsPlugin()],
// },
// performance: {
//   hints: process.env.NODE_ENV === 'production' ? "warning" : false
// },
//     plugins: [
//       new HtmlWebpackPlugin({
//         template: "./public/index.html",
//         filename: "./index.html",
//         favicon: './public/favicon.png'
//       }),
//         new MiniCssExtractPlugin({ // plugin for controlling how compiled css will be outputted and named
//             filename: "css/[name].css",
//             chunkFilename: "css/[id].css"
//         }),
//         new CleanWebpackPlugin({
//             cleanOnceBeforeBuildPatterns: ["css/*.*", "js/*.*", "fonts/*.*", "images/*.*"]
//         }),
//         new webpack.ProvidePlugin({ //To automatically load jquery
//           $: 'jquery',
//           jQuery: 'jquery',
//           'window.jQuery': 'jquery'
//         })
//     ]
// };

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin'); // Use TerserPlugin for minification

const publicPath = '/';

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js", // Main entry point
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Directory for static files
    },
    host: '0.0.0.0', // Accessible from all network interfaces
    compress: true, // Enable gzip compression
    port: 3001, // Development server port
    historyApiFallback: true, // For single-page apps (SPA)
    
    client: {
      logging: 'info', // Logging level
    },
    devMiddleware: {
      publicPath: '/', // Use devMiddleware to specify the publicPath
    },
  },
  externals: {
    config: JSON.stringify({
      apiUrl: '',
      imageapiUrl: '',
      publicPath: '/',
    }),
  },
  output: {
    filename: 'js/[name].bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Directory for compiled assets
    publicPath: "/", // Base path for assets
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'], // Resolve these extensions
    alias: {
      Assets: path.resolve(__dirname, 'src/assets/'), // Alias for assets
    },
    modules: [
      path.join(__dirname, "js/helpers"), // Include custom helper modules
      "node_modules", // Default node_modules
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/, // SCSS files
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i, // Image files
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Inline files smaller than 8KB
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/, // Font files
        loader: 'url-loader',
        options: {
          limit: 100000, // Inline files smaller than 100KB
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()], // Minimize JavaScript files using TerserPlugin
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false, // Show warnings in production mode
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template for the main HTML file
      filename: "./index.html", // Output file
      favicon: './public/favicon.png', // Favicon file
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css", // Output CSS file name
      chunkFilename: "css/[id].css", // Output CSS chunk file name
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["css/*.*", "js/*.*", "fonts/*.*", "images/*.*"], // Clean specified directories before build
    }),
    new webpack.ProvidePlugin({
      $: 'jquery', // Automatically load jQuery
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};

