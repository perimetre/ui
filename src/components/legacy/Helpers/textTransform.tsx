import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.TextTransform;

export type TextTransformProps = {
  textTransform?: ValueType;
  ['sm-textTransform']?: ValueType;
  ['md-textTransform']?: ValueType;
  ['lg-textTransform']?: ValueType;
  ['xl-textTransform']?: ValueType;
};

const getTextTransform = (textTransform: ValueType) => css`
  text-transform: ${textTransform};
`;

export const textTransformCss = css<TextTransformProps>`
  ${(props) => props.textTransform && getTextTransform(props.textTransform)}
  ${(props) => props['sm-textTransform'] && responsiveMediaCss(getTextTransform(props['sm-textTransform']), 'mobile')}
  ${(props) => props['md-textTransform'] && responsiveMediaCss(getTextTransform(props['md-textTransform']), 'tablet')}
  ${(props) => props['lg-textTransform'] && responsiveMediaCss(getTextTransform(props['lg-textTransform']), 'laptop')}
  ${(props) => props['xl-textTransform'] && responsiveMediaCss(getTextTransform(props['xl-textTransform']), 'desktop')}
`;
