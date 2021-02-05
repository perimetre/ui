import preval from 'preval.macro';

// Pre evaluate the tailwind theme resolver with the babel preval macro.
// Tailwind recomends to do this because this can be a heavy operation
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
export const prebuildTailwindTheme = preval`
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../tailwind.config.js');
const flattenColorPalette = require('@tailwindcss/postcss7-compat/lib/util/flattenColorPalette').default;

const fullConfig = resolveConfig(tailwindConfig);

module.exports = Object.assign(fullConfig, { flattenedColors: flattenColorPalette(fullConfig.theme.colors) }, {});
`;

export const colorOptions = Object.entries(prebuildTailwindTheme.flattenedColors).map((x) => x[0]);

// Ref: https://tailwindcss.com/docs/font-weight
export const weightOptions = [
  'thin',
  'extralight',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black'
];

// Ref: https://tailwindcss.com/docs/border-style
export const borderStyleOptions = ['dashed', 'dotted', 'double', 'none'];

// Ref: https://tailwindcss.com/docs/font-size
export const fontSizeOptions = [
  'xs',
  'sm',
  'base',
  'none',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl'
];
