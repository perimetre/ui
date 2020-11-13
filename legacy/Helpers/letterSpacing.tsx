import { css } from 'styled-components';
import { SpacingEnum } from '../legacyTheme';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = SpacingEnum;

export type LetterSpacingProps = {
  letterSpacing?: ValueType;
  ['sm-letterSpacing']?: ValueType;
  ['md-letterSpacing']?: ValueType;
  ['lg-letterSpacing']?: ValueType;
  ['xl-letterSpacing']?: ValueType;
};

const getLetterSpacing = (letterSpacing: ValueType) => css`
  letter-spacing: ${(props) => props.theme.spacing[letterSpacing]};
`;

export const letterSpacingCss = css<LetterSpacingProps>`
  ${(props) => props.letterSpacing && getLetterSpacing(props.letterSpacing)}
  ${(props) => props['sm-letterSpacing'] && responsiveMediaCss(getLetterSpacing(props['sm-letterSpacing']), 'mobile')}
  ${(props) => props['md-letterSpacing'] && responsiveMediaCss(getLetterSpacing(props['md-letterSpacing']), 'tablet')}
  ${(props) => props['lg-letterSpacing'] && responsiveMediaCss(getLetterSpacing(props['lg-letterSpacing']), 'laptop')}
  ${(props) => props['xl-letterSpacing'] && responsiveMediaCss(getLetterSpacing(props['xl-letterSpacing']), 'desktop')}
`;
