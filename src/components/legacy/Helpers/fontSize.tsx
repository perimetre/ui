import { css } from 'styled-components';
import { SpacingEnum } from '../legacyTheme';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType =
  | SpacingEnum
  | 'text-xs' // Caption |  12px
  | 'text-sm' // SmallerParagraph | 14px
  | 'text-base' // SmallParagraph | 16px
  | 'text-lg' // Paragraph | 18px
  | 'text-xl' // H5 | 20px
  | 'text-2xl' // H4 | 24px
  | 'text-3xl' // H3 | 30px
  | 'text-4xl' // H2 | 36px
  | 'text-5xl' // H1 | 48px
  | 'text-6xl'; // 64px

export type FontSizeProps = {
  fontSize?: ValueType;
  ['sm-fontSize']?: ValueType;
  ['md-fontSize']?: ValueType;
  ['lg-fontSize']?: ValueType;
  ['xl-fontSize']?: ValueType;
};

const getFontSize = (fontSize: ValueType) => {
  switch (fontSize) {
    case 'text-xs':
      return css`
        font-size: 0.75rem;
      `;
    case 'text-sm':
      return css`
        font-size: 0.875rem;
      `;
    case 'text-base':
      return css`
        font-size: 1rem;
      `;
    case 'text-lg':
      return css`
        font-size: 1.125rem;
      `;
    case 'text-xl':
      return css`
        font-size: 1.25rem;
      `;
    case 'text-2xl':
      return css`
        font-size: 1.5rem;
      `;
    case 'text-3xl':
      return css`
        font-size: 1.875rem;
      `;
    case 'text-4xl':
      return css`
        font-size: 2.25rem;
      `;
    case 'text-5xl':
      return css`
        font-size: 3rem;
      `;
    case 'text-6xl':
      return css`
        font-size: 4rem;
      `;
    default:
      return css`
        font-size: ${(props) => props.theme.spacing[fontSize]};
      `;
  }
};

export const fontSizeCss = css<FontSizeProps>`
  ${(props) => props.fontSize && getFontSize(props.fontSize)}
  ${(props) => props['sm-fontSize'] && responsiveMediaCss(getFontSize(props['sm-fontSize']), 'mobile')}
  ${(props) => props['md-fontSize'] && responsiveMediaCss(getFontSize(props['md-fontSize']), 'tablet')}
  ${(props) => props['lg-fontSize'] && responsiveMediaCss(getFontSize(props['lg-fontSize']), 'laptop')}
  ${(props) => props['xl-fontSize'] && responsiveMediaCss(getFontSize(props['xl-fontSize']), 'desktop')}
`;
