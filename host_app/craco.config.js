const { ModuleFederationPlugin } = require("webpack").container;

// module.exports = {
//   webpack: {
//     configure: (webpackConfig, { env, paths }) => {
//       webpackConfig.plugins.push(
//         new ModuleFederationPlugin({
//           name: "host_app",
//           remotes: {
//             config_system: "config_system@http://localhost:3001/remoteEntry.js",
//           },
//           // shared: {
//           //   react: {
//           //     singleton: true,
//           //     eager: true,
//           //     requiredVersion: false,
//           //   },
//           //   "react-dom": {
//           //     singleton: true,
//           //     eager: true,
//           //     requiredVersion: false,
//           //   },
//           // },
//         })
//       );

//       return webpackConfig;
//     },
//   },
// };

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
          },
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
