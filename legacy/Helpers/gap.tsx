import { css } from 'styled-components';
import { SpacingEnum } from '../legacyTheme';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = SpacingEnum | true;

type GapVerticalProps = {
  gapVertical?: ValueType;
  ['sm-gapVertical']?: ValueType;
  ['md-gapVertical']?: ValueType;
  ['lg-gapVertical']?: ValueType;
  ['xl-gapVertical']?: ValueType;
};

const getGapVertical = (gapVertical: ValueType) => css`
  > * {
    &:not(:first-child) {
      margin-top: ${(props) => (gapVertical === true ? props.theme.spacing.px16 : props.theme.spacing[gapVertical])};
    }
  }
`;

const gapVerticalCss = css<GapVerticalProps>`
  ${(props) => props.gapVertical && getGapVertical(props.gapVertical)}
  ${(props) => props['sm-gapVertical'] && responsiveMediaCss(getGapVertical(props['sm-gapVertical']), 'mobile')}
  ${(props) => props['md-gapVertical'] && responsiveMediaCss(getGapVertical(props['md-gapVertical']), 'tablet')}
  ${(props) => props['lg-gapVertical'] && responsiveMediaCss(getGapVertical(props['lg-gapVertical']), 'laptop')}
  ${(props) => props['xl-gapVertical'] && responsiveMediaCss(getGapVertical(props['xl-gapVertical']), 'desktop')}
`;

type GapHorizontalProps = {
  gapHorizontal?: ValueType;
  ['sm-gapHorizontal']?: ValueType;
  ['md-gapHorizontal']?: ValueType;
  ['lg-gapHorizontal']?: ValueType;
  ['xl-gapHorizontal']?: ValueType;
};

const getGapHorizontal = (gapHorizontal: ValueType) => css`
  > * {
    &:not(:first-child) {
      margin-left: ${(props) =>
        gapHorizontal === true ? props.theme.spacing.px16 : props.theme.spacing[gapHorizontal]};
    }
  }
`;

const gapHorizontalCss = css<GapHorizontalProps>`
  ${(props) => props.gapHorizontal && getGapHorizontal(props.gapHorizontal)}
  ${(props) => props['sm-gapHorizontal'] && responsiveMediaCss(getGapHorizontal(props['sm-gapHorizontal']), 'mobile')}
  ${(props) => props['md-gapHorizontal'] && responsiveMediaCss(getGapHorizontal(props['md-gapHorizontal']), 'tablet')}
  ${(props) => props['lg-gapHorizontal'] && responsiveMediaCss(getGapHorizontal(props['lg-gapHorizontal']), 'laptop')}
  ${(props) => props['xl-gapHorizontal'] && responsiveMediaCss(getGapHorizontal(props['xl-gapHorizontal']), 'desktop')}
`;

export type GapProps = GapVerticalProps & GapHorizontalProps;
export const gapCss = css<GapProps>`
  ${gapVerticalCss}
  ${gapHorizontalCss}
`;
