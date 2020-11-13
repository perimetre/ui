import { css } from 'styled-components';
import { SpacingEnum } from '../legacyTheme';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = SpacingEnum | true | 'auto';

/**
 *  ---- Margin
 * */
export type MarginProps = {
  margin?: ValueType;
  ['sm-margin']?: ValueType;
  ['md-margin']?: ValueType;
  ['lg-margin']?: ValueType;
  ['xl-margin']?: ValueType;
};

const getMargin = (margin: ValueType) => css`
  margin: ${(props) =>
    margin === true ? props.theme.spacing.px16 : props.theme.spacing[margin] ? props.theme.spacing[margin] : margin};
`;

export const marginCss = css<MarginProps>`
  ${(props) => props.margin && getMargin(props.margin)}
  ${(props) => props['sm-margin'] && responsiveMediaCss(getMargin(props['sm-margin']), 'mobile')}
  ${(props) => props['md-margin'] && responsiveMediaCss(getMargin(props['md-margin']), 'tablet')}
  ${(props) => props['lg-margin'] && responsiveMediaCss(getMargin(props['lg-margin']), 'laptop')}
  ${(props) => props['xl-margin'] && responsiveMediaCss(getMargin(props['xl-margin']), 'desktop')}
`;

/**
 *  ---- MarginTop
 * */

export type MarginTopProps = {
  marginTop?: ValueType;
  ['sm-marginTop']?: ValueType;
  ['md-marginTop']?: ValueType;
  ['lg-marginTop']?: ValueType;
  ['xl-marginTop']?: ValueType;
};

const getMarginTop = (marginTop: ValueType) => css`
  margin-top: ${(props) =>
    marginTop === true
      ? props.theme.spacing.px16
      : props.theme.spacing[marginTop]
      ? props.theme.spacing[marginTop]
      : marginTop};
`;

export const marginTopCss = css<MarginTopProps>`
  ${(props) => props.marginTop && getMarginTop(props.marginTop)}
  ${(props) => props['sm-marginTop'] && responsiveMediaCss(getMarginTop(props['sm-marginTop']), 'mobile')}
  ${(props) => props['md-marginTop'] && responsiveMediaCss(getMarginTop(props['md-marginTop']), 'tablet')}
  ${(props) => props['lg-marginTop'] && responsiveMediaCss(getMarginTop(props['lg-marginTop']), 'laptop')}
  ${(props) => props['xl-marginTop'] && responsiveMediaCss(getMarginTop(props['xl-marginTop']), 'desktop')}
`;

/**
 *  ---- MarginBottom
 * */

export type MarginBottomProps = {
  marginBottom?: ValueType;
  ['sm-marginBottom']?: ValueType;
  ['md-marginBottom']?: ValueType;
  ['lg-marginBottom']?: ValueType;
  ['xl-marginBottom']?: ValueType;
};

const getMarginBottom = (marginBottom: ValueType) => css`
  margin-bottom: ${(props) =>
    marginBottom === true
      ? props.theme.spacing.px16
      : props.theme.spacing[marginBottom]
      ? props.theme.spacing[marginBottom]
      : marginBottom};
`;

export const marginBottomCss = css<MarginBottomProps>`
  ${(props) => props.marginBottom && getMarginBottom(props.marginBottom)}
  ${(props) => props['sm-marginBottom'] && responsiveMediaCss(getMarginBottom(props['sm-marginBottom']), 'mobile')}
  ${(props) => props['md-marginBottom'] && responsiveMediaCss(getMarginBottom(props['md-marginBottom']), 'tablet')}
  ${(props) => props['lg-marginBottom'] && responsiveMediaCss(getMarginBottom(props['lg-marginBottom']), 'laptop')}
  ${(props) => props['xl-marginBottom'] && responsiveMediaCss(getMarginBottom(props['xl-marginBottom']), 'desktop')}
`;

/**
 *  ---- MarginLeft
 * */

export type MarginLeftProps = {
  marginLeft?: ValueType;
  ['sm-marginLeft']?: ValueType;
  ['md-marginLeft']?: ValueType;
  ['lg-marginLeft']?: ValueType;
  ['xl-marginLeft']?: ValueType;
};

const getMarginLeft = (marginLeft: ValueType) => css`
  margin-left: ${(props) =>
    marginLeft === true
      ? props.theme.spacing.px16
      : props.theme.spacing[marginLeft]
      ? props.theme.spacing[marginLeft]
      : marginLeft};
`;

export const marginLeftCss = css<MarginLeftProps>`
  ${(props) => props.marginLeft && getMarginLeft(props.marginLeft)}
  ${(props) => props['sm-marginLeft'] && responsiveMediaCss(getMarginLeft(props['sm-marginLeft']), 'mobile')}
  ${(props) => props['md-marginLeft'] && responsiveMediaCss(getMarginLeft(props['md-marginLeft']), 'tablet')}
  ${(props) => props['lg-marginLeft'] && responsiveMediaCss(getMarginLeft(props['lg-marginLeft']), 'laptop')}
  ${(props) => props['xl-marginLeft'] && responsiveMediaCss(getMarginLeft(props['xl-marginLeft']), 'desktop')}
`;

/**
 *  ---- MarginRight
 * */

export type MarginRightProps = {
  marginRight?: ValueType;
  ['sm-marginRight']?: ValueType;
  ['md-marginRight']?: ValueType;
  ['lg-marginRight']?: ValueType;
  ['xl-marginRight']?: ValueType;
};

const getMarginRight = (marginRight: ValueType) => css`
  margin-right: ${(props) =>
    marginRight === true
      ? props.theme.spacing.px16
      : props.theme.spacing[marginRight]
      ? props.theme.spacing[marginRight]
      : marginRight};
`;

export const marginRightCss = css<MarginRightProps>`
  ${(props) => props.marginRight && getMarginRight(props.marginRight)}
  ${(props) => props['sm-marginRight'] && responsiveMediaCss(getMarginRight(props['sm-marginRight']), 'mobile')}
  ${(props) => props['md-marginRight'] && responsiveMediaCss(getMarginRight(props['md-marginRight']), 'tablet')}
  ${(props) => props['lg-marginRight'] && responsiveMediaCss(getMarginRight(props['lg-marginRight']), 'laptop')}
  ${(props) => props['xl-marginRight'] && responsiveMediaCss(getMarginRight(props['xl-marginRight']), 'desktop')}
`;

/**
 *  ---- MarginVertical
 * */

export type MarginVerticalProps = {
  marginVertical?: ValueType;
  ['sm-marginVertical']?: ValueType;
  ['md-marginVertical']?: ValueType;
  ['lg-marginVertical']?: ValueType;
  ['xl-marginVertical']?: ValueType;
};

const getMarginVertical = (marginVertical: ValueType) => css`
  margin-top: ${(props) =>
    marginVertical === true
      ? props.theme.spacing.px16
      : props.theme.spacing[marginVertical]
      ? props.theme.spacing[marginVertical]
      : marginVertical};
  margin-bottom: ${(props) =>
    marginVertical === true
      ? props.theme.spacing.px16
      : props.theme.spacing[marginVertical]
      ? props.theme.spacing[marginVertical]
      : marginVertical};
`;

export const marginVerticalCss = css<MarginVerticalProps>`
  ${(props) => props.marginVertical && getMarginVertical(props.marginVertical)}
  ${(props) =>
    props['sm-marginVertical'] && responsiveMediaCss(getMarginVertical(props['sm-marginVertical']), 'mobile')}
  ${(props) =>
    props['md-marginVertical'] && responsiveMediaCss(getMarginVertical(props['md-marginVertical']), 'tablet')}
  ${(props) =>
    props['lg-marginVertical'] && responsiveMediaCss(getMarginVertical(props['lg-marginVertical']), 'laptop')}
  ${(props) =>
    props['xl-marginVertical'] && responsiveMediaCss(getMarginVertical(props['xl-marginVertical']), 'desktop')}
`;

/**
 *  ---- MarginHorizontal
 * */

export type MarginHorizontalProps = {
  marginHorizontal?: ValueType;
  ['sm-marginHorizontal']?: ValueType;
  ['md-marginHorizontal']?: ValueType;
  ['lg-marginHorizontal']?: ValueType;
  ['xl-marginHorizontal']?: ValueType;
};

const getMarginHorizontal = (marginHorizontal: ValueType) => css`
  margin-left: ${(props) =>
    marginHorizontal === true
      ? props.theme.spacing.px16
      : props.theme.spacing[marginHorizontal]
      ? props.theme.spacing[marginHorizontal]
      : marginHorizontal};
  margin-right: ${(props) =>
    marginHorizontal === true
      ? props.theme.spacing.px16
      : props.theme.spacing[marginHorizontal]
      ? props.theme.spacing[marginHorizontal]
      : marginHorizontal};
`;

export const marginHorizontalCss = css<MarginHorizontalProps>`
  ${(props) => props.marginHorizontal && getMarginHorizontal(props.marginHorizontal)}
  ${(props) =>
    props['sm-marginHorizontal'] && responsiveMediaCss(getMarginHorizontal(props['sm-marginHorizontal']), 'mobile')}
  ${(props) =>
    props['md-marginHorizontal'] && responsiveMediaCss(getMarginHorizontal(props['md-marginHorizontal']), 'tablet')}
  ${(props) =>
    props['lg-marginHorizontal'] && responsiveMediaCss(getMarginHorizontal(props['lg-marginHorizontal']), 'laptop')}
  ${(props) =>
    props['xl-marginHorizontal'] && responsiveMediaCss(getMarginHorizontal(props['xl-marginHorizontal']), 'desktop')}
`;
