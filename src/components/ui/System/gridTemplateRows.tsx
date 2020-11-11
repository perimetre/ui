import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type GridTemplateRowsProps = {
  gridTemplateRows?: ValueType<number | 'none'>;
};

export const systemGridTemplateRows = system({
  gridTemplateRows: {
    property: 'gridTemplateRows',
    transform: (value) => (value === 'none' ? value : `repeat(${value}, minmax(0, 1fr))`)
  }
});

export const gridTemplateRowsCss = css<GridTemplateRowsProps>`
  ${systemGridTemplateRows}
`;

// TODO: test transform
