module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|png|jpg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // output: {
  //   path: "assets",
  //   publicPath: "/",
  // },
};
