import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import { defaultTheme, ThemeSpacesEnum } from '../Theme/theme';
import ValueType from './valueType';

type ScaleType = ValueType<'fit-content' | Property.Width<ThemeSpacesEnum>>;

export type SizingProps = {
  height?: ScaleType;
  maxHeight?: ScaleType;
  minHeight?: ScaleType;
  width?: ScaleType;
  maxWidth?: ScaleType;
  minWidth?: ScaleType;
};

export const systemSizing = system({
  height: {
    property: 'height',
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  minHeight: {
    property: 'minHeight',
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  width: {
    property: 'width',
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  minWidth: {
    property: 'minWidth',
    scale: 'space',
    defaultScale: defaultTheme.space
  }
});

export const sizingCss = css<SizingProps>`
  ${systemSizing}
`;
