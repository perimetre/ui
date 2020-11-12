import { DefaultTheme } from 'styled-components';

export const screens = {
  mobile: 576,
  tablet: 768,
  laptop: 1025,
  desktop: 1440,
  largeDesktop: 1650,
  ultrawide: 1921
};

export const spacing = {
  none: '0',
  // Pixel values
  px0: '0px',
  px4: '4px',
  px8: '8px',
  px12: '12px',
  px16: '16px',
  px18: '18px',
  px24: '24px',
  px32: '32px',
  px42: '42px',
  px48: '48px',
  px58: '58px',
  px61: '61px',
  px72: '72px',
  px96: '96px',
  px144: '144px',
  px192: '192px',
  // Negative px
  // Pixel values
  ['px-0']: '-0px',
  ['px-4']: '-4px',
  ['px-8']: '-8px',
  ['px-12']: '-12px',
  ['px-18']: '-18px',
  ['px-16']: '-16px',
  ['px-24']: '-24px',
  ['px-32']: '-32px',
  ['px-42']: '-42px',
  ['px-48']: '-48px',
  ['px-58']: '-58px',
  ['px-61']: '-61px',
  ['px-72']: '-72px',
  ['px-96']: '-96px',
  ['px-144']: '-144px',
  ['px-192']: '-192px',
  // em values
  // Smaller
  em0025: '0.025em',
  em005: '0.05em',
  em0075: '0.075em',
  em01: '0.1em',
  // A bit bigger
  em025: '0.25em',
  em05: '0.5em',
  em075: '0.75em',
  em1: '1em',
  em125: '1.25em',
  em15: '1.5em',
  em175: '1.75em',
  em2: '2em',
  em225: '2.25em',
  em25: '2.5em',
  em275: '2.75em',
  em3: '3em',
  // Negative em
  // Smaller
  ['em-0025']: '-0.025em',
  ['em-005']: '-0.05em',
  ['em-0075']: '-0.075em',
  ['em-01']: '-0.1em',
  // A bit bigger
  ['em-025']: '-0.25em',
  ['em-05']: '-0.5em',
  ['em-075']: '-0.75em',
  ['em-1']: '-1em',
  ['em-125']: '-1.25em',
  ['em-15']: '-1.5em',
  ['em-175']: '-1.75em',
  ['em-2']: '-2em',
  ['em-225']: '-2.25em',
  ['em-25']: '-2.5em',
  ['em-275']: '-2.75em',
  ['em-3']: '-3em',
  // Rem values
  // Smaller
  rem0025: '0.025rem',
  rem005: '0.05rem',
  rem0075: '0.075rem',
  rem01: '0.1rem',
  // A bit bigger
  rem025: '0.25rem',
  rem05: '0.5rem',
  rem075: '0.75rem',
  rem1: '1rem',
  rem125: '1.25rem',
  rem15: '1.5rem',
  rem175: '1.75rem',
  rem2: '2rem',
  rem225: '2.25rem',
  rem25: '2.5rem',
  rem275: '2.75rem',
  rem3: '3rem',
  // Negative rem
  // Smaller
  ['rem-0025']: '-0.025rem',
  ['rem-005']: '-0.05rem',
  ['rem-0075']: '-0.075rem',
  ['rem-01']: '-0.1rem',
  // A bit bigger
  ['rem-025']: '-0.25rem',
  ['rem-05']: '-0.5rem',
  ['rem-075']: '-0.75rem',
  ['rem-1']: '-1rem',
  ['rem-125']: '-1.25rem',
  ['rem-15']: '-1.5rem',
  ['rem-175']: '-1.75rem',
  ['rem-2']: '-2rem',
  ['rem-225']: '-2.25rem',
  ['rem-25']: '-2.5rem',
  ['rem-275']: '-2.75rem',
  ['rem-3']: '-3rem',
  // Half & quarter width
  ['halfWidth']: '50%',
  ['quarterWidth']: '75%'
};

export type SpacingEnum = keyof typeof spacing;

export type AvailableThemes = 'default';

// Get the augmented type from ./styled-components.d.ts
export type AppTheme = DefaultTheme;

// ------ !!!!!
// If you need to add properties to the theme, don't forget to add the types in ./styled-components.d.ts
// ------ !!!!!
const defaultTheme: AppTheme = {
  name: 'default',
  spacing,
  screens,
  colors: {}
};

export default defaultTheme;
