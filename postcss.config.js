module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'), // or require('postcss-nesting')
    require('postcss-combine-media-query'), // Media query must come before duplicated-selectors
    require('postcss-combine-duplicated-selectors'),
    // Required to use the storybook beta with postcss8
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      flexbox: 'no-2009',
    }),
  ]
};
