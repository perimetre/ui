import { css } from 'styled-components';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = number;

export type NumberOfLinesProps = {
  numberOfLines?: ValueType;
  ['sm-numberOfLines']?: ValueType;
  ['md-numberOfLines']?: ValueType;
  ['lg-numberOfLines']?: ValueType;
  ['xl-numberOfLines']?: ValueType;
};

const getNumberOfLines = (numberOfLines: ValueType) => css`
  overflow: hidden;
  text-overflow: ellipsis;

  display: box;
  display: -webkit-box;

  box-orient: vertical;
  -webkit-box-orient: vertical;

  line-clamp: ${numberOfLines};
  -webkit-line-clamp: ${numberOfLines};
`;

export const numberOfLinesCss = css<NumberOfLinesProps>`
  ${(props) => props.numberOfLines && getNumberOfLines(props.numberOfLines)}
  ${(props) => props['sm-numberOfLines'] && responsiveMediaCss(getNumberOfLines(props['sm-numberOfLines']), 'mobile')}
  ${(props) => props['md-numberOfLines'] && responsiveMediaCss(getNumberOfLines(props['md-numberOfLines']), 'tablet')}
  ${(props) => props['lg-numberOfLines'] && responsiveMediaCss(getNumberOfLines(props['lg-numberOfLines']), 'laptop')}
  ${(props) => props['xl-numberOfLines'] && responsiveMediaCss(getNumberOfLines(props['xl-numberOfLines']), 'desktop')}
`;
