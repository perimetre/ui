import { css } from 'styled-components';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = number | 'first' | 'last' | 'none';

export type OrderProps = {
  order?: ValueType;
  ['sm-order']?: ValueType;
  ['md-order']?: ValueType;
  ['lg-order']?: ValueType;
  ['xl-order']?: ValueType;
};

const getOrder = (order: ValueType) => {
  switch (order) {
    case 'first':
      return css`
        order: -9999;
      `;
    case 'last':
      return css`
        order: 9999;
      `;
    case 'none':
      return css`
        order: 0;
      `;
    default:
      return css`
        order: ${order};
      `;
  }
};

export const orderCss = css<OrderProps>`
  ${(props) => props.order && getOrder(props.order)}
  ${(props) => props['sm-order'] && responsiveMediaCss(getOrder(props['sm-order']), 'mobile')}
  ${(props) => props['md-order'] && responsiveMediaCss(getOrder(props['md-order']), 'tablet')}
  ${(props) => props['lg-order'] && responsiveMediaCss(getOrder(props['lg-order']), 'laptop')}
  ${(props) => props['xl-order'] && responsiveMediaCss(getOrder(props['xl-order']), 'desktop')}
`;
