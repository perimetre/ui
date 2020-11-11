import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type FontSizeProps = {
  fontSize?: ValueType<
    // | SpacingEnum
    | 'text-xs' // Caption |  12px
    | 'text-sm' // SmallerParagraph | 14px
    | 'text-base' // SmallParagraph | 16px
    | 'text-lg' // Paragraph | 18px
    | 'text-xl' // H5 | 20px
    | 'text-2xl' // H4 | 24px
    | 'text-3xl' // H3 | 30px
    | 'text-4xl' // H2 | 36px
    | 'text-5xl' // H1 | 48px
    | 'text-6xl' // 64px
  >;
};

export const systemFontSize = system({
  fontSize: {
    property: 'fontSize',
    transform: (value: string | undefined) => {
      switch (value) {
        case 'text-xs':
          return '0.75rem';
        case 'text-sm':
          return '0.875rem';
        case 'text-base':
          return '1rem';
        case 'text-lg':
          return '1.125rem';
        case 'text-xl':
          return '1.25rem';
        case 'text-2xl':
          return '1.5rem';
        case 'text-3xl':
          return '1.875rem';
        case 'text-4xl':
          return '2.25rem';
        case 'text-5xl':
          return '3rem';
        case 'text-6xl':
          return '4rem';
        default:
          return value;
      }
    }
  }
});

export const fontSizeCss = css<FontSizeProps>`
  ${systemFontSize}
`;

// TODO: test transform
// TODO: Add theme sizes
