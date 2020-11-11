import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type ColorProps = {
  color?: ValueType<Property.Color>;
};

export const systemColor = system({
  color: true
});

export const colorCss = css<ColorProps>`
  ${systemColor}
`;

// TODO: Add hover variant
// TODO: Add theme colors
