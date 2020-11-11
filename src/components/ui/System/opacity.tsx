import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type OpacityProps = {
  opacity?: ValueType<Property.Opacity>;
};

export const systemOpacity = system({
  opacity: true
});

export const opacityCss = css<OpacityProps>`
  ${systemOpacity}
`;

// TODO: Add hover variant
