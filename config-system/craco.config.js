const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3001,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "config_system",
          exposes: {
            "./Sample": "./src/components/Sample",
          },
          filename: "remoteEntry.js",
          // shared: {
          //   react: { singleton: true },
          //   "react-dom": { singleton: true },
          // },
        }),
      ],
    },
    configure: (webpackConfig) => ({
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        publicPath: "auto",
      },
    }),
  },
};
// export {};
