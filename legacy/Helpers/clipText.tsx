import { css } from 'styled-components';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = boolean;

export type ClipTextProps = {
  clipText?: ValueType;
  ['sm-clipText']?: ValueType;
  ['md-clipText']?: ValueType;
  ['lg-clipText']?: ValueType;
  ['xl-clipText']?: ValueType;
};

const getClipText = () => css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const clipTextCss = css<ClipTextProps>`
  ${(props) => props.clipText && getClipText()}
  ${(props) => props['sm-clipText'] && responsiveMediaCss(getClipText(), 'mobile')}
  ${(props) => props['md-clipText'] && responsiveMediaCss(getClipText(), 'tablet')}
  ${(props) => props['lg-clipText'] && responsiveMediaCss(getClipText(), 'laptop')}
  ${(props) => props['xl-clipText'] && responsiveMediaCss(getClipText(), 'desktop')}
`;
