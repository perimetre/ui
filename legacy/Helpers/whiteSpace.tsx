import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.WhiteSpace;

export type WhiteSpaceProps = {
  whiteSpace?: ValueType;
  ['sm-whiteSpace']?: ValueType;
  ['md-whiteSpace']?: ValueType;
  ['lg-whiteSpace']?: ValueType;
  ['xl-whiteSpace']?: ValueType;
};

const getWhiteSpace = (whiteSpace: ValueType) => css`
  white-space: ${whiteSpace};
`;

export const whiteSpaceCss = css<WhiteSpaceProps>`
  ${(props) => props.whiteSpace && getWhiteSpace(props.whiteSpace)}
  ${(props) => props['sm-whiteSpace'] && responsiveMediaCss(getWhiteSpace(props['sm-whiteSpace']), 'mobile')}
  ${(props) => props['md-whiteSpace'] && responsiveMediaCss(getWhiteSpace(props['md-whiteSpace']), 'tablet')}
  ${(props) => props['lg-whiteSpace'] && responsiveMediaCss(getWhiteSpace(props['lg-whiteSpace']), 'laptop')}
  ${(props) => props['xl-whiteSpace'] && responsiveMediaCss(getWhiteSpace(props['xl-whiteSpace']), 'desktop')}
`;
