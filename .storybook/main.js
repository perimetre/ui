module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    },
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // compilerOptions: {
      //   allowSyntheticDefaultImports: true,
      //   esModuleInterop: true
      // },
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
    }
  }
};
