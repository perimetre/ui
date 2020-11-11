import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.FontStyle;

export type FontStyleProps = {
  fontStyle?: ValueType;
  ['sm-fontStyle']?: ValueType;
  ['md-fontStyle']?: ValueType;
  ['lg-fontStyle']?: ValueType;
  ['xl-fontStyle']?: ValueType;
};

const getFontStyle = (fontStyle: ValueType) => css`
  font-style: ${fontStyle};
`;

export const fontStyleCss = css<FontStyleProps>`
  ${(props) => props.fontStyle && getFontStyle(props.fontStyle)}
  ${(props) => props['sm-fontStyle'] && responsiveMediaCss(getFontStyle(props['sm-fontStyle']), 'mobile')}
  ${(props) => props['md-fontStyle'] && responsiveMediaCss(getFontStyle(props['md-fontStyle']), 'tablet')}
  ${(props) => props['lg-fontStyle'] && responsiveMediaCss(getFontStyle(props['lg-fontStyle']), 'laptop')}
  ${(props) => props['xl-fontStyle'] && responsiveMediaCss(getFontStyle(props['xl-fontStyle']), 'desktop')}
`;
