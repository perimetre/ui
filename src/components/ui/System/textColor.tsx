import { css } from 'styled-components';
import { system } from 'styled-system';
import { ThemeColorsEnum } from '../Theme/theme';
import ValueType from './valueType';

export type ColorProps = {
  textColor?: ValueType<ThemeColorsEnum>;
};

export const systemColor = system({
  textColor: {
    property: 'color',
    scale: 'colors'
  }
});

export const colorCss = css<ColorProps>`
  ${systemColor}
`;

// TODO: Add hover variant
