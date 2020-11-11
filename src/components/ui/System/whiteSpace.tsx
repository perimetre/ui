import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type WhiteSpaceProps = {
  whiteSpace?: ValueType<Property.WhiteSpace>;
};

export const systemWhiteSpace = system({
  whiteSpace: true
});

export const whiteSpaceCss = css<WhiteSpaceProps>`
  ${systemWhiteSpace}
`;
