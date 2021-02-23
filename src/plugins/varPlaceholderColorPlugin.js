const plugin = require('tailwindcss/plugin');
const makeColorUtilities = require('../utils/tailwindPlugin').makeColorUtilities;

/**
 * A plugin that outputs all tailwind colors as a class `color-{colorName}`. That class contains the color value as a css variable
 * that is named `--pui-placeholder-color`. Which can then be used by other components that expect a placeholder color.
 */
module.exports = plugin((pluginOpts) => {
  const { addUtilities, variants } = pluginOpts;
  addUtilities(
    makeColorUtilities(pluginOpts, 'pui-color', '--pui-placeholder-color'),
    variants('pui-placeholder-color')
  );
});
