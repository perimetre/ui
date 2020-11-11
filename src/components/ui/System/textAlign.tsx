import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type TextAlignProps = {
  textAlign?: ValueType<Property.TextAlign>;
};

export const systemTextAlign = system({
  textAlign: true
});

export const textAlignCss = css<TextAlignProps>`
  ${systemTextAlign}
`;
