const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    vendor: ["babel-polyfill", "react", "react-dom", "redux"],
    main: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "./build"),
    filename: "[name].[chunkhash].bundle.js",
    chunkFilename: "[name].[chunkhash].bundle.js",
    publicPath: "/"
  },
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".js", ".jsx", ".json"],
    alias: {
      Components: path.resolve(__dirname, "src/components"),
      Containers: path.resolve(__dirname, "src/containers"),
      Reducers: path.resolve(__dirname, "src/redux/reducers"),
      Actions: path.resolve(__dirname, "src/redux/actions"),
      Consts: path.resolve(__dirname, "src/redux/consts"),
      Assets: path.resolve(__dirname, "src/assets"),
      Utils: path.resolve(__dirname, "src/utils")
    }
  },
  performance: { hints: false },
  optimization: {
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        vendor: {
          name: "vendor",
          test: "vendor",
          enforce: true
        }
      }
    },
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: ["src/styles/style.css"],
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: false,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true
    // headers: {
    //   "Access-Control-Allow-Origin": "*"
    // },
    // proxy: {
    //   "/api/**": {
    //     target: "http://172.17.116.220:8089",
    //     secure: false,
    //     changeOrigin: true
    //   }
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
