import { Property } from 'csstype';
import { css } from 'styled-components';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.AlignContent;

export type AlignContentProps = {
  alignContent?: ValueType;
  ['sm-alignContent']?: ValueType;
  ['md-alignContent']?: ValueType;
  ['lg-alignContent']?: ValueType;
  ['xl-alignContent']?: ValueType;
};

const getAlignContent = (alignContent: ValueType) => css`
  align-content: ${alignContent};
`;

export const alignContentCss = css<AlignContentProps>`
  ${(props) => props.alignContent && getAlignContent(props.alignContent)}
  ${(props) => props['sm-alignContent'] && responsiveMediaCss(getAlignContent(props['sm-alignContent']), 'mobile')}
  ${(props) => props['md-alignContent'] && responsiveMediaCss(getAlignContent(props['md-alignContent']), 'tablet')}
  ${(props) => props['lg-alignContent'] && responsiveMediaCss(getAlignContent(props['lg-alignContent']), 'laptop')}
  ${(props) => props['xl-alignContent'] && responsiveMediaCss(getAlignContent(props['xl-alignContent']), 'desktop')}
`;
