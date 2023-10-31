const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
const withAlphaVariable = require('tailwindcss/lib/util/withAlphaVariable').default;
const toColorValue = require('tailwindcss/lib/util/toColorValue').default;
const nameClass = require('tailwindcss/lib/util/nameClass').default;
const fromPairs = require('lodash/fromPairs');
const map = require('lodash/map');

module.exports = {
  /**
   * A method plugin helper used to output tailwind utilities for all colors in tailwind's theme
   * @param pluginOpts the options that tailwind.plugin gives us
   * @param pluginOpts.theme a method to get the current value of the theme object
   * @param pluginOpts.corePlugins a method that checks whether a core plugin is enabled or not
   * @param classPrefix the prefix used to generate the classes
   * @param cssProperty the css property that the class will contain
   * @returns a utilities object with utilities for all colors in the given classPrefix
   */
  // Ref: https://github.com/tailwindlabs/tailwindcss/blob/master/src/plugins/backgroundColor.js
  makeColorUtilities: ({ theme, corePlugins }, classPrefix, cssProperty) => {
    const colors = flattenColorPalette(theme('colors'));

    /**
     * Gets the css properties from a value
     * @param value the color value
     * @returns a css object
     */
    const getProperties = (value) => {
      if (corePlugins('opacity')) {
        return withAlphaVariable({
          color: value,
          property: cssProperty,
          variable: cssProperty + '-opacity'
        });
      }

      return { cssProperty: toColorValue(value) };
    };

    return fromPairs(
      map(colors, (value, modifier) => {
        return [nameClass(classPrefix, modifier), getProperties(value)];
      })
    );
  }
};
