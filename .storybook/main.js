module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  babel: async (options) => ({
    ...options,
    // If updating the plugin list make sure you update .babelrc as well, and vice versa
    plugins: [...options.plugins, 'babel-plugin-styled-components', 'macros']
  })
};
