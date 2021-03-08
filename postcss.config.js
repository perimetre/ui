module.exports = {
  plugins: {
    'postcss-import': {}, // Import must come before tailwind
    tailwindcss: {},
    // Other plugins come between tailwind and autoprefixer
    'postcss-nested': {},
    'postcss-combine-media-query': {}, // Media query must come before duplicated-selectors
    'postcss-combine-duplicated-selectors': {},
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.{js,ts,jsx,tsx,css}', './.storybook/**/*.{js,ts,jsx,tsx,css}']
    },
    autoprefixer: {}
  }
};
