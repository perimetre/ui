module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    },
    'storybook-addon-jsx',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html'
  ],
  core: {
    // builder: '@storybook/builder-vite'
    builder: 'webpack5'
  },
  babel: async (options) => ({
    ...options,
    // If updating the plugin list make sure you update .babelrc as well, and vice versa
    // Macros is not needed here because styled components now includes it too
    plugins: [...options.plugins, 'babel-plugin-styled-components']
  })
};
