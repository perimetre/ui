import styled, { css } from 'styled-components';
import { SpacingProps as SpacingHelperProps, systemSpacing } from '../System/spacing';

export type SpacingProps = SpacingHelperProps;

export const spacingCss = css<SpacingProps>`
  ${systemSpacing}
`;

const Spacing = styled.div<SpacingProps>`
  ${spacingCss}
`;

export default Spacing;
