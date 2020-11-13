import styled from 'styled-components';
import { textCss, TextCssProps } from '../System/text';

export type TextProps = TextCssProps;

export const H1 = styled.h1<TextProps>`
  ${textCss}
`;
export const H2 = styled.h2<TextProps>`
  ${textCss}
`;
export const H3 = styled.h3<TextProps>`
  ${textCss}
`;
export const H4 = styled.h4<TextProps>`
  ${textCss}
`;
export const H5 = styled.h5<TextProps>`
  ${textCss}
`;
export const H6 = styled.h6<TextProps>`
  ${textCss}
`;
export const Paragraph = styled.p<TextProps>`
  ${textCss}
`;
export const Span = styled.span<TextProps>`
  ${textCss}
`;
export const Div = styled.div<TextProps>`
  ${textCss}
`;
export const Link = styled.a<TextProps>`
  ${textCss}
`;
export const List = styled.li<TextProps>`
  ${textCss}
`;
export const Label = styled.label<TextProps>`
  ${textCss}
`;
export const TH = styled.th<TextProps>`
  ${textCss}
`;
export const TD = styled.td<TextProps>`
  ${textCss}
`;
