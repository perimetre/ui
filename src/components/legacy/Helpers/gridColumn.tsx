import { css } from 'styled-components';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = number | 'auto';

type GridColumnHelpersProps = {
  gridColumn?: ValueType;
  ['sm-gridColumn']?: ValueType;
  ['md-gridColumn']?: ValueType;
  ['lg-gridColumn']?: ValueType;
  ['xl-gridColumn']?: ValueType;
};

const getGridHelpersColumns = (gridColumn: ValueType) => css`
  grid-column: ${gridColumn === 'auto' ? gridColumn : `span ${gridColumn} / span ${gridColumn}`};
`;

const gridColumnHelpersCss = css<GridColumnHelpersProps>`
  ${(props) => props.gridColumn && getGridHelpersColumns(props.gridColumn)}
  ${(props) => props['sm-gridColumn'] && responsiveMediaCss(getGridHelpersColumns(props['sm-gridColumn']), 'mobile')}
  ${(props) => props['md-gridColumn'] && responsiveMediaCss(getGridHelpersColumns(props['md-gridColumn']), 'tablet')}
  ${(props) => props['lg-gridColumn'] && responsiveMediaCss(getGridHelpersColumns(props['lg-gridColumn']), 'laptop')}
  ${(props) => props['xl-gridColumn'] && responsiveMediaCss(getGridHelpersColumns(props['xl-gridColumn']), 'desktop')}
`;

type GridColumnStartHelpersProps = {
  gridColumnStart?: ValueType;
  ['sm-gridColumnStart']?: ValueType;
  ['md-gridColumnStart']?: ValueType;
  ['lg-gridColumnStart']?: ValueType;
  ['xl-gridColumnStart']?: ValueType;
};

const getGridStartHelpersColumns = (gridColumnStart: ValueType) => css`
  grid-column-start: ${gridColumnStart};
`;

const gridColumnStartHelpersCss = css<GridColumnStartHelpersProps>`
  ${(props) => props.gridColumnStart && getGridStartHelpersColumns(props.gridColumnStart)}
  ${(props) =>
    props['sm-gridColumnStart'] &&
    responsiveMediaCss(getGridStartHelpersColumns(props['sm-gridColumnStart']), 'mobile')}
  ${(props) =>
    props['md-gridColumnStart'] &&
    responsiveMediaCss(getGridStartHelpersColumns(props['md-gridColumnStart']), 'tablet')}
  ${(props) =>
    props['lg-gridColumnStart'] &&
    responsiveMediaCss(getGridStartHelpersColumns(props['lg-gridColumnStart']), 'laptop')}
  ${(props) =>
    props['xl-gridColumnStart'] &&
    responsiveMediaCss(getGridStartHelpersColumns(props['xl-gridColumnStart']), 'desktop')}
`;

type GridColumnEndHelpersProps = {
  gridColumnEnd?: ValueType;
  ['sm-gridColumnEnd']?: ValueType;
  ['md-gridColumnEnd']?: ValueType;
  ['lg-gridColumnEnd']?: ValueType;
  ['xl-gridColumnEnd']?: ValueType;
};

const getGridEndHelpersColumns = (gridColumnEnd: ValueType) => css`
  grid-column-end: ${gridColumnEnd};
`;

const gridColumnEndHelpersCss = css<GridColumnEndHelpersProps>`
  ${(props) => props.gridColumnEnd && getGridEndHelpersColumns(props.gridColumnEnd)}
  ${(props) =>
    props['sm-gridColumnEnd'] && responsiveMediaCss(getGridEndHelpersColumns(props['sm-gridColumnEnd']), 'mobile')}
  ${(props) =>
    props['md-gridColumnEnd'] && responsiveMediaCss(getGridEndHelpersColumns(props['md-gridColumnEnd']), 'tablet')}
  ${(props) =>
    props['lg-gridColumnEnd'] && responsiveMediaCss(getGridEndHelpersColumns(props['lg-gridColumnEnd']), 'laptop')}
  ${(props) =>
    props['xl-gridColumnEnd'] && responsiveMediaCss(getGridEndHelpersColumns(props['xl-gridColumnEnd']), 'desktop')}
`;

export type GridColumnProps = GridColumnEndHelpersProps & GridColumnStartHelpersProps & GridColumnHelpersProps;

export const gridColumnCss = css<GridColumnProps>`
  ${gridColumnHelpersCss}
  ${gridColumnStartHelpersCss}
  ${gridColumnEndHelpersCss}
`;
