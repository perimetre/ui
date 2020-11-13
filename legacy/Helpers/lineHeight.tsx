import { css } from 'styled-components';
import { SpacingEnum } from '../legacyTheme';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = SpacingEnum;

export type LineHeightProps = {
  lineHeight?: ValueType;
  ['sm-lineHeight']?: ValueType;
  ['md-lineHeight']?: ValueType;
  ['lg-lineHeight']?: ValueType;
  ['xl-lineHeight']?: ValueType;
};

const getLineHeight = (lineHeight: ValueType) => css`
  line-height: ${(props) => props.theme.spacing[lineHeight]};
`;

export const lineHeightCss = css<LineHeightProps>`
  ${(props) => props.lineHeight && getLineHeight(props.lineHeight)}
  ${(props) => props['sm-lineHeight'] && responsiveMediaCss(getLineHeight(props['sm-lineHeight']), 'mobile')}
  ${(props) => props['md-lineHeight'] && responsiveMediaCss(getLineHeight(props['md-lineHeight']), 'tablet')}
  ${(props) => props['lg-lineHeight'] && responsiveMediaCss(getLineHeight(props['lg-lineHeight']), 'laptop')}
  ${(props) => props['xl-lineHeight'] && responsiveMediaCss(getLineHeight(props['xl-lineHeight']), 'desktop')}
`;
