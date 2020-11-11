import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.Cursor;

export type CursorProps = {
  cursor?: ValueType;
  ['sm-cursor']?: ValueType;
  ['md-cursor']?: ValueType;
  ['lg-cursor']?: ValueType;
  ['xl-cursor']?: ValueType;
};

const getCursor = (cursor: ValueType) => css`
  cursor: ${cursor};
`;

export const cursorCss = css<CursorProps>`
  ${(props) => props.cursor && getCursor(props.cursor)}
  ${(props) => props['sm-cursor'] && responsiveMediaCss(getCursor(props['sm-cursor']), 'mobile')}
  ${(props) => props['md-cursor'] && responsiveMediaCss(getCursor(props['md-cursor']), 'tablet')}
  ${(props) => props['lg-cursor'] && responsiveMediaCss(getCursor(props['lg-cursor']), 'laptop')}
  ${(props) => props['xl-cursor'] && responsiveMediaCss(getCursor(props['xl-cursor']), 'desktop')}
`;
