const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3000,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "host",
          remotes: {
            config_system: "config_system@http://localhost:3001/remoteEntry.js",
            computed_assesment:
              "computed_assesment@http://localhost:3003/remoteEntry.js",
          },
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
