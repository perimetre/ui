import { Property } from 'csstype';
import { css } from 'styled-components';
import { system } from 'styled-system';
import ValueType from './valueType';

export type UserSelectProps = {
  userSelect?: ValueType<Property.UserSelect>;
};

export const systemUserSelect = system({
  userSelect: true
});

export const userSelectCss = css<UserSelectProps>`
  ${systemUserSelect}
`;
