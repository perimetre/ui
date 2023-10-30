module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-jsx',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-styling-webpack',
    {
      name: '@storybook/addon-styling-webpack',

      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  implementation: require.resolve('postcss')
                }
              }
            ]
          }
        ]
      }
    }
  ],

  // babel: async (options) => ({
  //   ...options,
  //   // If updating the plugin list make sure you update .babelrc as well, and vice versa
  //   // Macros is not needed here because styled components now includes it too
  //   plugins: [...options.plugins, 'babel-plugin-styled-components']
  // }),

  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  docs: {
    autodocs: true
  }
};
