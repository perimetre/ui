import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type LetterSpacingProps = {
  letterSpacing?: ValueType<Property.LetterSpacing>;
};

export const systemLetterSpacing = system({
  letterSpacing: true
});

export const letterSpacingCss = css<LetterSpacingProps>`
  ${systemLetterSpacing}
`;

// TODO: Add theme spacings
