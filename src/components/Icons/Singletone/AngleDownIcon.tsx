import React from 'react';
import classnames from 'classnames';

/**
 * AngleDown icon to use with JSX
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const AngleDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" {...props} className={classnames('fill-current', className)}>
    <path d="M12.293 4.586L13.707 6 8 11.707 2.293 6l1.414-1.414L8 8.879z" />
  </svg>
);

/**
 * AngleDown icon to use with CSS
 */
export const AngleDownIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.293%204.586L13.707%206%208%2011.707%202.293%206l1.414-1.414L8%208.879z%22%2F%3E%3C%2Fsvg%3E')`;
