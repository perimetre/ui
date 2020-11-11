import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.JustifyContent;

export type JustifyContentProps = {
  justifyContent?: ValueType;
  ['sm-justifyContent']?: ValueType;
  ['md-justifyContent']?: ValueType;
  ['lg-justifyContent']?: ValueType;
  ['xl-justifyContent']?: ValueType;
};

const getJustifyContent = (justifyContent: ValueType) => css`
  justify-content: ${justifyContent};
`;

export const justifyContentCss = css<JustifyContentProps>`
  ${(props) => props.justifyContent && getJustifyContent(props.justifyContent)}
  ${(props) =>
    props['sm-justifyContent'] && responsiveMediaCss(getJustifyContent(props['sm-justifyContent']), 'mobile')}
  ${(props) =>
    props['md-justifyContent'] && responsiveMediaCss(getJustifyContent(props['md-justifyContent']), 'tablet')}
  ${(props) =>
    props['lg-justifyContent'] && responsiveMediaCss(getJustifyContent(props['lg-justifyContent']), 'laptop')}
  ${(props) =>
    props['xl-justifyContent'] && responsiveMediaCss(getJustifyContent(props['xl-justifyContent']), 'desktop')}
`;
