import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.AlignSelf;

export type AlignSelfProps = {
  alignSelf?: ValueType;
  ['sm-alignSelf']?: ValueType;
  ['md-alignSelf']?: ValueType;
  ['lg-alignSelf']?: ValueType;
  ['xl-alignSelf']?: ValueType;
};

const getAlignSelf = (alignSelf: ValueType) => css`
  align-self: ${alignSelf};
`;

export const alignSelfCss = css<AlignSelfProps>`
  ${(props) => props.alignSelf && getAlignSelf(props.alignSelf)}
  ${(props) => props['sm-alignSelf'] && responsiveMediaCss(getAlignSelf(props['sm-alignSelf']), 'mobile')}
  ${(props) => props['md-alignSelf'] && responsiveMediaCss(getAlignSelf(props['md-alignSelf']), 'tablet')}
  ${(props) => props['lg-alignSelf'] && responsiveMediaCss(getAlignSelf(props['lg-alignSelf']), 'laptop')}
  ${(props) => props['xl-alignSelf'] && responsiveMediaCss(getAlignSelf(props['xl-alignSelf']), 'desktop')}
`;
