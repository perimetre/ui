import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.Display;

export type DisplayProps = {
  display?: ValueType;
  ['sm-display']?: ValueType;
  ['md-display']?: ValueType;
  ['lg-display']?: ValueType;
  ['xl-display']?: ValueType;
};

const getDisplay = (display: ValueType) => css`
  display: ${display};
`;

export const displayCss = css<DisplayProps>`
  ${(props) => props.display && getDisplay(props.display)}
  ${(props) => props['sm-display'] && responsiveMediaCss(getDisplay(props['sm-display']), 'mobile')}
  ${(props) => props['md-display'] && responsiveMediaCss(getDisplay(props['md-display']), 'tablet')}
  ${(props) => props['lg-display'] && responsiveMediaCss(getDisplay(props['lg-display']), 'laptop')}
  ${(props) => props['xl-display'] && responsiveMediaCss(getDisplay(props['xl-display']), 'desktop')}
`;
