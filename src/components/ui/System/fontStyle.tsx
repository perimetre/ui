import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type FontStyleProps = {
  fontStyle?: ValueType<Property.FontStyle>;
};

export const systemFontStyle = system({
  fontStyle: true
});

export const fontStyleCss = css<FontStyleProps>`
  ${systemFontStyle}
`;
