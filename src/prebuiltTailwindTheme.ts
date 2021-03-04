// import preval from 'preval.macro';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

// !!!! Important !!!!
// This file is recommended to only be used with storybook or at maximum internally.
// If you plan to use this from an external package. It's recommended to generate your own preval

// These are just a bunch of values to fill the storybook dropdown with the correct strings

const fullConfig = resolveConfig(tailwindConfig);

export const prebuildTailwindTheme = Object.assign(fullConfig, { flattenedColors: flattenColorPalette(fullConfig.theme.colors) }, {});

export const colorOptions = Object.entries(prebuildTailwindTheme.flattenedColors).map((x) => x[0]);

// Ref: https://tailwindcss.com/docs/font-weight
export const weightOptions = Object.entries(prebuildTailwindTheme.theme.fontWeight).map((x) => x[0]);

// Ref: https://tailwindcss.com/docs/border-style
// Ref: https://github.com/tailwindlabs/tailwindcss/blob/master/src/plugins/borderStyle.js
export const borderStyleOptions = ['dashed', 'dotted', 'double', 'none'];

// Ref: https://tailwindcss.com/docs/font-size
export const fontSizeOptions = Object.entries(prebuildTailwindTheme.theme.fontSize).map((x) => x[0]);

// Ref: https://tailwindcss.com/docs/width
export const widthHeightOptions = Object.entries(prebuildTailwindTheme.theme.width).map((x) => x[0]);

// Ref: https://github.com/tailwindlabs/tailwindcss-line-clamp#usage
export const clampOptions = ['none', ...Object.entries(prebuildTailwindTheme.theme.lineClamp).map((x) => x[0])];

export const minWidthOptions = Object.entries(prebuildTailwindTheme.theme.minWidth).map((x) => x[0]);

export const marginPaddingOptions = Object.entries(prebuildTailwindTheme.theme.margin).map((x) => x[0]);

export const gridColumnOptions = [
  ...Object.entries(prebuildTailwindTheme.theme.gridTemplateColumns).map((x) => x[0]),
  undefined
];

export const gridRowOptions = [
  ...Object.entries(prebuildTailwindTheme.theme.gridTemplateColumns).map((x) => x[0]),
  undefined
];
