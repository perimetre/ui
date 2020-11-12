import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import { defaultTheme, ThemeSpacesEnum } from '../Theme/theme';
import ValueType from './valueType';

type ScaleType = ValueType<Property.BorderRadius<ThemeSpacesEnum>>;

export type BorderRadiusProps = {
  borderRadius?: ScaleType;
  borderRadiusTop?: ScaleType;
  borderRadiusBottom?: ScaleType;
  borderRadiusLeft?: ScaleType;
  borderRadiusRight?: ScaleType;
};

export const systemBorderRadius = system({
  borderRadius: true,
  borderRadiusTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  borderRadiusBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  borderRadiusLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'space',
    defaultScale: defaultTheme.space
  },
  borderRadiusRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'space',
    defaultScale: defaultTheme.space
  }
});

export const borderRadiusCss = css<BorderRadiusProps>`
  ${systemBorderRadius}
`;
