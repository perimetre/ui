module.exports = {
  plugins: {
    'postcss-import': {}, // Import must come before tailwind
    tailwindcss: {},
    // Other plugins come between tailwind and autoprefixer
    'postcss-nested': {},
    'postcss-combine-media-query': {}, // Media query must come before duplicated-selectors
    'postcss-combine-duplicated-selectors': {},
    'postcss-flexbugs-fixes': {}, // Required to use the storybook beta with postcss8 and to use with nextjs
    '@fullhuman/postcss-purgecss': {
      /**
       * Use tailwind extractor
       *
       * @param content the content to be parsed
       */
      defaultExtractor: (content) => {
        const extractor = require('tailwindcss/lib/lib/purgeUnusedStyles').tailwindExtractor;
        const preserved = [...extractor(content)];

        return preserved;
      },
      content: ['./src/**/*.{js,ts,jsx,tsx,css}', './.storybook/**/*.{js,ts,jsx,tsx,css}']
    },
    // autoprefixer should always be the last one
    // postcss-preset-env is required to use with nextjs, and it already uses autoprefixer
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3,
      features: {
        'custom-properties': false,
        'nesting-rules': false
      }
    }
  }
};
