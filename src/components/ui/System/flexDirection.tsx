import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type FlexDirectionProps = {
  flexDirection?: ValueType<Property.FlexDirection>;
};

export const systemFlexDirection = system({
  flexDirection: true
});

export const flexDirectionCss = css<FlexDirectionProps>`
  ${systemFlexDirection}
`;
