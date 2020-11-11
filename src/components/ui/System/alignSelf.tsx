import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type AlignSelfProps = {
  alignSelf?: ValueType<Property.AlignSelf>;
};

export const systemAlignSelf = system({
  alignSelf: true
});

export const alignSelfCss = css<AlignSelfProps>`
  ${systemAlignSelf}
`;
