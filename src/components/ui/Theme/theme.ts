/**
 * This file spcifies the theme object and how it should be built.
 *
 * It should follow specification at https://styled-system.com/theme-specification
 */

// ***********
// ** Type declaration
// ***********

// ** Theme keys

export type Breakpoints = { sm: string; md: string; lg: string; xl: string; xxl: string };
type ThemeBreakpoints = string[] & Breakpoints;

export type Space = {
  px0: number;
  px4: number;
  px8: number;
  px12: number;
  px16: number;
  px20: number;
  px24: number;
  px32: number;
  px40: number;
  px48: number;
  px64: number;
  px80: number;
  px96: number;
  px128: number;
  px160: number;
  px192: number;
  px224: number;
  px256: number;
  ['px-0']: string;
  ['px-4']: string;
  ['px-8']: string;
  ['px-12']: string;
  ['px-18']: string;
  ['px-16']: string;
  ['px-24']: string;
  ['px-32']: string;
  ['px-42']: string;
  ['px-48']: string;
  ['px-58']: string;
  ['px-61']: string;
  ['px-72']: string;
  ['px-96']: string;
  ['px-144']: string;
  ['px-192']: string;
  em0025: string;
  em005: string;
  em0075: string;
  em01: string;
  em025: string;
  em05: string;
  em075: string;
  em1: string;
  em125: string;
  em15: string;
  em175: string;
  em2: string;
  em225: string;
  em25: string;
  em275: string;
  em3: string;
  ['em-0025']: string;
  ['em-005']: string;
  ['em-0075']: string;
  ['em-01']: string;
  ['em-025']: string;
  ['em-05']: string;
  ['em-075']: string;
  ['em-1']: string;
  ['em-125']: string;
  ['em-15']: string;
  ['em-175']: string;
  ['em-2']: string;
  ['em-225']: string;
  ['em-25']: string;
  ['em-275']: string;
  ['em-3']: string;
  rem0025: string;
  rem005: string;
  rem0075: string;
  rem01: string;
  rem025: string;
  rem05: string;
  rem075: string;
  rem1: string;
  rem125: string;
  rem15: string;
  rem175: string;
  rem2: string;
  rem225: string;
  rem25: string;
  rem275: string;
  rem3: string;
  ['rem-0025']: string;
  ['rem-005']: string;
  ['rem-0075']: string;
  ['rem-01']: string;
  ['rem-025']: string;
  ['rem-05']: string;
  ['rem-075']: string;
  ['rem-1']: string;
  ['rem-125']: string;
  ['rem-15']: string;
  ['rem-175']: string;
  ['rem-2']: string;
  ['rem-225']: string;
  ['rem-25']: string;
  ['rem-275']: string;
  ['rem-3']: string;
  ['half']: string;
  ['quarter']: string;
  ['full']: string;
};

type ThemeSpace = number[] & Space;

export type FontSizes = {
  /**
   * Caption | 12px
   */
  'text-xs': string;
  /**
   * SmallerParagraph | 14px
   */
  'text-sm': string;
  /**
   * SmallParagraph | 16px
   */
  'text-base': string;
  /**
   * Paragraph | 18px
   */
  'text-lg': string;
  /**
   * H5 | 20px
   */
  'text-xl': string;
  /**
   * H4 | 24px
   */
  'text-2xl': string;
  /**
   * H3 | 30px
   */
  'text-3xl': string;
  /**
   * H2 | 36px
   */
  'text-4xl': string;
  /**
   * H1 | 48px
   */
  'text-5xl': string;
  /**
   * 64px
   */
  'text-6xl': string;
};
type ThemeFontSizes = number[] & FontSizes;

// ** Augment types

/**
 * This interface can be augmented by users to add types to default theme
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThemeColors {}

/**
 * This interface can be augmented by users to add types to default theme
 */
export interface UITheme {
  space: ThemeSpace;
  breakpoints: ThemeBreakpoints;
  colors?: ThemeColors;
  fontSizes: ThemeFontSizes;
}

// ** Enums

export type ThemeColorsEnum = keyof NonNullable<UITheme['colors']> | (string & {});
export type ThemeSpacesEnum = keyof Space | (number & {}) | (string & {});
export type ThemeFontSizesEnum = keyof FontSizes | (number & {});
export type ThemeFontFamiliesEnum = string & {};

// ***********
// ** Values declaration
// ***********

// Default breakpoints from tailwind.css Ref: https://tailwindcss.com/docs/breakpoints + ultrawide setting
// Breakpoint setup: https://styled-system.com/responsive-styles#using-objects, https://styled-system.com/theme-specification#breakpoints
const breakpoints = ['640px', '768px', '1024px', '1280px', '1925px'] as ThemeBreakpoints;
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

// Default sizes from tailwind.css Ref: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
// Space setup: https://styled-system.com/theme-specification#space
const space = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 224, 256] as ThemeSpace;
// Pixel values
space.px0 = 0;
space.px4 = 4;
space.px8 = 8;
space.px12 = 12;
space.px16 = 16;
space.px20 = 20;
space.px24 = 24;
space.px32 = 32;
space.px40 = 40;
space.px48 = 48;
space.px64 = 64;
space.px80 = 80;
space.px96 = 96;
space.px128 = 128;
space.px160 = 160;
space.px192 = 192;
space.px224 = 224;
space.px256 = 256;
// Negative px
// Pixel values
space['px-0'] = '-0px';
space['px-4'] = '-4px';
space['px-8'] = '-8px';
space['px-12'] = '-12px';
space['px-18'] = '-18px';
space['px-16'] = '-16px';
space['px-24'] = '-24px';
space['px-32'] = '-32px';
space['px-42'] = '-42px';
space['px-48'] = '-48px';
space['px-58'] = '-58px';
space['px-61'] = '-61px';
space['px-72'] = '-72px';
space['px-96'] = '-96px';
space['px-144'] = '-144px';
space['px-192'] = '-192px';
// em values
// Smaller
space.em0025 = '0.025em';
space.em005 = '0.05em';
space.em0075 = '0.075em';
space.em01 = '0.1em';
// A bit bigger
space.em025 = '0.25em';
space.em05 = '0.5em';
space.em075 = '0.75em';
space.em1 = '1em';
space.em125 = '1.25em';
space.em15 = '1.5em';
space.em175 = '1.75em';
space.em2 = '2em';
space.em225 = '2.25em';
space.em25 = '2.5em';
space.em275 = '2.75em';
space.em3 = '3em';
// Negative em
// Smaller
space['em-0025'] = '-0.025em';
space['em-005'] = '-0.05em';
space['em-0075'] = '-0.075em';
space['em-01'] = '-0.1em';
// A bit bigger
space['em-025'] = '-0.25em';
space['em-05'] = '-0.5em';
space['em-075'] = '-0.75em';
space['em-1'] = '-1em';
space['em-125'] = '-1.25em';
space['em-15'] = '-1.5em';
space['em-175'] = '-1.75em';
space['em-2'] = '-2em';
space['em-225'] = '-2.25em';
space['em-25'] = '-2.5em';
space['em-275'] = '-2.75em';
space['em-3'] = '-3em';
// Rem values
// Smaller
space.rem0025 = '0.025rem';
space.rem005 = '0.05rem';
space.rem0075 = '0.075rem';
space.rem01 = '0.1rem';
// A bit bigger
space.rem025 = '0.25rem';
space.rem05 = '0.5rem';
space.rem075 = '0.75rem';
space.rem1 = '1rem';
space.rem125 = '1.25rem';
space.rem15 = '1.5rem';
space.rem175 = '1.75rem';
space.rem2 = '2rem';
space.rem225 = '2.25rem';
space.rem25 = '2.5rem';
space.rem275 = '2.75rem';
space.rem3 = '3rem';
// Negative rem
// Smaller
space['rem-0025'] = '-0.025rem';
space['rem-005'] = '-0.05rem';
space['rem-0075'] = '-0.075rem';
space['rem-01'] = '-0.1rem';
// A bit bigger
space['rem-025'] = '-0.25rem';
space['rem-05'] = '-0.5rem';
space['rem-075'] = '-0.75rem';
space['rem-1'] = '-1rem';
space['rem-125'] = '-1.25rem';
space['rem-15'] = '-1.5rem';
space['rem-175'] = '-1.75rem';
space['rem-2'] = '-2rem';
space['rem-225'] = '-2.25rem';
space['rem-25'] = '-2.5rem';
space['rem-275'] = '-2.75rem';
space['rem-3'] = '-3rem';
// Relatives
space['half'] = '50%';
space['quarter'] = '75%';
space['full'] = '100%';

// Default sizes from tailwind.css Ref: https://tailwindcss.com/docs/font-size
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72] as ThemeFontSizes;
fontSizes['text-xs'] = '0.75rem';
fontSizes['text-sm'] = '0.875rem';
fontSizes['text-base'] = '1rem';
fontSizes['text-lg'] = '1.125rem';
fontSizes['text-xl'] = '1.25rem';
fontSizes['text-2xl'] = '1.5rem';
fontSizes['text-3xl'] = '1.875rem';
fontSizes['text-4xl'] = '2.25rem';
fontSizes['text-5xl'] = '3rem';
fontSizes['text-6xl'] = '4rem';

export const defaultTheme: UITheme = {
  breakpoints,
  space,
  fontSizes
};
