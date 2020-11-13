import { css } from 'styled-components';
import { SpacingEnum } from '../legacyTheme';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = SpacingEnum | true;

/**
 *  ---- Padding
 * */
export type PaddingProps = {
  padding?: ValueType;
  ['sm-padding']?: ValueType;
  ['md-padding']?: ValueType;
  ['lg-padding']?: ValueType;
  ['xl-padding']?: ValueType;
};

const getPadding = (padding: ValueType) => css`
  padding: ${(props) => (padding === true ? props.theme.spacing.px16 : props.theme.spacing[padding])};
`;

export const paddingCss = css<PaddingProps>`
  ${(props) => props.padding && getPadding(props.padding)}
  ${(props) => props['sm-padding'] && responsiveMediaCss(getPadding(props['sm-padding']), 'mobile')}
  ${(props) => props['md-padding'] && responsiveMediaCss(getPadding(props['md-padding']), 'tablet')}
  ${(props) => props['lg-padding'] && responsiveMediaCss(getPadding(props['lg-padding']), 'laptop')}
  ${(props) => props['xl-padding'] && responsiveMediaCss(getPadding(props['xl-padding']), 'desktop')}
`;

/**
 *  ---- PaddingTop
 * */

export type PaddingTopProps = {
  paddingTop?: ValueType;
  ['sm-paddingTop']?: ValueType;
  ['md-paddingTop']?: ValueType;
  ['lg-paddingTop']?: ValueType;
  ['xl-paddingTop']?: ValueType;
};

const getPaddingTop = (paddingTop: ValueType) => css`
  padding-top: ${(props) => (paddingTop === true ? props.theme.spacing.px16 : props.theme.spacing[paddingTop])};
`;

export const paddingTopCss = css<PaddingTopProps>`
  ${(props) => props.paddingTop && getPaddingTop(props.paddingTop)}
  ${(props) => props['sm-paddingTop'] && responsiveMediaCss(getPaddingTop(props['sm-paddingTop']), 'mobile')}
  ${(props) => props['md-paddingTop'] && responsiveMediaCss(getPaddingTop(props['md-paddingTop']), 'tablet')}
  ${(props) => props['lg-paddingTop'] && responsiveMediaCss(getPaddingTop(props['lg-paddingTop']), 'laptop')}
  ${(props) => props['xl-paddingTop'] && responsiveMediaCss(getPaddingTop(props['xl-paddingTop']), 'desktop')}
`;

/**
 *  ---- PaddingBottom
 * */

export type PaddingBottomProps = {
  paddingBottom?: ValueType;
  ['sm-paddingBottom']?: ValueType;
  ['md-paddingBottom']?: ValueType;
  ['lg-paddingBottom']?: ValueType;
  ['xl-paddingBottom']?: ValueType;
};

const getPaddingBottom = (paddingBottom: ValueType) => css`
  padding-bottom: ${(props) =>
    paddingBottom === true ? props.theme.spacing.px16 : props.theme.spacing[paddingBottom]};
`;

export const paddingBottomCss = css<PaddingBottomProps>`
  ${(props) => props.paddingBottom && getPaddingBottom(props.paddingBottom)}
  ${(props) => props['sm-paddingBottom'] && responsiveMediaCss(getPaddingBottom(props['sm-paddingBottom']), 'mobile')}
  ${(props) => props['md-paddingBottom'] && responsiveMediaCss(getPaddingBottom(props['md-paddingBottom']), 'tablet')}
  ${(props) => props['lg-paddingBottom'] && responsiveMediaCss(getPaddingBottom(props['lg-paddingBottom']), 'laptop')}
  ${(props) => props['xl-paddingBottom'] && responsiveMediaCss(getPaddingBottom(props['xl-paddingBottom']), 'desktop')}
`;

/**
 *  ---- PaddingLeft
 * */

export type PaddingLeftProps = {
  paddingLeft?: ValueType;
  ['sm-paddingLeft']?: ValueType;
  ['md-paddingLeft']?: ValueType;
  ['lg-paddingLeft']?: ValueType;
  ['xl-paddingLeft']?: ValueType;
};

const getPaddingLeft = (paddingLeft: ValueType) => css`
  padding-left: ${(props) => (paddingLeft === true ? props.theme.spacing.px16 : props.theme.spacing[paddingLeft])};
`;

export const paddingLeftCss = css<PaddingLeftProps>`
  ${(props) => props.paddingLeft && getPaddingLeft(props.paddingLeft)}
  ${(props) => props['sm-paddingLeft'] && responsiveMediaCss(getPaddingLeft(props['sm-paddingLeft']), 'mobile')}
  ${(props) => props['md-paddingLeft'] && responsiveMediaCss(getPaddingLeft(props['md-paddingLeft']), 'tablet')}
  ${(props) => props['lg-paddingLeft'] && responsiveMediaCss(getPaddingLeft(props['lg-paddingLeft']), 'laptop')}
  ${(props) => props['xl-paddingLeft'] && responsiveMediaCss(getPaddingLeft(props['xl-paddingLeft']), 'desktop')}
`;

/**
 *  ---- PaddingRight
 * */

export type PaddingRightProps = {
  paddingRight?: ValueType;
  ['sm-paddingRight']?: ValueType;
  ['md-paddingRight']?: ValueType;
  ['lg-paddingRight']?: ValueType;
  ['xl-paddingRight']?: ValueType;
};

const getPaddingRight = (paddingRight: ValueType) => css`
  padding-right: ${(props) => (paddingRight === true ? props.theme.spacing.px16 : props.theme.spacing[paddingRight])};
`;

export const paddingRightCss = css<PaddingRightProps>`
  ${(props) => props.paddingRight && getPaddingRight(props.paddingRight)}
  ${(props) => props['sm-paddingRight'] && responsiveMediaCss(getPaddingRight(props['sm-paddingRight']), 'mobile')}
  ${(props) => props['md-paddingRight'] && responsiveMediaCss(getPaddingRight(props['md-paddingRight']), 'tablet')}
  ${(props) => props['lg-paddingRight'] && responsiveMediaCss(getPaddingRight(props['lg-paddingRight']), 'laptop')}
  ${(props) => props['xl-paddingRight'] && responsiveMediaCss(getPaddingRight(props['xl-paddingRight']), 'desktop')}
`;

/**
 *  ---- PaddingVertical
 * */

export type PaddingVerticalProps = {
  paddingVertical?: ValueType;
  ['sm-paddingVertical']?: ValueType;
  ['md-paddingVertical']?: ValueType;
  ['lg-paddingVertical']?: ValueType;
  ['xl-paddingVertical']?: ValueType;
};

const getPaddingVertical = (paddingVertical: ValueType) => css`
  padding-top: ${(props) =>
    paddingVertical === true ? props.theme.spacing.px16 : props.theme.spacing[paddingVertical]};
  padding-bottom: ${(props) =>
    paddingVertical === true ? props.theme.spacing.px16 : props.theme.spacing[paddingVertical]};
`;

export const paddingVerticalCss = css<PaddingVerticalProps>`
  ${(props) => props.paddingVertical && getPaddingVertical(props.paddingVertical)}
  ${(props) =>
    props['sm-paddingVertical'] && responsiveMediaCss(getPaddingVertical(props['sm-paddingVertical']), 'mobile')}
  ${(props) =>
    props['md-paddingVertical'] && responsiveMediaCss(getPaddingVertical(props['md-paddingVertical']), 'tablet')}
  ${(props) =>
    props['lg-paddingVertical'] && responsiveMediaCss(getPaddingVertical(props['lg-paddingVertical']), 'laptop')}
  ${(props) =>
    props['xl-paddingVertical'] && responsiveMediaCss(getPaddingVertical(props['xl-paddingVertical']), 'desktop')}
`;

/**
 *  ---- PaddingHorizontal
 * */

export type PaddingHorizontalProps = {
  paddingHorizontal?: ValueType;
  ['sm-paddingHorizontal']?: ValueType;
  ['md-paddingHorizontal']?: ValueType;
  ['lg-paddingHorizontal']?: ValueType;
  ['xl-paddingHorizontal']?: ValueType;
};

const getPaddingHorizontal = (paddingHorizontal: ValueType) => css`
  padding-left: ${(props) =>
    paddingHorizontal === true ? props.theme.spacing.px16 : props.theme.spacing[paddingHorizontal]};
  padding-right: ${(props) =>
    paddingHorizontal === true ? props.theme.spacing.px16 : props.theme.spacing[paddingHorizontal]};
`;

export const paddingHorizontalCss = css<PaddingHorizontalProps>`
  ${(props) => props.paddingHorizontal && getPaddingHorizontal(props.paddingHorizontal)}
  ${(props) =>
    props['sm-paddingHorizontal'] && responsiveMediaCss(getPaddingHorizontal(props['sm-paddingHorizontal']), 'mobile')}
  ${(props) =>
    props['md-paddingHorizontal'] && responsiveMediaCss(getPaddingHorizontal(props['md-paddingHorizontal']), 'tablet')}
  ${(props) =>
    props['lg-paddingHorizontal'] && responsiveMediaCss(getPaddingHorizontal(props['lg-paddingHorizontal']), 'laptop')}
  ${(props) =>
    props['xl-paddingHorizontal'] && responsiveMediaCss(getPaddingHorizontal(props['xl-paddingHorizontal']), 'desktop')}
`;
