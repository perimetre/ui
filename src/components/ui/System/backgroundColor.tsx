import { css } from 'styled-components';
import { ConfigStyle, system } from 'styled-system';
import { ThemeColorsEnum } from '../Theme/theme';
import ValueType from './valueType';

type ScaleType = ValueType<ThemeColorsEnum>;

export type BackgroundColorProps = {
  backgroundColor?: ScaleType;
  bg?: ScaleType;
};

const config: Record<string, ConfigStyle> = {
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  }
};

// alias
config.bg = config.backgroundColor;

export const systemBackgroundColor = system(config);

export const backgroundColorCss = css<BackgroundColorProps>`
  ${systemBackgroundColor}
`;

// TODO: Add hover variant
