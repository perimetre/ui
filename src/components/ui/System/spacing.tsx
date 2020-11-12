import { css } from 'styled-components';
import { compose, ConfigStyle, get, Scale, system } from 'styled-system';
import { defaultTheme, ThemeSpacesEnum } from '../Theme/theme';
import ValueType from './valueType';

const isNumber = (n: unknown) => typeof n === 'number' && !isNaN(n);

// Ref: https://github.com/styled-system/styled-system/blob/92ab052a2e2f99fac704b93279c58db782aacc49/packages/space/src/index.js#L9
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getMargin = (n: any, scale?: Scale) => {
  if (n === true) {
    return '1rem';
  }

  if (!isNumber(n)) {
    return get(scale, n, n);
  }

  const isNegative = n < 0;
  const absolute = Math.abs(n as number);
  const value = get(scale, absolute, absolute);
  if (!isNumber(value)) {
    return isNegative ? '-' + value : value;
  }
  return value * (isNegative ? -1 : 1);
};

type ScaleType = ValueType<true | 'auto' | ThemeSpacesEnum>;

export type SpacingProps = {
  margin?: ScaleType;
  marginTop?: ScaleType;
  marginBottom?: ScaleType;
  marginLeft?: ScaleType;
  marginRight?: ScaleType;
  marginVertical?: ScaleType;
  marginHorizontal?: ScaleType;

  m?: ScaleType;
  mt?: ScaleType;
  mr?: ScaleType;
  mb?: ScaleType;
  ml?: ScaleType;
  mx?: ScaleType;
  my?: ScaleType;

  padding?: ScaleType;
  paddingTop?: ScaleType;
  paddingBottom?: ScaleType;
  paddingLeft?: ScaleType;
  paddingRight?: ScaleType;
  paddingVertical?: ScaleType;
  paddingHorizontal?: ScaleType;

  p?: ScaleType;
  pt?: ScaleType;
  pr?: ScaleType;
  pb?: ScaleType;
  pl?: ScaleType;
  px?: ScaleType;
  py?: ScaleType;
};

const marginConfig: Record<string, ConfigStyle> = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space
  },
  marginHorizontal: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space
  },
  marginVertical: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaultTheme.space
  }
};

// aliases
marginConfig.m = marginConfig.margin;
marginConfig.mt = marginConfig.marginTop;
marginConfig.mr = marginConfig.marginRight;
marginConfig.mb = marginConfig.marginBottom;
marginConfig.ml = marginConfig.marginLeft;
marginConfig.mx = marginConfig.marginHorizontal;
marginConfig.my = marginConfig.marginVertical;

const systemMargin = system(marginConfig);

const paddingConfig: Record<string, ConfigStyle> = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  paddingHorizontal: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  paddingVertical: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaultTheme.space
  }
};

paddingConfig.p = paddingConfig.padding;
paddingConfig.pt = paddingConfig.paddingTop;
paddingConfig.pr = paddingConfig.paddingRight;
paddingConfig.pb = paddingConfig.paddingBottom;
paddingConfig.pl = paddingConfig.paddingLeft;
paddingConfig.px = paddingConfig.paddingHorizontal;
paddingConfig.py = paddingConfig.paddingVertical;

const systemPadding = system(paddingConfig);

export const systemSpacing = compose(systemMargin, systemPadding);

export const spacingCss = css<SpacingProps>`
  ${systemSpacing}
`;
