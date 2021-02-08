// Ref: https://tailwindcss.com/docs/presets#creating-a-preset
module.exports = {
  // Default theme: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L7
  theme: {
    extend: {
      colors: {
        // Theme colors:
        'pui-primary': 'var(--pui-primary, #00BF6F)',
        'pui-secondary': 'var(--pui-secondary, #2A3C47)',
        'pui-paragraph': {
          0: 'var(--pui-paragraph-0, #fff)',
          300: 'var(--pui-paragraph-300, #ABABAB)',
          500: 'var(--pui-paragraph-500, #666666)',
          900: 'var(--pui-paragraph-900, #333333)'
        },
        // --------------- Colors under this are not theme related, and only are here so tailwind can generate helpers for them
        // Add a reset color
        'pui-initial': 'initial',
        // Adds a "placeholder" color option so it can be replaced
        'pui-placeholder-color': 'var(--pui-placeholder-color, var(--pui-primary, #00BF6F))',
        // #EF4444 = Tailwind's red-500
        'pui-error': 'var(--pui-error-color, #EF4444)',
        // #34D399 = Tailwind's green-400
        'pui-success': 'var(--pui-success-color, #34D399)'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('../plugins/varPlaceholderColorPlugin')]
};
