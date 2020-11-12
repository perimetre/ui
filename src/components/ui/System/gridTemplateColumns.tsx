import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type GridTemplateColumnsProps = {
  gridTemplateColumns?: ValueType<number | 'none'>;
};

export const systemGridTemplateColumns = system({
  gridTemplateColumns: {
    property: 'gridTemplateColumns',
    transform: (value) => (value === 'none' ? value : `repeat(${value}, minmax(0, 1fr))`)
  }
});

export const gridTemplateColumnsCss = css<GridTemplateColumnsProps>`
  ${systemGridTemplateColumns}
`;
