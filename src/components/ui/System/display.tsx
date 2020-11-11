import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type DisplayProps = {
  display?: ValueType<Property.Display>;
};

export const systemDisplay = system({
  display: true
});

export const displayCss = css<DisplayProps>`
  ${systemDisplay}
`;
