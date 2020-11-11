import { css } from 'styled-components';
import { compose, system } from 'styled-system';
import ValueType from './valueType';

export type GridColumnProps = {
  gridColumn?: ValueType<number | 'auto'>;
  gridColumnStart?: ValueType<number | 'auto'>;
  gridColumnEnd?: ValueType<number | 'auto'>;
};

export const systemGridColumn = compose(
  system({
    gridColumn: {
      property: 'gridColumn',
      transform: (value) => (value === 'auto' ? value : `span ${value} / span ${value}`)
    }
  }),
  system({
    gridColumnStart: true
  }),
  system({
    gridColumnEnd: true
  })
);

export const gridColumnCss = css<GridColumnProps>`
  ${systemGridColumn}
`;

// TODO: test transform
