import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.AlignItems;

export type AlignItemsProps = {
  alignItems?: ValueType;
  ['sm-alignItems']?: ValueType;
  ['md-alignItems']?: ValueType;
  ['lg-alignItems']?: ValueType;
  ['xl-alignItems']?: ValueType;
};

const getAlignItems = (alignItems: ValueType) => css`
  align-items: ${alignItems};
`;

export const alignItemsCss = css<AlignItemsProps>`
  ${(props) => props.alignItems && getAlignItems(props.alignItems)}
  ${(props) => props['sm-alignItems'] && responsiveMediaCss(getAlignItems(props['sm-alignItems']), 'mobile')}
  ${(props) => props['md-alignItems'] && responsiveMediaCss(getAlignItems(props['md-alignItems']), 'tablet')}
  ${(props) => props['lg-alignItems'] && responsiveMediaCss(getAlignItems(props['lg-alignItems']), 'laptop')}
  ${(props) => props['xl-alignItems'] && responsiveMediaCss(getAlignItems(props['xl-alignItems']), 'desktop')}
`;
