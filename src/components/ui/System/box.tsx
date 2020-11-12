import { css } from 'styled-components';
import { compose } from 'styled-system';
import { AlignContentProps, systemAlignContent } from './alignContent';
import { AlignItemsProps, systemAlignItems } from './alignItems';
import { AlignSelfProps, systemAlignSelf } from './alignSelf';
import { CursorProps, systemCursor } from './cursor';
import { DisplayProps, systemDisplay } from './display';
import { FlexProps as FlexCssProps, systemFlex } from './flex';
import { FlexDirectionProps, systemFlexDirection } from './flexDirection';
import { FlexGrowProps, systemFlexGrow } from './flexGrow';
import { FlexShrinkProps, systemFlexShrink } from './flexShrink';
import { FlexWrapProps, systemFlexWrap } from './flexWrap';
import { GridColumnProps, systemGridColumn } from './gridColumn';
import { GridFlowProps, systemGridFlow } from './gridFlow';
import { GridGapProps, systemGridGap } from './gridGap';
import { GridRowProps, systemGridRow } from './gridRow';
import { GridTemplateColumnsProps, systemGridTemplateColumns } from './gridTemplateColumns';
import { GridTemplateRowsProps, systemGridTemplateRows } from './gridTemplateRows';
import { JustifyContentProps, systemJustifyContent } from './justifyContent';
import { OrderProps, systemOrder } from './order';
import { SizingProps, systemSizing } from './sizing';
import { SpacingProps, systemSpacing } from './spacing';

export type BoxProps = SizingProps &
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
  DisplayProps;

const systemBox = compose(
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
  systemDisplay
);

export const boxCss = css<BoxProps>`
  ${systemBox}
`;
