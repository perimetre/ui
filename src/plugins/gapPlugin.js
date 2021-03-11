const plugin = require('tailwindcss/plugin');
const flatMap = require('lodash/flatMap');
const nameClass = require('tailwindcss/lib/util/nameClass').default;

/**
 * A plugin that outputs all tailwind colors as a class `color-{colorName}`. That class contains the color value as a css variable
 * that is named `--pui-placeholder-color`. Which can then be used by other components that expect a placeholder color.
 */
module.exports = plugin(({ addUtilities, theme, variants }) => {
  // The margin plugin was used as a base for this
  // Ref: https://github.com/tailwindlabs/tailwindcss/blob/master/src/plugins/margin.js
  const generators = [
    (size, modifier) => ({
      [nameClass('pui-gap', modifier)]: {
        '> *': {
          '&:not(:first-child)': {
            'margin-top': `${size}`,
            'margin-left': `${size}`
          }
        }
      },
      [nameClass('pui-gap-p', modifier)]: {
        '> *': {
          '&:not(:first-child)': {
            'padding-top': `${size}`,
            'padding-left': `${size}`
          }
        }
      }
    }),
    (size, modifier) => ({
      [nameClass('pui-gap-y', modifier)]: {
        '> *': {
          '&:not(:first-child)': {
            'margin-top': `${size}`
          }
        }
      },
      [nameClass('pui-gap-x', modifier)]: {
        '> *': {
          '&:not(:first-child)': {
            'margin-left': `${size}`
          }
        }
      },
      [nameClass('pui-gap-y-p', modifier)]: {
        '> *': {
          '&:not(:first-child)': {
            'padding-top': `${size}`
          }
        }
      },
      [nameClass('pui-gap-x-p', modifier)]: {
        '> *': {
          '&:not(:first-child)': {
            'padding-left': `${size}`
          }
        }
      }
    })
  ];

  const utilities = flatMap(generators, (generator) => flatMap(theme('margin'), generator));

  addUtilities(utilities, variants('pui-gap'));
});
