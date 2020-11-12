import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type OrderProps = {
  order?: ValueType<number | 'first' | 'last' | 'none'>;
};

export const systemOrder = system({
  order: {
    property: 'order',
    transform: (value) => {
      switch (value) {
        case 'first':
          return '-9999';
        case 'last':
          return '9999';
        case 'none':
          return '0';
        default:
          return value;
      }
    }
  }
});

export const orderCss = css<OrderProps>`
  ${systemOrder}
`;
