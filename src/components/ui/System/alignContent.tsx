import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type AlignContentProps = {
  alignContent?: ValueType<Property.AlignContent>;
};

export const systemAlignContent = system({
  alignContent: true
});

export const alignContentCss = css<AlignContentProps>`
  ${systemAlignContent}
`;
