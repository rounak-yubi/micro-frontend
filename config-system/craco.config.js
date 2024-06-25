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
          remotes: {
            computed_assesment:
              "computed_assesment@http://localhost:3003/remoteEntry.js",
          },
          filename: "remoteEntry.js",
          shared: {
            react: {
              singleton: true,
              eager: false,
              requiredVersion: "^18.2.0",
            },
            "react-dom": {
              singleton: true,
              eager: false,
              requiredVersion: "^18.2.0",
            },
            "react-router-dom": {
              singleton: true,
              eager: false,
              requiredVersion: "^6.3.0",
            },
            // 'styled-components': {
            //     singleton: true,
            //     eager: true,
            //     requiredVersion: '^5.3.5',
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
// export {};
