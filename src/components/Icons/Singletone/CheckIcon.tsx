import React from 'react';
import { classNameTrim } from '../../../utils';

/**
 * CheckIcon icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    {...props}
    className={classNameTrim(`fill-current ${className || ''}`)}
  >
    <path d="M5.852 11.601L1.625 8.22.375 9.781l5.773 4.618 9.626-11.766-1.548-1.266z" />
  </svg>
);

/**
 * CheckIcon icon to use with CSS
 */
export const CheckIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5.852%2011.601L1.625%208.22.375%209.781l5.773%204.618%209.626-11.766-1.548-1.266z%22%2F%3E%3C%2Fsvg%3E')`;
