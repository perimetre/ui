import { css } from 'styled-components';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = number | 'none';

export type GridTemplateColumnsProps = {
  gridTemplateColumns?: ValueType;
  ['sm-gridTemplateColumns']?: ValueType;
  ['md-gridTemplateColumns']?: ValueType;
  ['lg-gridTemplateColumns']?: ValueType;
  ['xl-gridTemplateColumns']?: ValueType;
};

const getGridTemplateColumns = (gridTemplateColumns: ValueType) => css`
  grid-template-columns: ${gridTemplateColumns === 'none'
    ? gridTemplateColumns
    : `repeat(${gridTemplateColumns}, minmax(0, 1fr))`};
`;

export const gridTemplateColumnsCss = css<GridTemplateColumnsProps>`
  ${(props) => props.gridTemplateColumns && getGridTemplateColumns(props.gridTemplateColumns)}
  ${(props) =>
    props['sm-gridTemplateColumns'] &&
    responsiveMediaCss(getGridTemplateColumns(props['sm-gridTemplateColumns']), 'mobile')}
  ${(props) =>
    props['md-gridTemplateColumns'] &&
    responsiveMediaCss(getGridTemplateColumns(props['md-gridTemplateColumns']), 'tablet')}
  ${(props) =>
    props['lg-gridTemplateColumns'] &&
    responsiveMediaCss(getGridTemplateColumns(props['lg-gridTemplateColumns']), 'laptop')}
  ${(props) =>
    props['xl-gridTemplateColumns'] &&
    responsiveMediaCss(getGridTemplateColumns(props['xl-gridTemplateColumns']), 'desktop')}
`;
