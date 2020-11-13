import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.FlexWrap;

export type FlexWrapProps = {
  flexWrap?: ValueType;
  ['sm-flexWrap']?: ValueType;
  ['md-flexWrap']?: ValueType;
  ['lg-flexWrap']?: ValueType;
  ['xl-flexWrap']?: ValueType;
};

const getFlexWrap = (flexWrap: ValueType) => css`
  flex-wrap: ${flexWrap};
`;

export const flexWrapCss = css<FlexWrapProps>`
  ${(props) => props.flexWrap && getFlexWrap(props.flexWrap)}
  ${(props) => props['sm-flexWrap'] && responsiveMediaCss(getFlexWrap(props['sm-flexWrap']), 'mobile')}
  ${(props) => props['md-flexWrap'] && responsiveMediaCss(getFlexWrap(props['md-flexWrap']), 'tablet')}
  ${(props) => props['lg-flexWrap'] && responsiveMediaCss(getFlexWrap(props['lg-flexWrap']), 'laptop')}
  ${(props) => props['xl-flexWrap'] && responsiveMediaCss(getFlexWrap(props['xl-flexWrap']), 'desktop')}
`;
