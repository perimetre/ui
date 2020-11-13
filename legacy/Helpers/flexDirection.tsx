import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.FlexDirection;

export type FlexDirectionProps = {
  flexDirection?: ValueType;
  ['sm-flexDirection']?: ValueType;
  ['md-flexDirection']?: ValueType;
  ['lg-flexDirection']?: ValueType;
  ['xl-flexDirection']?: ValueType;
};

const getFlexDirection = (flexDirection: ValueType) => css`
  flex-direction: ${flexDirection};
`;

export const flexDirectionCss = css<FlexDirectionProps>`
  ${(props) => props.flexDirection && getFlexDirection(props.flexDirection)}
  ${(props) => props['sm-flexDirection'] && responsiveMediaCss(getFlexDirection(props['sm-flexDirection']), 'mobile')}
  ${(props) => props['md-flexDirection'] && responsiveMediaCss(getFlexDirection(props['md-flexDirection']), 'tablet')}
  ${(props) => props['lg-flexDirection'] && responsiveMediaCss(getFlexDirection(props['lg-flexDirection']), 'laptop')}
  ${(props) => props['xl-flexDirection'] && responsiveMediaCss(getFlexDirection(props['xl-flexDirection']), 'desktop')}
`;
