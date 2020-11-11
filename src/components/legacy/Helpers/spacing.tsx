import { css } from 'styled-components';
import {
  MarginBottomProps,
  MarginHorizontalProps,
  MarginLeftProps,
  MarginProps,
  MarginRightProps,
  MarginTopProps,
  MarginVerticalProps,
  marginBottomCss,
  marginCss,
  marginHorizontalCss,
  marginLeftCss,
  marginRightCss,
  marginTopCss,
  marginVerticalCss
} from './margin';
import {
  PaddingBottomProps,
  PaddingHorizontalProps,
  PaddingLeftProps,
  PaddingProps,
  PaddingRightProps,
  PaddingTopProps,
  PaddingVerticalProps,
  paddingBottomCss,
  paddingCss,
  paddingHorizontalCss,
  paddingLeftCss,
  paddingRightCss,
  paddingTopCss,
  paddingVerticalCss
} from './padding';
import { SizingProps, sizingCss } from './sizing';
import { DisplayProps, displayCss } from './display';
import { GapProps, gapCss } from './gap';
export type SpacingHelperProps = MarginBottomProps &
  MarginHorizontalProps &
  MarginLeftProps &
  MarginProps &
  MarginRightProps &
  MarginTopProps &
  MarginVerticalProps &
  PaddingBottomProps &
  PaddingHorizontalProps &
  PaddingLeftProps &
  PaddingProps &
  PaddingRightProps &
  PaddingTopProps &
  PaddingVerticalProps &
  SizingProps &
  DisplayProps &
  GapProps & {
    /**
     * Whether or not the margin should be added to the next first children or to the component itself
     **/
    override?: boolean;
  };

export const spacingHelperCss = css<SpacingHelperProps>`
  ${(props) =>
    props.override
      ? css`
          > * {
            ${marginCss}
            ${marginTopCss}
            ${marginRightCss}
            ${marginBottomCss}
            ${marginLeftCss}
            ${marginVerticalCss}
            ${marginHorizontalCss}

            ${paddingCss}
            ${paddingTopCss}
            ${paddingRightCss}
            ${paddingBottomCss}
            ${paddingLeftCss}
            ${paddingVerticalCss}
            ${paddingHorizontalCss}

            ${gapCss}

            ${sizingCss}
            ${displayCss}
          }
        `
      : css`
          ${marginCss}
          ${marginTopCss}
          ${marginRightCss}
          ${marginBottomCss}
          ${marginLeftCss}
          ${marginVerticalCss}
          ${marginHorizontalCss}

          ${paddingCss}
          ${paddingTopCss}
          ${paddingRightCss}
          ${paddingBottomCss}
          ${paddingLeftCss}
          ${paddingVerticalCss}
          ${paddingHorizontalCss}

          ${gapCss}

          ${sizingCss}
          ${displayCss}
        `}
`;
