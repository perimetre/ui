import { screens } from './legacyTheme';
import { css, FlattenInterpolation, ThemedStyledProps, DefaultTheme } from 'styled-components';

export const responsiveMediaQuery = (min: keyof typeof screens, max?: keyof typeof screens | boolean) => {
  if (typeof max === 'boolean') return `@media screen and (max-width:${screens[min]}px)`;
  if (!max) return `@media screen and (min-width:${screens[min]}px)`;
  return `@media screen and (min-width:${screens[min]}px) and (max-width:${screens[max]}px)`;
};

export const responsiveMediaCss = <
  T extends Record<string, unknown>,
  V extends FlattenInterpolation<ThemedStyledProps<T, DefaultTheme>>
>(
  cssVal: V,
  min: keyof typeof screens,
  max?: keyof typeof screens | boolean
) => css`
  ${responsiveMediaQuery(min, max)} {
    ${cssVal}
  }
`;
