import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type BorderRadiusProps = {
  borderRadius?: ValueType<Property.BorderRadius>;
  borderRadiusTop?: ValueType<Property.BorderRadius>;
  borderRadiusBottom?: ValueType<Property.BorderRadius>;
  borderRadiusLeft?: ValueType<Property.BorderRadius>;
  borderRadiusRight?: ValueType<Property.BorderRadius>;
};

export const systemBorderRadius = system({
  borderRadius: true,
  borderRadiusTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'space'
  },
  borderRadiusBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'space'
  },
  borderRadiusLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'space'
  },
  borderRadiusRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'space'
  }
});

export const borderRadiusCss = css<BorderRadiusProps>`
  ${systemBorderRadius}
`;

// TODO: Add theme spacings
