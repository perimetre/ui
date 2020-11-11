import { css } from 'styled-components';
import { compose, ConfigStyle, get, Scale, system } from 'styled-system';
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

export type SpacingProps = {
  margin?: ValueType</* SpacingEnum | */ true | 'auto'>;
  marginTop?: ValueType</* SpacingEnum | */ true | 'auto'>;
  marginBottom?: ValueType</* SpacingEnum | */ true | 'auto'>;
  marginLeft?: ValueType</* SpacingEnum | */ true | 'auto'>;
  marginRight?: ValueType</* SpacingEnum | */ true | 'auto'>;
  marginVertical?: ValueType</* SpacingEnum | */ true | 'auto'>;
  marginHorizontal?: ValueType</* SpacingEnum | */ true | 'auto'>;

  m?: ValueType</* SpacingEnum | */ true | 'auto'>;
  mt?: ValueType</* SpacingEnum | */ true | 'auto'>;
  mr?: ValueType</* SpacingEnum | */ true | 'auto'>;
  mb?: ValueType</* SpacingEnum | */ true | 'auto'>;
  ml?: ValueType</* SpacingEnum | */ true | 'auto'>;
  mx?: ValueType</* SpacingEnum | */ true | 'auto'>;
  my?: ValueType</* SpacingEnum | */ true | 'auto'>;

  padding?: ValueType</* SpacingEnum | */ true | 'auto'>;
  paddingTop?: ValueType</* SpacingEnum | */ true | 'auto'>;
  paddingBottom?: ValueType</* SpacingEnum | */ true | 'auto'>;
  paddingLeft?: ValueType</* SpacingEnum | */ true | 'auto'>;
  paddingRight?: ValueType</* SpacingEnum | */ true | 'auto'>;
  paddingVertical?: ValueType</* SpacingEnum | */ true | 'auto'>;
  paddingHorizontal?: ValueType</* SpacingEnum | */ true | 'auto'>;

  p?: ValueType</* SpacingEnum | */ true | 'auto'>;
  pt?: ValueType</* SpacingEnum | */ true | 'auto'>;
  pr?: ValueType</* SpacingEnum | */ true | 'auto'>;
  pb?: ValueType</* SpacingEnum | */ true | 'auto'>;
  pl?: ValueType</* SpacingEnum | */ true | 'auto'>;
  px?: ValueType</* SpacingEnum | */ true | 'auto'>;
  py?: ValueType</* SpacingEnum | */ true | 'auto'>;
};

const marginConfig: Record<string, ConfigStyle> = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin
    // defaultScale: defaults.space
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin
    // defaultScale: defaults.space
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin
    // defaultScale: defaults.space
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin
    // defaultScale: defaults.space
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin
    // defaultScale: defaults.space
  },
  marginHorizontal: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin
    // defaultScale: defaults.space
  },
  marginVertical: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin
    // defaultScale: defaults.space
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
    scale: 'space'
    // defaultScale: defaults.space,
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space'
    // defaultScale: defaults.space,
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space'
    // defaultScale: defaults.space,
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space'
    // defaultScale: defaults.space,
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space'
    // defaultScale: defaults.space,
  },
  paddingHorizontal: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space'
    // defaultScale: defaults.space,
  },
  paddingVertical: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space'
    // defaultScale: defaults.space,
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

// TODO: Add theme spacings
