import { Properties, Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type GridGapProps = {
  gridGap?: ValueType<Property.GridGap>;
  gridColumnGap?: ValueType<Property.GridGap>;
  gridRowGap?: ValueType<Property.GridGap>;
};

export const systemGridGap = system({
  gridGap: {
    properties: ['gap', 'grid-gap' as keyof Properties]
  },
  gridColumnGap: {
    properties: ['columnGap', 'gridColumnGap' as keyof Properties]
  },
  gridRowGap: {
    properties: ['rowGap', 'gridRowGap' as keyof Properties]
  }
});

export const gridGapCss = css<GridGapProps>`
  ${systemGridGap}
`;

// TODO: Add theme spacings
