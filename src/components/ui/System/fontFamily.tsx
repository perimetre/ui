import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type FontFamilyProps = {
  fontFamily?: ValueType<Property.FontFamily>;
};

export const systemFontFamily = system({
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  }
});

export const fontFamilyCss = css<FontFamilyProps>`
  ${systemFontFamily}
`;
