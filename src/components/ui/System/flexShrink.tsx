import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type FlexShrinkProps = {
  flexShrink?: ValueType<Property.FlexShrink>;
};

export const systemFlexShrink = system({
  flexShrink: {
    property: 'flexShrink',
    transform: (value: boolean | undefined) => (value ? '1' : '0')
  }
});

export const flexShrinkCss = css<FlexShrinkProps>`
  ${systemFlexShrink}
`;

// TODO: test transform
