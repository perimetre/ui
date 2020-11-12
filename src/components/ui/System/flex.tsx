import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type FlexProps = {
  // These values are equivalent of tailwind: https://tailwindcss.com/docs/flex
  flex?: ValueType<'initial' | '1' | 'auto' | 'none' | Property.Flex>;
};

export const systemFlex = system({
  flex: {
    property: 'flex',
    transform: (value: string | undefined) => {
      // These values are equivalent of tailwind: https://tailwindcss.com/docs/flex
      switch (value) {
        case 'initial':
          return '0 1 auto';
        case '1':
          return '1 1 0%';
        case 'auto':
          return '1 1 auto';
        default:
          return value;
      }
    }
  }
});

export const flexCss = css<FlexProps>`
  ${systemFlex}
`;
