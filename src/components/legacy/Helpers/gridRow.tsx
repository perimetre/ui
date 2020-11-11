import { css } from 'styled-components';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = number | 'auto';

type GridRowHelpersProps = {
  gridRow?: ValueType;
  ['sm-gridRow']?: ValueType;
  ['md-gridRow']?: ValueType;
  ['lg-gridRow']?: ValueType;
  ['xl-gridRow']?: ValueType;
};

const getGridHelpersColumns = (gridRow: ValueType) => css`
  grid-row: ${gridRow === 'auto' ? gridRow : `span ${gridRow} / span ${gridRow}`};
`;

const gridRowHelpersCss = css<GridRowHelpersProps>`
  ${(props) => props.gridRow && getGridHelpersColumns(props.gridRow)}
  ${(props) => props['sm-gridRow'] && responsiveMediaCss(getGridHelpersColumns(props['sm-gridRow']), 'mobile')}
  ${(props) => props['md-gridRow'] && responsiveMediaCss(getGridHelpersColumns(props['md-gridRow']), 'tablet')}
  ${(props) => props['lg-gridRow'] && responsiveMediaCss(getGridHelpersColumns(props['lg-gridRow']), 'laptop')}
  ${(props) => props['xl-gridRow'] && responsiveMediaCss(getGridHelpersColumns(props['xl-gridRow']), 'desktop')}
`;

type GridRowStartHelpersProps = {
  gridRowStart?: ValueType;
  ['sm-gridRowStart']?: ValueType;
  ['md-gridRowStart']?: ValueType;
  ['lg-gridRowStart']?: ValueType;
  ['xl-gridRowStart']?: ValueType;
};

const getGridStartHelpersColumns = (gridRowStart: ValueType) => css`
  grid-row-start: ${gridRowStart};
`;

const gridRowStartHelpersCss = css<GridRowStartHelpersProps>`
  ${(props) => props.gridRowStart && getGridStartHelpersColumns(props.gridRowStart)}
  ${(props) =>
    props['sm-gridRowStart'] && responsiveMediaCss(getGridStartHelpersColumns(props['sm-gridRowStart']), 'mobile')}
  ${(props) =>
    props['md-gridRowStart'] && responsiveMediaCss(getGridStartHelpersColumns(props['md-gridRowStart']), 'tablet')}
  ${(props) =>
    props['lg-gridRowStart'] && responsiveMediaCss(getGridStartHelpersColumns(props['lg-gridRowStart']), 'laptop')}
  ${(props) =>
    props['xl-gridRowStart'] && responsiveMediaCss(getGridStartHelpersColumns(props['xl-gridRowStart']), 'desktop')}
`;

type GridRowEndHelpersProps = {
  gridRowEnd?: ValueType;
  ['sm-gridRowEnd']?: ValueType;
  ['md-gridRowEnd']?: ValueType;
  ['lg-gridRowEnd']?: ValueType;
  ['xl-gridRowEnd']?: ValueType;
};

const getGridEndHelpersColumns = (gridRowEnd: ValueType) => css`
  grid-row-end: ${gridRowEnd};
`;

const gridRowEndHelpersCss = css<GridRowEndHelpersProps>`
  ${(props) => props.gridRowEnd && getGridEndHelpersColumns(props.gridRowEnd)}
  ${(props) => props['sm-gridRowEnd'] && responsiveMediaCss(getGridEndHelpersColumns(props['sm-gridRowEnd']), 'mobile')}
  ${(props) => props['md-gridRowEnd'] && responsiveMediaCss(getGridEndHelpersColumns(props['md-gridRowEnd']), 'tablet')}
  ${(props) => props['lg-gridRowEnd'] && responsiveMediaCss(getGridEndHelpersColumns(props['lg-gridRowEnd']), 'laptop')}
  ${(props) =>
    props['xl-gridRowEnd'] && responsiveMediaCss(getGridEndHelpersColumns(props['xl-gridRowEnd']), 'desktop')}
`;

export type GridRowProps = GridRowEndHelpersProps & GridRowStartHelpersProps & GridRowHelpersProps;

export const gridRowCss = css<GridRowProps>`
  ${gridRowHelpersCss}
  ${gridRowStartHelpersCss}
  ${gridRowEndHelpersCss}
`;
