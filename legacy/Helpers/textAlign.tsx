import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.TextAlign;

export type TextAlignProps = {
  textAlign?: ValueType;
  ['sm-textAlign']?: ValueType;
  ['md-textAlign']?: ValueType;
  ['lg-textAlign']?: ValueType;
  ['xl-textAlign']?: ValueType;
};

const getTextAlign = (textAlign: ValueType) => css`
  text-align: ${textAlign};
`;

export const textAlignCss = css<TextAlignProps>`
  ${(props) => props.textAlign && getTextAlign(props.textAlign)}
  ${(props) => props['sm-textAlign'] && responsiveMediaCss(getTextAlign(props['sm-textAlign']), 'mobile')}
  ${(props) => props['md-textAlign'] && responsiveMediaCss(getTextAlign(props['md-textAlign']), 'tablet')}
  ${(props) => props['lg-textAlign'] && responsiveMediaCss(getTextAlign(props['lg-textAlign']), 'laptop')}
  ${(props) => props['xl-textAlign'] && responsiveMediaCss(getTextAlign(props['xl-textAlign']), 'desktop')}
`;
