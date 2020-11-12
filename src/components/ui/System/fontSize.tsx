import { css } from 'styled-components';
import { system } from 'styled-system';
import { defaultTheme, ThemeFontSizesEnum } from '../Theme/theme';
import ValueType from './valueType';

export type FontSizeProps = {
  fontSize?: ValueType<ThemeFontSizesEnum>;
};

export const systemFontSize = system({
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaultTheme.fontSizes
  }
});

export const fontSizeCss = css<FontSizeProps>`
  ${systemFontSize}
`;
