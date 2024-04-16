module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        enforce: "pre",
        use: [
          {
            loader: "source-map-loader",
            options: {
              filterSourceMappingUrl: (url, resourcePath) => {
                if (resourcePath.includes("@mediapipe/tasks-vision")) {
                  return false;
                }
                return true;
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
