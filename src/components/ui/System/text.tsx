import { css } from 'styled-components';
import { compose } from 'styled-system';
import { BackgroundColorProps, systemBackgroundColor } from './backgroundColor';
import { ColorProps, systemColor } from './color';
import { FontFamilyProps, systemFontFamily } from './fontFamily';
import { FontSizeProps, systemFontSize } from './fontSize';
import { FontStyleProps, systemFontStyle } from './fontStyle';
import { FontWeightProps, systemFontWeight } from './fontWeight';
import { LetterSpacingProps, systemLetterSpacing } from './letterSpacing';
import { LineHeightProps, systemLineHeight } from './lineHeight';
import { OpacityProps, systemOpacity } from './opacity';
import { SizingProps, systemSizing } from './sizing';
import { SpacingProps, systemSpacing } from './spacing';
import { systemTextAlign, TextAlignProps } from './textAlign';
import { systemTextDecoration, TextDecorationProps } from './textDecoration';
import { systemTextTransform, TextTransformProps } from './textTransform';
import { systemUserSelect, UserSelectProps } from './userSelect';
import { systemWhiteSpace, WhiteSpaceProps } from './whiteSpace';

export type TextCssProps = FontSizeProps &
  FontWeightProps &
  FontStyleProps &
  LetterSpacingProps &
  LineHeightProps &
  TextAlignProps &
  TextDecorationProps &
  TextTransformProps &
  WhiteSpaceProps &
  ColorProps &
  OpacityProps &
  SizingProps &
  UserSelectProps &
  BackgroundColorProps &
  SpacingProps &
  FontFamilyProps;

export const textSystem = compose(
  systemFontSize,
  systemFontWeight,
  systemFontStyle,
  systemLetterSpacing,
  systemLineHeight,
  systemTextAlign,
  systemTextDecoration,
  systemTextTransform,
  systemWhiteSpace,
  systemColor,
  systemOpacity,
  systemSizing,
  systemUserSelect,
  systemBackgroundColor,
  systemSpacing,
  systemFontFamily
);

export const textCss = css<TextCssProps>`
  ${textSystem}
`;
