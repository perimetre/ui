import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.UserSelect;

export type UserSelectProps = {
  userSelect?: ValueType;
  ['sm-userSelect']?: ValueType;
  ['md-userSelect']?: ValueType;
  ['lg-userSelect']?: ValueType;
  ['xl-userSelect']?: ValueType;
};

const getUserSelect = (userSelect: ValueType) => css`
  user-select: ${userSelect};
`;

export const userSelectCss = css<UserSelectProps>`
  ${(props) => props.userSelect && getUserSelect(props.userSelect)}
  ${(props) => props['sm-userSelect'] && responsiveMediaCss(getUserSelect(props['sm-userSelect']), 'mobile')}
  ${(props) => props['md-userSelect'] && responsiveMediaCss(getUserSelect(props['md-userSelect']), 'tablet')}
  ${(props) => props['lg-userSelect'] && responsiveMediaCss(getUserSelect(props['lg-userSelect']), 'laptop')}
  ${(props) => props['xl-userSelect'] && responsiveMediaCss(getUserSelect(props['xl-userSelect']), 'desktop')}
`;
