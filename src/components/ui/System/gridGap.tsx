import { Properties, Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import { defaultTheme, ThemeSpacesEnum } from '../Theme/theme';
import ValueType from './valueType';

type ScaleType = ValueType<Property.GridGap<ThemeSpacesEnum>>;

export type GridGapProps = {
  gridGap?: ScaleType;
  gridColumnGap?: ScaleType;
  gridRowGap?: ScaleType;
};

export const systemGridGap = system({
  gridGap: {
    properties: ['gap', 'grid-gap' as keyof Properties],
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  gridColumnGap: {
    properties: ['columnGap', 'gridColumnGap' as keyof Properties],
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  gridRowGap: {
    properties: ['rowGap', 'gridRowGap' as keyof Properties],
    scale: 'space',
    defaultScale: defaultTheme.space
  }
});

export const gridGapCss = css<GridGapProps>`
  ${systemGridGap}
`;
