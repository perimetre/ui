import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type FlexGrowProps = {
  flexGrow?: ValueType<boolean>;
};

export const systemFlexGrow = system({
  flexGrow: {
    property: 'flexGrow',
    transform: (value: boolean | undefined) => (value ? '1' : '0')
  }
});

export const flexGrowCss = css<FlexGrowProps>`
  ${systemFlexGrow}
`;
