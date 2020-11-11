import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

const getSizing = (value: string) => {
  switch (value) {
    case 'full':
      return '100%';
    default:
      return value;
  }
};

export type SizingProps = {
  height?: ValueType</* SpacingEnum | */ 'full' | 'fit-content' | Property.Width>;
  maxHeight?: ValueType</* SpacingEnum | */ 'full' | 'fit-content' | Property.Width>;
  minHeight?: ValueType</* SpacingEnum | */ 'full' | 'fit-content' | Property.Width>;
  width?: ValueType</* SpacingEnum | */ 'full' | 'fit-content' | Property.Width>;
  maxWidth?: ValueType</* SpacingEnum | */ 'full' | 'fit-content' | Property.Width>;
  minWidth?: ValueType</* SpacingEnum | */ 'full' | 'fit-content' | Property.Width>;
};

export const systemSizing = system({
  height: {
    property: 'height',
    transform: getSizing
  },
  maxHeight: {
    property: 'maxHeight',
    transform: getSizing
  },
  minHeight: {
    property: 'minHeight',
    transform: getSizing
  },
  width: {
    property: 'width',
    transform: getSizing
  },
  maxWidth: {
    property: 'maxWidth',
    transform: getSizing
  },
  minWidth: {
    property: 'minWidth',
    transform: getSizing
  }
});

export const sizingCss = css<SizingProps>`
  ${systemSizing}
`;

// TODO: test transform
