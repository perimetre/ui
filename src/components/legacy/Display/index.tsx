import styled, { css } from 'styled-components';
import { alignContentCss, AlignContentProps } from '../Helpers/alignContent';
import { alignItemsCss, AlignItemsProps } from '../Helpers/alignItems';
import { alignSelfCss, AlignSelfProps } from '../Helpers/alignSelf';
import { cursorCss, CursorProps } from '../Helpers/cursor';
import { flexCss, FlexProps as FlexCssProps } from '../Helpers/flex';
import { flexDirectionCss, FlexDirectionProps } from '../Helpers/flexDirection';
import { flexGrowCss, FlexGrowProps } from '../Helpers/flexGrow';
import { flexShrinkCss, FlexShrinkProps } from '../Helpers/flexShrink';
import { flexWrapCss, FlexWrapProps } from '../Helpers/flexWrap';
import { gapCss, GapProps } from '../Helpers/gap';
import { gridColumnCss, GridColumnProps } from '../Helpers/gridColumn';
import { gridFlowCss, GridFlowProps } from '../Helpers/gridFlow';
import { gridGapCss, GridGapProps } from '../Helpers/gridGap';
import { gridRowCss, GridRowProps } from '../Helpers/gridRow';
import { gridTemplateColumnsCss, GridTemplateColumnsProps } from '../Helpers/gridTemplateColumns';
import { gridTemplateRowsCss, GridTemplateRowsProps } from '../Helpers/gridTemplateRows';
import { justifyContentCss, JustifyContentProps } from '../Helpers/justifyContent';
import { orderCss, OrderProps } from '../Helpers/order';
import { SizingProps } from '../Helpers/sizing';
import { spacingHelperCss, SpacingHelperProps } from '../Helpers/spacing';
import { ClipTextProps, clipTextCss } from '../Helpers/clipText';

export type FlexProps = SizingProps &
  FlexCssProps &
  FlexDirectionProps &
  FlexGrowProps &
  FlexShrinkProps &
  FlexWrapProps &
  AlignItemsProps &
  AlignContentProps &
  AlignSelfProps &
  JustifyContentProps &
  OrderProps &
  GapProps &
  SpacingHelperProps &
  GridTemplateColumnsProps &
  GridTemplateRowsProps &
  GridColumnProps &
  GridRowProps &
  GridGapProps &
  GridFlowProps &
  CursorProps &
  ClipTextProps & {
    /**
     * Whether or not the flex should be added to the next first children or to the component itself
     **/
    override?: boolean;
  };

const Display = styled.div<FlexProps>`
  ${(props) =>
    props.override
      ? css`
          > * {
            ${flexCss}
            ${flexDirectionCss}
            ${flexGrowCss}
            ${flexShrinkCss}
            ${flexWrapCss}
            ${alignItemsCss}
            ${alignContentCss}
            ${alignSelfCss}
            ${justifyContentCss}
            ${orderCss}
            ${gapCss}
            ${spacingHelperCss}
            ${gridTemplateColumnsCss}
            ${gridTemplateRowsCss}
            ${gridColumnCss}
            ${gridRowCss}
            ${gridGapCss}
            ${gridFlowCss}
            ${cursorCss}
            ${clipTextCss}
          }
        `
      : css`
          ${flexCss}
          ${flexDirectionCss}
          ${flexGrowCss}
          ${flexShrinkCss}
          ${flexWrapCss}
          ${alignItemsCss}
          ${alignContentCss}
          ${alignSelfCss}
          ${justifyContentCss}
          ${orderCss}
          ${gapCss}
          ${spacingHelperCss}
          ${gridTemplateColumnsCss}
          ${gridTemplateRowsCss}
          ${gridColumnCss}
          ${gridRowCss}
          ${gridGapCss}
          ${gridFlowCss}
          ${cursorCss}
          ${clipTextCss}
        `}
`;

export default Display;
