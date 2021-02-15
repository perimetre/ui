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

// Ref: https://tailwindcss.com/docs/width
export const widthHeightOptions = [
  'auto',
  'px',
  'full',
  'screen',
  'min',
  'max',
  '0',
  '0.5',
  '1',
  '1.5',
  '2',
  '2.5',
  '3',
  '3.5',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96',
  '1/2',
  '1/3',
  '2/3',
  '1/4',
  '2/4',
  '3/4',
  '1/5',
  '2/5',
  '3/5',
  '4/5',
  '1/6',
  '2/6',
  '3/6',
  '4/6',
  '5/6',
  '1/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  '10/12',
  '11/12'
];

// Ref: https://tailwindcss.com/docs/width
export const twScaleOptions = [
  '0',
  '50',
  '75',
  '90',
  '95',
  '100',
  '105',
  '110',
  '125',
  '150',
  'x-0',
  'x-50',
  'x-75',
  'x-90',
  'x-95',
  'x-100',
  'x-105',
  'x-110',
  'x-125',
  'x-150',
  'y-0	',
  'y-50',
  'y-75',
  'y-90',
  'y-95',
  'y-100',
  'y-105',
  'y-110',
  'y-125',
  'y-150'
];

export const clampOptions = ['none', '1', '2', '3', '4', '5', '6'];

export const minWidthOptions = [
  '0',
  'full',
  'min',
  'max',
  '1/2vw',
  '1/3vw',
  '2/3vw',
  '1/4vw',
  '2/4vw',
  '3/4vw',
  '1/5vw',
  '2/5vw',
  '3/5vw',
  '4/5vw',
  '1/6vw',
  '2/6vw',
  '3/6vw',
  '4/6vw',
  '5/6vw',
  '1/12vw',
  '2/12vw',
  '3/12vw',
  '4/12vw',
  '5/12vw',
  '6/12vw',
  '7/12vw',
  '8/12vw',
  '9/12vw',
  '10/12vw',
  '11/12vw',
  '90vw',
  '100vw',
  'initial'
];
