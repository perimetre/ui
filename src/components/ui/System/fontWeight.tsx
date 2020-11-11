import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type FontWeightProps = {
  fontWeight?: ValueType<Property.FontWeight>;
};

export const systemFontWeight = system({
  fontWeight: true
});

export const fontWeightCss = css<FontWeightProps>`
  ${systemFontWeight}
`;
