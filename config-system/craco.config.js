const { ModuleFederationPlugin } = require("webpack").container;
// module.exports = {
//   webpack: {
//     configure: (webpackConfig, { env, paths }) => {
//       webpackConfig.plugins.push(
//         new ModuleFederationPlugin({
//           name: "config_system",
//           filename: "remoteEntry.js",
//           exposes: {
//             "./Sample": "./src/components/Sample",
//           },
//           shared: {
//             react: {
//               singleton: true,
//               eager: true,
//               requiredVersion: false,
//             },
//             "react-dom": {
//               singleton: true,
//               eager: true,
//               requiredVersion: false,
//             },
//           },
//         })
//       );

//       return webpackConfig;
//     },
//   },
// };

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
