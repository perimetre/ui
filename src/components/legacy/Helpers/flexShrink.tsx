import { css } from 'styled-components';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = boolean;

export type FlexShrinkProps = {
  flexShrink?: ValueType;
  ['sm-flexShrink']?: ValueType;
  ['md-flexShrink']?: ValueType;
  ['lg-flexShrink']?: ValueType;
  ['xl-flexShrink']?: ValueType;
};

const getFlexShrink = (flexShrink: ValueType) => css`
  flex-shrink: ${flexShrink === false ? '0' : '1'};
`;

export const flexShrinkCss = css<FlexShrinkProps>`
  ${(props) => props.flexShrink && getFlexShrink(props.flexShrink)}
  ${(props) => props['sm-flexShrink'] && responsiveMediaCss(getFlexShrink(props['sm-flexShrink']), 'mobile')}
  ${(props) => props['md-flexShrink'] && responsiveMediaCss(getFlexShrink(props['md-flexShrink']), 'tablet')}
  ${(props) => props['lg-flexShrink'] && responsiveMediaCss(getFlexShrink(props['lg-flexShrink']), 'laptop')}
  ${(props) => props['xl-flexShrink'] && responsiveMediaCss(getFlexShrink(props['xl-flexShrink']), 'desktop')}
`;
