import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type GridRowProps = {
  gridRow?: ValueType<number | 'auto'>;
  gridRowStart?: ValueType<number | 'auto'>;
  gridRowEnd?: ValueType<number | 'auto'>;
};

export const systemGridRow = system({
  gridRow: {
    property: 'gridRow',
    transform: (value) => (value === 'auto' ? value : `span ${value} / span ${value}`)
  },
  gridRowStart: true,
  gridRowEnd: true
});

export const gridRowCss = css<GridRowProps>`
  ${systemGridRow}
`;

// TODO: test transform
