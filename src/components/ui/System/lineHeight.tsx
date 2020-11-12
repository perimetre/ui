import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type LineHeightProps = {
  lineHeight?: ValueType<Property.LineHeight>;
};

export const systemLineHeight = system({
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  }
});

export const lineHeightCss = css<LineHeightProps>`
  ${systemLineHeight}
`;
