const path = require("path");

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    include: path.resolve(__dirname, "../src"),
    use: [
      require.resolve('@storybook/source-loader'),
      require.resolve('react-docgen-typescript-loader'),
    ],
    enforce: 'pre',
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
