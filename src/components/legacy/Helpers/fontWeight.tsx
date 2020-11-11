import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.FontWeight;

export type FontWeightProps = {
  fontWeight?: ValueType;
  ['sm-fontWeight']?: ValueType;
  ['md-fontWeight']?: ValueType;
  ['lg-fontWeight']?: ValueType;
  ['xl-fontWeight']?: ValueType;
};

const getFontWeight = (fontWeight: ValueType) => css`
  font-weight: ${fontWeight};
`;

export const fontWeightCss = css<FontWeightProps>`
  ${(props) => props.fontWeight && getFontWeight(props.fontWeight)}
  ${(props) => props['sm-fontWeight'] && responsiveMediaCss(getFontWeight(props['sm-fontWeight']), 'mobile')}
  ${(props) => props['md-fontWeight'] && responsiveMediaCss(getFontWeight(props['md-fontWeight']), 'tablet')}
  ${(props) => props['lg-fontWeight'] && responsiveMediaCss(getFontWeight(props['lg-fontWeight']), 'laptop')}
  ${(props) => props['xl-fontWeight'] && responsiveMediaCss(getFontWeight(props['xl-fontWeight']), 'desktop')}
`;
