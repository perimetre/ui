import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type JustifyContentProps = {
  justifyContent?: ValueType<Property.JustifyContent>;
};

export const systemJustifyContent = system({
  justifyContent: true
});

export const justifyContentCss = css<JustifyContentProps>`
  ${systemJustifyContent}
`;
