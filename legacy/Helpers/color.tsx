import { css } from 'styled-components';
import { AppTheme } from '../legacyTheme';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = keyof AppTheme['colors'];

type ColorNormalProps = {
  color?: ValueType;
  ['sm-color']?: ValueType;
  ['md-color']?: ValueType;
  ['lg-color']?: ValueType;
  ['xl-color']?: ValueType;
};

const getColorNormal = (color: ValueType) => css`
  color: ${(props) => props.theme.colors[color]};
`;

const colorNormalCss = css<ColorNormalProps>`
  ${(props) => props.color && getColorNormal(props.color)}
  ${(props) => props['sm-color'] && responsiveMediaCss(getColorNormal(props['sm-color']), 'mobile')}
  ${(props) => props['md-color'] && responsiveMediaCss(getColorNormal(props['md-color']), 'tablet')}
  ${(props) => props['lg-color'] && responsiveMediaCss(getColorNormal(props['lg-color']), 'laptop')}
  ${(props) => props['xl-color'] && responsiveMediaCss(getColorNormal(props['xl-color']), 'desktop')}
`;

type ColorHoverProps = {
  ['color-hover']?: ValueType;
  ['sm-color-hover']?: ValueType;
  ['md-color-hover']?: ValueType;
  ['lg-color-hover']?: ValueType;
  ['xl-color-hover']?: ValueType;
};

const getColorhover = (colorHover: ValueType) => css`
  transition: color 100ms ease-out;

  &:hover {
    color: ${(props) => props.theme.colors[colorHover]};
  }
`;

const colorHoverCss = css<ColorHoverProps>`
  ${(props) => props['color-hover'] && getColorhover(props['color-hover'])}
  ${(props) => props['sm-color-hover'] && responsiveMediaCss(getColorhover(props['sm-color-hover']), 'mobile')}
  ${(props) => props['md-color-hover'] && responsiveMediaCss(getColorhover(props['md-color-hover']), 'tablet')}
  ${(props) => props['lg-color-hover'] && responsiveMediaCss(getColorhover(props['lg-color-hover']), 'laptop')}
  ${(props) => props['xl-color-hover'] && responsiveMediaCss(getColorhover(props['xl-color-hover']), 'desktop')}
`;

export type ColorProps = ColorNormalProps & ColorHoverProps;

export const colorCss = css`
  ${colorNormalCss}
  ${colorHoverCss}
`;
