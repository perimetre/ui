import { css } from 'styled-components';
import { AppTheme } from '../legacyTheme';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = keyof AppTheme['colors'];

type BackgroundColorNormalProps = {
  backgroundColor?: ValueType;
  ['sm-backgroundColor']?: ValueType;
  ['md-backgroundColor']?: ValueType;
  ['lg-backgroundColor']?: ValueType;
  ['xl-backgroundColor']?: ValueType;
};

const getBackgroundColorNormal = (backgroundColor: ValueType) => css`
  background-color: ${(props) => props.theme.colors[backgroundColor]};
`;

const backgroundColorNormalCss = css<BackgroundColorNormalProps>`
  ${(props) => props.backgroundColor && getBackgroundColorNormal(props.backgroundColor)}
  ${(props) =>
    props['sm-backgroundColor'] && responsiveMediaCss(getBackgroundColorNormal(props['sm-backgroundColor']), 'mobile')}
  ${(props) =>
    props['md-backgroundColor'] && responsiveMediaCss(getBackgroundColorNormal(props['md-backgroundColor']), 'tablet')}
  ${(props) =>
    props['lg-backgroundColor'] && responsiveMediaCss(getBackgroundColorNormal(props['lg-backgroundColor']), 'laptop')}
  ${(props) =>
    props['xl-backgroundColor'] && responsiveMediaCss(getBackgroundColorNormal(props['xl-backgroundColor']), 'desktop')}
`;

type BackgroundColorHoverProps = {
  ['backgroundColor-hover']?: ValueType;
  ['sm-backgroundColor-hover']?: ValueType;
  ['md-backgroundColor-hover']?: ValueType;
  ['lg-backgroundColor-hover']?: ValueType;
  ['xl-backgroundColor-hover']?: ValueType;
};

const getBackgroundColorhover = (backgroundColorHover: ValueType) => css`
  transition: background-color 100ms ease-out;

  &:hover {
    background-color: ${(props) => props.theme.colors[backgroundColorHover]};
  }
`;

const backgroundColorHoverCss = css<BackgroundColorHoverProps>`
  ${(props) => props['backgroundColor-hover'] && getBackgroundColorhover(props['backgroundColor-hover'])}
  ${(props) =>
    props['sm-backgroundColor-hover'] &&
    responsiveMediaCss(getBackgroundColorhover(props['sm-backgroundColor-hover']), 'mobile')}
  ${(props) =>
    props['md-backgroundColor-hover'] &&
    responsiveMediaCss(getBackgroundColorhover(props['md-backgroundColor-hover']), 'tablet')}
  ${(props) =>
    props['lg-backgroundColor-hover'] &&
    responsiveMediaCss(getBackgroundColorhover(props['lg-backgroundColor-hover']), 'laptop')}
  ${(props) =>
    props['xl-backgroundColor-hover'] &&
    responsiveMediaCss(getBackgroundColorhover(props['xl-backgroundColor-hover']), 'desktop')}
`;

export type BackgroundColorProps = BackgroundColorNormalProps & BackgroundColorHoverProps;

export const backgroundColorCss = css`
  ${backgroundColorNormalCss}
  ${backgroundColorHoverCss}
`;
