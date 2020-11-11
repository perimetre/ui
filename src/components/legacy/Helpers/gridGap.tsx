import { css } from 'styled-components';
import { SpacingEnum } from '../legacyTheme';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = SpacingEnum;

type GridGapHelpersProps = {
  gridGap?: ValueType;
  ['sm-gridGap']?: ValueType;
  ['md-gridGap']?: ValueType;
  ['lg-gridGap']?: ValueType;
  ['xl-gridGap']?: ValueType;
};

const getGridHelpersColumns = (gridGap: ValueType) => css`
  grid-gap: ${(props) => props.theme.spacing[gridGap]};
  gap: ${(props) => props.theme.spacing[gridGap]};
`;

const gridGapHelpersCss = css<GridGapHelpersProps>`
  ${(props) => props.gridGap && getGridHelpersColumns(props.gridGap)}
  ${(props) => props['sm-gridGap'] && responsiveMediaCss(getGridHelpersColumns(props['sm-gridGap']), 'mobile')}
  ${(props) => props['md-gridGap'] && responsiveMediaCss(getGridHelpersColumns(props['md-gridGap']), 'tablet')}
  ${(props) => props['lg-gridGap'] && responsiveMediaCss(getGridHelpersColumns(props['lg-gridGap']), 'laptop')}
  ${(props) => props['xl-gridGap'] && responsiveMediaCss(getGridHelpersColumns(props['xl-gridGap']), 'desktop')}
`;

type GridRowGapHelpersProps = {
  gridRowGap?: ValueType;
  ['sm-gridRowGap']?: ValueType;
  ['md-gridRowGap']?: ValueType;
  ['lg-gridRowGap']?: ValueType;
  ['xl-gridRowGap']?: ValueType;
};

const getGridRowHelpersColumns = (gridRowGap: ValueType) => css`
  grid-row-gap: ${(props) => props.theme.spacing[gridRowGap]};
  row-gap: ${(props) => props.theme.spacing[gridRowGap]};
`;

const gridRowGapHelpersCss = css<GridRowGapHelpersProps>`
  ${(props) => props.gridRowGap && getGridRowHelpersColumns(props.gridRowGap)}
  ${(props) => props['sm-gridRowGap'] && responsiveMediaCss(getGridRowHelpersColumns(props['sm-gridRowGap']), 'mobile')}
  ${(props) => props['md-gridRowGap'] && responsiveMediaCss(getGridRowHelpersColumns(props['md-gridRowGap']), 'tablet')}
  ${(props) => props['lg-gridRowGap'] && responsiveMediaCss(getGridRowHelpersColumns(props['lg-gridRowGap']), 'laptop')}
  ${(props) =>
    props['xl-gridRowGap'] && responsiveMediaCss(getGridRowHelpersColumns(props['xl-gridRowGap']), 'desktop')}
`;

type GridColumnGapHelpersProps = {
  gridColumnGap?: ValueType;
  ['sm-gridColumnGap']?: ValueType;
  ['md-gridColumnGap']?: ValueType;
  ['lg-gridColumnGap']?: ValueType;
  ['xl-gridColumnGap']?: ValueType;
};

const getGridColumnHelpersColumns = (gridColumnGap: ValueType) => css`
  grid-column-gap: ${(props) => props.theme.spacing[gridColumnGap]};
  column-gap: ${(props) => props.theme.spacing[gridColumnGap]};
`;

const gridColumnGapHelpersCss = css<GridColumnGapHelpersProps>`
  ${(props) => props.gridColumnGap && getGridColumnHelpersColumns(props.gridColumnGap)}
  ${(props) =>
    props['sm-gridColumnGap'] && responsiveMediaCss(getGridColumnHelpersColumns(props['sm-gridColumnGap']), 'mobile')}
  ${(props) =>
    props['md-gridColumnGap'] && responsiveMediaCss(getGridColumnHelpersColumns(props['md-gridColumnGap']), 'tablet')}
  ${(props) =>
    props['lg-gridColumnGap'] && responsiveMediaCss(getGridColumnHelpersColumns(props['lg-gridColumnGap']), 'laptop')}
  ${(props) =>
    props['xl-gridColumnGap'] && responsiveMediaCss(getGridColumnHelpersColumns(props['xl-gridColumnGap']), 'desktop')}
`;

export type GridGapProps = GridColumnGapHelpersProps & GridRowGapHelpersProps & GridGapHelpersProps;

export const gridGapCss = css<GridGapProps>`
  ${gridGapHelpersCss}
  ${gridRowGapHelpersCss}
  ${gridColumnGapHelpersCss}
`;
