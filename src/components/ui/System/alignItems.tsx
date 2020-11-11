import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type AlignItemsProps = {
  alignItems?: ValueType<Property.AlignItems>;
};

export const systemAlignItems = system({
  alignItems: true
});

export const alignItemsCss = css<AlignItemsProps>`
  ${systemAlignItems}
`;
