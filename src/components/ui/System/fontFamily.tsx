import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import { ThemeFontFamiliesEnum } from '../Theme/theme';
import ValueType from './valueType';

export type FontFamilyProps = {
  fontFamily?: ValueType<ThemeFontFamiliesEnum | Property.FontFamily>;
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
