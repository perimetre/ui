import { css } from 'styled-components';
import { SpacingEnum } from '../legacyTheme';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = SpacingEnum | true;

/**
 *  ---- BorderRadiusHelpers
 * */
type BorderRadiusHelpersProps = {
  borderRadius?: ValueType;
  ['sm-borderRadius']?: ValueType;
  ['md-borderRadius']?: ValueType;
  ['lg-borderRadius']?: ValueType;
  ['xl-borderRadius']?: ValueType;
};

const getBorderRadiusHelpers = (borderRadius: ValueType) => css`
  border-radius: ${(props) => (borderRadius === true ? props.theme.spacing.px16 : props.theme.spacing[borderRadius])};
`;

const borderRadiusHelpersCss = css<BorderRadiusHelpersProps>`
  ${(props) => props.borderRadius && getBorderRadiusHelpers(props.borderRadius)}
  ${(props) =>
    props['sm-borderRadius'] && responsiveMediaCss(getBorderRadiusHelpers(props['sm-borderRadius']), 'mobile')}
  ${(props) =>
    props['md-borderRadius'] && responsiveMediaCss(getBorderRadiusHelpers(props['md-borderRadius']), 'tablet')}
  ${(props) =>
    props['lg-borderRadius'] && responsiveMediaCss(getBorderRadiusHelpers(props['lg-borderRadius']), 'laptop')}
  ${(props) =>
    props['xl-borderRadius'] && responsiveMediaCss(getBorderRadiusHelpers(props['xl-borderRadius']), 'desktop')}
`;

/**
 *  ---- BorderRadiusTop
 * */

type BorderRadiusTopProps = {
  borderRadiusTop?: ValueType;
  ['sm-borderRadiusTop']?: ValueType;
  ['md-borderRadiusTop']?: ValueType;
  ['lg-borderRadiusTop']?: ValueType;
  ['xl-borderRadiusTop']?: ValueType;
};

const getBorderRadiusTop = (borderRadiusTop: ValueType) => css`
  border-top-left-radius: ${(props) =>
    borderRadiusTop === true ? props.theme.spacing.px16 : props.theme.spacing[borderRadiusTop]};
  border-top-right-radius: ${(props) =>
    borderRadiusTop === true ? props.theme.spacing.px16 : props.theme.spacing[borderRadiusTop]};
`;

const borderRadiusTopCss = css<BorderRadiusTopProps>`
  ${(props) => props.borderRadiusTop && getBorderRadiusTop(props.borderRadiusTop)}
  ${(props) =>
    props['sm-borderRadiusTop'] && responsiveMediaCss(getBorderRadiusTop(props['sm-borderRadiusTop']), 'mobile')}
  ${(props) =>
    props['md-borderRadiusTop'] && responsiveMediaCss(getBorderRadiusTop(props['md-borderRadiusTop']), 'tablet')}
  ${(props) =>
    props['lg-borderRadiusTop'] && responsiveMediaCss(getBorderRadiusTop(props['lg-borderRadiusTop']), 'laptop')}
  ${(props) =>
    props['xl-borderRadiusTop'] && responsiveMediaCss(getBorderRadiusTop(props['xl-borderRadiusTop']), 'desktop')}
`;

/**
 *  ---- BorderRadiusBottom
 * */

type BorderRadiusBottomProps = {
  borderRadiusBottom?: ValueType;
  ['sm-borderRadiusBottom']?: ValueType;
  ['md-borderRadiusBottom']?: ValueType;
  ['lg-borderRadiusBottom']?: ValueType;
  ['xl-borderRadiusBottom']?: ValueType;
};

const getBorderRadiusBottom = (borderRadiusBottom: ValueType) => css`
  border-bottom-left-radius: ${(props) =>
    borderRadiusBottom === true ? props.theme.spacing.px16 : props.theme.spacing[borderRadiusBottom]};
  border-bottom-right-radius: ${(props) =>
    borderRadiusBottom === true ? props.theme.spacing.px16 : props.theme.spacing[borderRadiusBottom]};
`;

const borderRadiusBottomCss = css<BorderRadiusBottomProps>`
  ${(props) => props.borderRadiusBottom && getBorderRadiusBottom(props.borderRadiusBottom)}
  ${(props) =>
    props['sm-borderRadiusBottom'] &&
    responsiveMediaCss(getBorderRadiusBottom(props['sm-borderRadiusBottom']), 'mobile')}
  ${(props) =>
    props['md-borderRadiusBottom'] &&
    responsiveMediaCss(getBorderRadiusBottom(props['md-borderRadiusBottom']), 'tablet')}
  ${(props) =>
    props['lg-borderRadiusBottom'] &&
    responsiveMediaCss(getBorderRadiusBottom(props['lg-borderRadiusBottom']), 'laptop')}
  ${(props) =>
    props['xl-borderRadiusBottom'] &&
    responsiveMediaCss(getBorderRadiusBottom(props['xl-borderRadiusBottom']), 'desktop')}
`;

/**
 *  ---- BorderRadiusLeft
 * */

type BorderRadiusLeftProps = {
  borderRadiusLeft?: ValueType;
  ['sm-borderRadiusLeft']?: ValueType;
  ['md-borderRadiusLeft']?: ValueType;
  ['lg-borderRadiusLeft']?: ValueType;
  ['xl-borderRadiusLeft']?: ValueType;
};

const getBorderRadiusLeft = (borderRadiusLeft: ValueType) => css`
  border-top-left-radius: ${(props) =>
    borderRadiusLeft === true ? props.theme.spacing.px16 : props.theme.spacing[borderRadiusLeft]};
  border-bottom-left-radius: ${(props) =>
    borderRadiusLeft === true ? props.theme.spacing.px16 : props.theme.spacing[borderRadiusLeft]};
`;

const borderRadiusLeftCss = css<BorderRadiusLeftProps>`
  ${(props) => props.borderRadiusLeft && getBorderRadiusLeft(props.borderRadiusLeft)}
  ${(props) =>
    props['sm-borderRadiusLeft'] && responsiveMediaCss(getBorderRadiusLeft(props['sm-borderRadiusLeft']), 'mobile')}
  ${(props) =>
    props['md-borderRadiusLeft'] && responsiveMediaCss(getBorderRadiusLeft(props['md-borderRadiusLeft']), 'tablet')}
  ${(props) =>
    props['lg-borderRadiusLeft'] && responsiveMediaCss(getBorderRadiusLeft(props['lg-borderRadiusLeft']), 'laptop')}
  ${(props) =>
    props['xl-borderRadiusLeft'] && responsiveMediaCss(getBorderRadiusLeft(props['xl-borderRadiusLeft']), 'desktop')}
`;

/**
 *  ---- BorderRadiusRight
 * */

type BorderRadiusRightProps = {
  borderRadiusRight?: ValueType;
  ['sm-borderRadiusRight']?: ValueType;
  ['md-borderRadiusRight']?: ValueType;
  ['lg-borderRadiusRight']?: ValueType;
  ['xl-borderRadiusRight']?: ValueType;
};

const getBorderRadiusRight = (borderRadiusRight: ValueType) => css`
  border-top-right-radius: ${(props) =>
    borderRadiusRight === true ? props.theme.spacing.px16 : props.theme.spacing[borderRadiusRight]};
  border-bottom-right-radius: ${(props) =>
    borderRadiusRight === true ? props.theme.spacing.px16 : props.theme.spacing[borderRadiusRight]};
`;

const borderRadiusRightCss = css<BorderRadiusRightProps>`
  ${(props) => props.borderRadiusRight && getBorderRadiusRight(props.borderRadiusRight)}
  ${(props) =>
    props['sm-borderRadiusRight'] && responsiveMediaCss(getBorderRadiusRight(props['sm-borderRadiusRight']), 'mobile')}
  ${(props) =>
    props['md-borderRadiusRight'] && responsiveMediaCss(getBorderRadiusRight(props['md-borderRadiusRight']), 'tablet')}
  ${(props) =>
    props['lg-borderRadiusRight'] && responsiveMediaCss(getBorderRadiusRight(props['lg-borderRadiusRight']), 'laptop')}
  ${(props) =>
    props['xl-borderRadiusRight'] && responsiveMediaCss(getBorderRadiusRight(props['xl-borderRadiusRight']), 'desktop')}
`;

/**
 *  ---- BorderRadius
 * */
export type BorderRadiusProps = BorderRadiusHelpersProps &
  BorderRadiusTopProps &
  BorderRadiusBottomProps &
  BorderRadiusLeftProps &
  BorderRadiusRightProps;

export const borderRadiusCss = css<BorderRadiusProps>`
  ${borderRadiusHelpersCss}
  ${borderRadiusTopCss}
  ${borderRadiusBottomCss}
  ${borderRadiusLeftCss}
  ${borderRadiusRightCss}
`;
