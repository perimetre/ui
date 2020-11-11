import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type GridFlowProps = {
  gridFlow?: ValueType<'row-dense' | 'col-dense' | Property.GridAutoFlow>;
};

export const systemGridFlow = system({
  gridFlow: {
    property: 'gridAutoFlow',
    transform: (value: string | undefined) => {
      switch (value) {
        case 'row-dense':
          return 'row dense';
        case 'col-dense':
          return 'column dense';
        default:
          return value;
      }
    }
  }
});

export const gridFlowCss = css<GridFlowProps>`
  ${systemGridFlow}
`;

// TODO: test transform
