// Ref: https://tailwindcss.com/docs/presets#creating-a-preset
module.exports = {
  // Default theme: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L7
  theme: {
    extend: {
      colors: {
        primary: 'var(--pui-primary, #00BF6F)',
        secondary: 'var(--pui-secondary, #2A3C47)',
        paragraph: {
          0: 'var(--pui-paragraph-0, #fff)',
          300: 'var(--pui-paragraph-300, #ABABAB)',
          500: 'var(--pui-paragraph-500, #666666)',
          900: 'var(--pui-paragraph-900, #333333)'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
