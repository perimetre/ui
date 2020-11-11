import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type TextTransformProps = {
  textTransform?: ValueType<Property.TextTransform>;
};

export const systemTextTransform = system({
  textTransform: true
});

export const textTransformCss = css<TextTransformProps>`
  ${systemTextTransform}
`;
