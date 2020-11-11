import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type FlexWrapProps = {
  flexWrap?: ValueType<Property.FlexWrap>;
};

export const systemFlexWrap = system({
  flexWrap: true
});

export const flexWrapCss = css<FlexWrapProps>`
  ${systemFlexWrap}
`;
