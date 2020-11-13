import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.Opacity;

type OpacityNormalProps = {
  opacity?: ValueType;
  ['sm-opacity']?: ValueType;
  ['md-opacity']?: ValueType;
  ['lg-opacity']?: ValueType;
  ['xl-opacity']?: ValueType;
};

const getOpacityNormal = (opacity: ValueType) => css`
  opacity: ${opacity};
`;

const opacityNormalCss = css<OpacityNormalProps>`
  ${(props) => props.opacity && getOpacityNormal(props.opacity)}
  ${(props) => props['sm-opacity'] && responsiveMediaCss(getOpacityNormal(props['sm-opacity']), 'mobile')}
  ${(props) => props['md-opacity'] && responsiveMediaCss(getOpacityNormal(props['md-opacity']), 'tablet')}
  ${(props) => props['lg-opacity'] && responsiveMediaCss(getOpacityNormal(props['lg-opacity']), 'laptop')}
  ${(props) => props['xl-opacity'] && responsiveMediaCss(getOpacityNormal(props['xl-opacity']), 'desktop')}
`;

type OpacityHoverProps = {
  ['opacity-hover']?: ValueType;
  ['sm-opacity-hover']?: ValueType;
  ['md-opacity-hover']?: ValueType;
  ['lg-opacity-hover']?: ValueType;
  ['xl-opacity-hover']?: ValueType;
};

const getOpacityhover = (opacityHover: ValueType) => css`
  transition: opacity 100ms ease-out;

  &:hover {
    opacity: ${opacityHover};
  }
`;

const opacityHoverCss = css<OpacityHoverProps>`
  ${(props) => props['opacity-hover'] && getOpacityhover(props['opacity-hover'])}
  ${(props) => props['sm-opacity-hover'] && responsiveMediaCss(getOpacityhover(props['sm-opacity-hover']), 'mobile')}
  ${(props) => props['md-opacity-hover'] && responsiveMediaCss(getOpacityhover(props['md-opacity-hover']), 'tablet')}
  ${(props) => props['lg-opacity-hover'] && responsiveMediaCss(getOpacityhover(props['lg-opacity-hover']), 'laptop')}
  ${(props) => props['xl-opacity-hover'] && responsiveMediaCss(getOpacityhover(props['xl-opacity-hover']), 'desktop')}
`;

export type OpacityProps = OpacityNormalProps & OpacityHoverProps;

export const opacityCss = css`
  ${opacityNormalCss}
  ${opacityHoverCss}
`;
