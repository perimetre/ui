import { css } from 'styled-components';
import { responsiveMediaCss } from '../mediaQueryUtils';
type ValueType = 'row' | 'col' | 'row-dense' | 'col-dense';

export type GridFlowProps = {
  gridFlow?: ValueType;
  ['sm-gridFlow']?: ValueType;
  ['md-gridFlow']?: ValueType;
  ['lg-gridFlow']?: ValueType;
  ['xl-gridFlow']?: ValueType;
};

const getGridFlow = (gridFlow: ValueType) => {
  switch (gridFlow) {
    case 'row':
      return css`
        grid-auto-flow: row;
      `;
    case 'col':
      return css`
        grid-auto-flow: column;
      `;
    case 'row-dense':
      return css`
        grid-auto-flow: row dense;
      `;
    case 'col-dense':
      return css`
        grid-auto-flow: column dense;
      `;
    default:
      return css``;
  }
};

export const gridFlowCss = css<GridFlowProps>`
  ${(props) => props.gridFlow && getGridFlow(props.gridFlow)}
  ${(props) => props['sm-gridFlow'] && responsiveMediaCss(getGridFlow(props['sm-gridFlow']), 'mobile')}
  ${(props) => props['md-gridFlow'] && responsiveMediaCss(getGridFlow(props['md-gridFlow']), 'tablet')}
  ${(props) => props['lg-gridFlow'] && responsiveMediaCss(getGridFlow(props['lg-gridFlow']), 'laptop')}
  ${(props) => props['xl-gridFlow'] && responsiveMediaCss(getGridFlow(props['xl-gridFlow']), 'desktop')}
`;
