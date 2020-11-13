import styled from 'styled-components';
import { SpacingHelperProps, spacingHelperCss } from '../Helpers/spacing';

export type SpacingProps = SpacingHelperProps;

const Spacing = styled.div<SpacingProps>`
  ${spacingHelperCss}
`;

export default Spacing;
