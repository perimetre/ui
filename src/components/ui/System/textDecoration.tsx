import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type TextDecorationProps = {
  textDecoration?: ValueType<Property.TextDecoration>;
};

export const systemTextDecoration = system({
  textDecoration: true
});

export const textDecorationCss = css<TextDecorationProps>`
  ${systemTextDecoration}
`;

// TODO: Add hover variant
