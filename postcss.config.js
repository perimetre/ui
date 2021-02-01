module.exports = {
  plugins: {
    'postcss-import': {}, // Import must come before tailwind
    tailwindcss: {},
    // Other plugins come between tailwind and autoprefixer
    'postcss-nested': {},
    'postcss-combine-media-query': {},
    'postcss-combine-duplicated-selectors': {},
    autoprefixer: {}
  }
};
