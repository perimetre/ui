import styled, { css } from 'styled-components';
import { compose } from 'styled-system';
import { FontSizeProps, systemFontSize } from '../System/fontSize';
import { FontWeightProps, systemFontWeight } from '../System/fontWeight';
import { FontStyleProps, systemFontStyle } from '../System/fontStyle';
import { LetterSpacingProps, systemLetterSpacing } from '../System/letterSpacing';
import { LineHeightProps, systemLineHeight } from '../System/lineHeight';
import { TextAlignProps, systemTextAlign } from '../System/textAlign';
import { TextDecorationProps, systemTextDecoration } from '../System/textDecoration';
import { TextTransformProps, systemTextTransform } from '../System/textTransform';
import { WhiteSpaceProps, systemWhiteSpace } from '../System/whiteSpace';
import { ColorProps, systemColor } from '../System/color';
import { OpacityProps, systemOpacity } from '../System/opacity';
import { SizingProps, systemSizing } from '../System/sizing';
import { UserSelectProps, systemUserSelect } from '../System/userSelect';
import { BackgroundColorProps, systemBackgroundColor } from '../System/backgroundColor';
import { SpacingProps, systemSpacing } from '../System/spacing';

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
  SpacingProps;

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
  systemSpacing
);

export const textCss = css<TextCssProps>`
  ${textSystem}
`;

export default {
  H1: styled.h1`
    ${textCss}
  `,
  H2: styled.h2`
    ${textCss}
  `,
  H3: styled.h3`
    ${textCss}
  `,
  H4: styled.h4`
    ${textCss}
  `,
  H5: styled.h5`
    ${textCss}
  `,
  H6: styled.h6`
    ${textCss}
  `,
  Paragraph: styled.p`
    ${textCss}
  `,
  Span: styled.span`
    ${textCss}
  `,
  Div: styled.div`
    ${textCss}
  `,
  Link: styled.a`
    ${textCss}
  `,
  List: styled.li`
    ${textCss}
  `,
  Label: styled.label`
    ${textCss}
  `,
  TH: styled.th`
    ${textCss}
  `,
  TD: styled.td`
    ${textCss}
  `
};
