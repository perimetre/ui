import { Property } from 'csstype';
import { css } from 'styled-components';
import { system, ConfigStyle } from 'styled-system';
import ValueType from './valueType';

export type BackgroundColorProps = {
  backgroundColor?: ValueType<Property.BackgroundColor>;
  bg?: ValueType<Property.BackgroundColor>;
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
// TODO: Add theme colors
