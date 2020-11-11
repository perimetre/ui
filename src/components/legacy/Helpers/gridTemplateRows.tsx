import { css } from 'styled-components';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = number | 'none';

export type GridTemplateRowsProps = {
  gridTemplateRows?: ValueType;
  ['sm-gridTemplateRows']?: ValueType;
  ['md-gridTemplateRows']?: ValueType;
  ['lg-gridTemplateRows']?: ValueType;
  ['xl-gridTemplateRows']?: ValueType;
};

const getGridTemplateRows = (gridTemplateRows: ValueType) => css`
  grid-template-rows: ${gridTemplateRows === 'none' ? gridTemplateRows : `repeat(${gridTemplateRows}, minmax(0, 1fr))`};
`;

export const gridTemplateRowsCss = css<GridTemplateRowsProps>`
  ${(props) => props.gridTemplateRows && getGridTemplateRows(props.gridTemplateRows)}
  ${(props) =>
    props['sm-gridTemplateRows'] && responsiveMediaCss(getGridTemplateRows(props['sm-gridTemplateRows']), 'mobile')}
  ${(props) =>
    props['md-gridTemplateRows'] && responsiveMediaCss(getGridTemplateRows(props['md-gridTemplateRows']), 'tablet')}
  ${(props) =>
    props['lg-gridTemplateRows'] && responsiveMediaCss(getGridTemplateRows(props['lg-gridTemplateRows']), 'laptop')}
  ${(props) =>
    props['xl-gridTemplateRows'] && responsiveMediaCss(getGridTemplateRows(props['xl-gridTemplateRows']), 'desktop')}
`;
