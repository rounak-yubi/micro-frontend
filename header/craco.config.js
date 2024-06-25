// const { ModuleFederationPlugin } = require("webpack").container;

// module.exports = {
//   devServer: {
//     port: 3004,
//   },
//   webpack: {
//     plugins: {
//       add: [
//         new ModuleFederationPlugin({
//           name: "header",
//           exposes: {
//             "./Header": "./src/components/Header",
//           },
//           shared: {
//             react: {
//               singleton: true,
//               eager: true,
//               requiredVersion: "^18.2.0",
//             },
//             "react-dom": {
//               singleton: true,
//               eager: true,
//               requiredVersion: "^18.2.0",
//             },
//             "react-router-dom": {
//               singleton: true,
//               eager: true,
//               requiredVersion: "^6.3.0",
//             },
//             "styled-components": {
//               singleton: true,
//               eager: true,
//               requiredVersion: "^5.3.5",
//             },
//           },
//           filename: "remoteEntry.js",
//         }),
//       ],
//     },
//     configure: (webpackConfig) => ({
//       ...webpackConfig,
//       output: {
//         ...webpackConfig.output,
//         publicPath: "auto",
//       },
//     }),
//   },
// };

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3004,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "header",
          filename: "remoteEntry.js",
          exposes: {
            "./Header": "./src/components/Header",
          },
          shared: {
            react: {
              singleton: true,
              eager: true,
              requiredVersion: "^18.2.0",
            },
            "react-dom": {
              singleton: true,
              eager: true,
              requiredVersion: "^18.2.0",
            },
            "react-router-dom": {
              singleton: true,
              eager: true,
              requiredVersion: "^6.3.0",
            },
            // "styled-components": {
            //   singleton: true,
            //   eager: true,
            //   requiredVersion: "^5.3.5",
            // },
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
