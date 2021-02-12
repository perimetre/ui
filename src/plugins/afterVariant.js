const plugin = require('tailwindcss/plugin');

/**
 * A plugin that outputs creates an "after" variant
 */
// Ref: https://tailwindcss.com/docs/plugins#adding-variants
module.exports = plugin(({ addVariant, e }) => {
  addVariant('after', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => `.${e(`after${separator}${className}`)}::after`);
  });
});
