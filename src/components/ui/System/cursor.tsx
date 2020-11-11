import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type CursorProps = {
  cursor?: ValueType<Property.Cursor>;
};

export const systemCursor = system({
  cursor: true
});

export const cursorCss = css<CursorProps>`
  ${systemCursor}
`;
