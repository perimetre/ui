import styled, { css } from 'styled-components';
import { compose } from 'styled-system';
import { AlignContentProps, systemAlignContent } from '../System/alignContent';
import { AlignItemsProps, systemAlignItems } from '../System/alignItems';
import { AlignSelfProps, systemAlignSelf } from '../System/alignSelf';
import { CursorProps, systemCursor } from '../System/cursor';
import { DisplayProps as DisplayPropsHelpers, systemDisplay as systemDisplayHelpers } from '../System/display';
import { FlexProps as FlexCssProps, systemFlex } from '../System/flex';
import { FlexDirectionProps, systemFlexDirection } from '../System/flexDirection';
import { FlexGrowProps, systemFlexGrow } from '../System/flexGrow';
import { FlexShrinkProps, systemFlexShrink } from '../System/flexShrink';
import { FlexWrapProps, systemFlexWrap } from '../System/flexWrap';
import { GridColumnProps, systemGridColumn } from '../System/gridColumn';
import { GridFlowProps, systemGridFlow } from '../System/gridFlow';
import { GridGapProps, systemGridGap } from '../System/gridGap';
import { GridRowProps, systemGridRow } from '../System/gridRow';
import { GridTemplateColumnsProps, systemGridTemplateColumns } from '../System/gridTemplateColumns';
import { GridTemplateRowsProps, systemGridTemplateRows } from '../System/gridTemplateRows';
import { JustifyContentProps, systemJustifyContent } from '../System/justifyContent';
import { OrderProps, systemOrder } from '../System/order';
import { SizingProps, systemSizing } from '../System/sizing';
import { SpacingProps, systemSpacing } from '../System/spacing';

// Margin
// Padding
// Gap
// sizing
// Display

export type DisplayProps = SizingProps &
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
  GridTemplateColumnsProps &
  GridTemplateRowsProps &
  GridColumnProps &
  GridRowProps &
  GridGapProps &
  GridFlowProps &
  CursorProps &
  SpacingProps &
  DisplayPropsHelpers;

export const systemDisplay = compose(
  systemFlex,
  systemFlexDirection,
  systemFlexGrow,
  systemFlexShrink,
  systemFlexWrap,
  systemAlignItems,
  systemAlignContent,
  systemAlignSelf,
  systemJustifyContent,
  systemOrder,
  systemSpacing,
  systemGridTemplateColumns,
  systemGridTemplateRows,
  systemGridColumn,
  systemGridRow,
  systemGridGap,
  systemGridFlow,
  systemCursor,
  systemSizing,
  systemDisplayHelpers
);

export const displayCss = css<DisplayProps>`
  ${systemDisplay}
`;

const Display = styled.div`
  ${displayCss}
`;

export default Display;
