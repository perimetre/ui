import { css } from 'styled-components';
import { Property } from 'csstype';
import { SpacingEnum } from '../legacyTheme';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = SpacingEnum | 'full' | 'fit-content' | Property.Width;

type HeightProps = {
  height?: ValueType;
  ['sm-height']?: ValueType;
  ['md-height']?: ValueType;
  ['lg-height']?: ValueType;
  ['xl-height']?: ValueType;
};

const getHeight = (height: ValueType) => {
  switch (height) {
    case 'full':
      return css`
        height: 100%;
      `;
    default:
      return css`
        height: ${(props) => (props.theme.spacing[height] ? props.theme.spacing[height] : height)};
      `;
  }
};

const heightCss = css<HeightProps>`
  ${(props) => props.height && getHeight(props.height)}
  ${(props) => props['sm-height'] && responsiveMediaCss(getHeight(props['sm-height']), 'mobile')}
  ${(props) => props['md-height'] && responsiveMediaCss(getHeight(props['md-height']), 'tablet')}
  ${(props) => props['lg-height'] && responsiveMediaCss(getHeight(props['lg-height']), 'laptop')}
  ${(props) => props['xl-height'] && responsiveMediaCss(getHeight(props['xl-height']), 'desktop')}
`;

type MaxHeightProps = {
  maxHeight?: ValueType;
  ['sm-maxHeight']?: ValueType;
  ['md-maxHeight']?: ValueType;
  ['lg-maxHeight']?: ValueType;
  ['xl-maxHeight']?: ValueType;
};

const getMaxHeight = (maxHeight: ValueType) => {
  switch (maxHeight) {
    case 'full':
      return css`
        max-height: 100%;
      `;
    default:
      return css`
        max-height: ${(props) => (props.theme.spacing[maxHeight] ? props.theme.spacing[maxHeight] : maxHeight)};
      `;
  }
};

const maxHeightCss = css<MaxHeightProps>`
  ${(props) => props.maxHeight && getMaxHeight(props.maxHeight)}
  ${(props) => props['sm-maxHeight'] && responsiveMediaCss(getMaxHeight(props['sm-maxHeight']), 'mobile')}
  ${(props) => props['md-maxHeight'] && responsiveMediaCss(getMaxHeight(props['md-maxHeight']), 'tablet')}
  ${(props) => props['lg-maxHeight'] && responsiveMediaCss(getMaxHeight(props['lg-maxHeight']), 'laptop')}
  ${(props) => props['xl-maxHeight'] && responsiveMediaCss(getMaxHeight(props['xl-maxHeight']), 'desktop')}
`;

type MinHeightProps = {
  minHeight?: ValueType;
  ['sm-minHeight']?: ValueType;
  ['md-minHeight']?: ValueType;
  ['lg-minHeight']?: ValueType;
  ['xl-minHeight']?: ValueType;
};

const getMinHeight = (minHeight: ValueType) => {
  switch (minHeight) {
    case 'full':
      return css`
        min-height: 100%;
      `;
    default:
      return css`
        min-height: ${(props) => (props.theme.spacing[minHeight] ? props.theme.spacing[minHeight] : minHeight)};
      `;
  }
};

const minHeightCss = css<MinHeightProps>`
  ${(props) => props.minHeight && getMinHeight(props.minHeight)}
  ${(props) => props['sm-minHeight'] && responsiveMediaCss(getMinHeight(props['sm-minHeight']), 'mobile')}
  ${(props) => props['md-minHeight'] && responsiveMediaCss(getMinHeight(props['md-minHeight']), 'tablet')}
  ${(props) => props['lg-minHeight'] && responsiveMediaCss(getMinHeight(props['lg-minHeight']), 'laptop')}
  ${(props) => props['xl-minHeight'] && responsiveMediaCss(getMinHeight(props['xl-minHeight']), 'desktop')}
`;

type WidthProps = {
  width?: ValueType;
  ['sm-width']?: ValueType;
  ['md-width']?: ValueType;
  ['lg-width']?: ValueType;
  ['xl-width']?: ValueType;
};

const getWidth = (width: ValueType) => {
  switch (width) {
    case 'full':
      return css`
        width: 100%;
      `;
    default:
      return css`
        width: ${(props) => (props.theme.spacing[width] ? props.theme.spacing[width] : width)};
      `;
  }
};

const widthCss = css<WidthProps>`
  ${(props) => props.width && getWidth(props.width)}
  ${(props) => props['sm-width'] && responsiveMediaCss(getWidth(props['sm-width']), 'mobile')}
  ${(props) => props['md-width'] && responsiveMediaCss(getWidth(props['md-width']), 'tablet')}
  ${(props) => props['lg-width'] && responsiveMediaCss(getWidth(props['lg-width']), 'laptop')}
  ${(props) => props['xl-width'] && responsiveMediaCss(getWidth(props['xl-width']), 'desktop')}
`;

type MaxWidthProps = {
  maxWidth?: ValueType;
  ['sm-maxWidth']?: ValueType;
  ['md-maxWidth']?: ValueType;
  ['lg-maxWidth']?: ValueType;
  ['xl-maxWidth']?: ValueType;
};

const getMaxWidth = (maxWidth: ValueType) => {
  switch (maxWidth) {
    case 'full':
      return css`
        max-width: 100%;
      `;
    default:
      return css`
        max-width: ${(props) => (props.theme.spacing[maxWidth] ? props.theme.spacing[maxWidth] : maxWidth)};
      `;
  }
};

const maxWidthCss = css<MaxWidthProps>`
  ${(props) => props.maxWidth && getMaxWidth(props.maxWidth)}
  ${(props) => props['sm-maxWidth'] && responsiveMediaCss(getMaxWidth(props['sm-maxWidth']), 'mobile')}
  ${(props) => props['md-maxWidth'] && responsiveMediaCss(getMaxWidth(props['md-maxWidth']), 'tablet')}
  ${(props) => props['lg-maxWidth'] && responsiveMediaCss(getMaxWidth(props['lg-maxWidth']), 'laptop')}
  ${(props) => props['xl-maxWidth'] && responsiveMediaCss(getMaxWidth(props['xl-maxWidth']), 'desktop')}
`;

type MinWidthProps = {
  minWidth?: ValueType;
  ['sm-minWidth']?: ValueType;
  ['md-minWidth']?: ValueType;
  ['lg-minWidth']?: ValueType;
  ['xl-minWidth']?: ValueType;
};

const getMinWidth = (minWidth: ValueType) => {
  switch (minWidth) {
    case 'full':
      return css`
        min-width: 100%;
      `;
    default:
      return css`
        min-width: ${(props) => (props.theme.spacing[minWidth] ? props.theme.spacing[minWidth] : minWidth)};
      `;
  }
};

const minWidthCss = css<MinWidthProps>`
  ${(props) => props.minWidth && getMinWidth(props.minWidth)}
  ${(props) => props['sm-minWidth'] && responsiveMediaCss(getMinWidth(props['sm-minWidth']), 'mobile')}
  ${(props) => props['md-minWidth'] && responsiveMediaCss(getMinWidth(props['md-minWidth']), 'tablet')}
  ${(props) => props['lg-minWidth'] && responsiveMediaCss(getMinWidth(props['lg-minWidth']), 'laptop')}
  ${(props) => props['xl-minWidth'] && responsiveMediaCss(getMinWidth(props['xl-minWidth']), 'desktop')}
`;

export type SizingProps = HeightProps & WidthProps & MaxWidthProps & MaxHeightProps & MinWidthProps & MinHeightProps;
export const sizingCss = css<SizingProps>`
  ${maxHeightCss}
  ${minHeightCss}
  ${heightCss}

  ${maxWidthCss}
  ${minWidthCss}
  ${widthCss}
`;
