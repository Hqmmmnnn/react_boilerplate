const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { isDev } = require("./env");

const getBabelLoader = () => ({
  test: /\.js$/,
  exclude: /node_modules/,
  use: ["cache-loader", "babel-loader?cacheDirectory", "thread-loader"]
});

const getCssLoader = env => ({
  test: /\.css$/,
  use: [isDev(env) ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"]
});

const getImageLoader = () => ({
  test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|)$/,
  loader: "url-loader"
});

const getRules = env =>
  [getBabelLoader(), getCssLoader(env), getImageLoader()].filter(
    loader => loader
  );

module.exports.getRules = getRules;
