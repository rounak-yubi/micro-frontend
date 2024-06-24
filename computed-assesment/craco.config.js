const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3003,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "computed_assesment",
          exposes: {
            "./Assesment": "./src/components/Assesment",
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
