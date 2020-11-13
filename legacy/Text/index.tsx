import styled, { css } from 'styled-components';
import { FontSizeProps, fontSizeCss } from '../Helpers/fontSize';
import { FontWeightProps, fontWeightCss } from '../Helpers/fontWeight';
import { FontStyleProps, fontStyleCss } from '../Helpers/fontStyle';
import { LetterSpacingProps, letterSpacingCss } from '../Helpers/letterSpacing';
import { LineHeightProps, lineHeightCss } from '../Helpers/lineHeight';
import { TextAlignProps, textAlignCss } from '../Helpers/textAlign';
import { TextDecorationProps, textDecorationCss } from '../Helpers/textDecoration';
import { TextTransformProps, textTransformCss } from '../Helpers/textTransform';
import { WhiteSpaceProps, whiteSpaceCss } from '../Helpers/whiteSpace';
import { WordBreakProps, wordBreakCss } from '../Helpers/wordBreak';
import { NumberOfLinesProps, numberOfLinesCss } from '../Helpers/numberOfLines';
import { ColorProps, colorCss } from '../Helpers/color';
import { OpacityProps, opacityCss } from '../Helpers/opacity';
import { SizingProps, sizingCss } from '../Helpers/sizing';
import { UserSelectProps, userSelectCss } from '../Helpers/userSelect';
import { SpacingHelperProps, spacingHelperCss } from '../Helpers/spacing';
import { BackgroundColorProps, backgroundColorCss } from '../Helpers/backgroundColor';
import { ClipTextProps, clipTextCss } from '../Helpers/clipText';

export type TextCssProps = FontSizeProps &
  FontWeightProps &
  FontStyleProps &
  LetterSpacingProps &
  LineHeightProps &
  TextAlignProps &
  TextDecorationProps &
  TextTransformProps &
  WhiteSpaceProps &
  WordBreakProps &
  NumberOfLinesProps &
  ColorProps &
  OpacityProps &
  SizingProps &
  UserSelectProps &
  SpacingHelperProps &
  BackgroundColorProps &
  ClipTextProps;

export const textCss = css<TextCssProps>`
  ${fontSizeCss}
  ${fontWeightCss}
  ${fontStyleCss}
  ${letterSpacingCss}
  ${lineHeightCss}
  ${textAlignCss}
  ${textDecorationCss}
  ${textTransformCss}
  ${whiteSpaceCss}
  ${wordBreakCss}
  ${numberOfLinesCss}
  ${colorCss}
  ${opacityCss}
  ${sizingCss}
  ${userSelectCss}
  ${spacingHelperCss}
  ${backgroundColorCss}
  ${clipTextCss}
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
