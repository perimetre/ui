import { css } from 'styled-components';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = boolean;

export type FlexGrowProps = {
  flexGrow?: ValueType;
  ['sm-flexGrow']?: ValueType;
  ['md-flexGrow']?: ValueType;
  ['lg-flexGrow']?: ValueType;
  ['xl-flexGrow']?: ValueType;
};

const getFlexGrow = (flexGrow: ValueType) => css`
  flex-grow: ${flexGrow === false ? '0' : '1'};
`;

export const flexGrowCss = css<FlexGrowProps>`
  ${(props) => props.flexGrow && getFlexGrow(props.flexGrow)}
  ${(props) => props['sm-flexGrow'] && responsiveMediaCss(getFlexGrow(props['sm-flexGrow']), 'mobile')}
  ${(props) => props['md-flexGrow'] && responsiveMediaCss(getFlexGrow(props['md-flexGrow']), 'tablet')}
  ${(props) => props['lg-flexGrow'] && responsiveMediaCss(getFlexGrow(props['lg-flexGrow']), 'laptop')}
  ${(props) => props['xl-flexGrow'] && responsiveMediaCss(getFlexGrow(props['xl-flexGrow']), 'desktop')}
`;
