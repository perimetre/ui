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
      extractors: [
        {
          /**
           * Fix for escaped tailwind prefixes (sm:, lg:, hover:, etc)
           * https://github.com/tailwindlabs/tailwindcss/issues/391#issuecomment-746829848
           *
           * @param content the content to be parsed
           */
          extractor: (content) => {
            return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
          },
          extensions: ['css', 'js', 'ts', 'tsx']
        }
      ],
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
