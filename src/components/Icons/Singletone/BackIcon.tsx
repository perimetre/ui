import React from 'react';
import classnames from 'classnames';

/**
 * BackIcon icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const BackIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...props} className={classnames('fill-current', className)}>
    <path d="M10.414 5l1.414 1.414-5 5H22v2H6.828l5 5-1.414 1.414L3 12.414 4.414 11l6-6z" />
  </svg>
);

/**
 * BackIcon icon to use with CSS
 */
export const BackIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.414%205l1.414%201.414-5%205H22v2H6.828l5%205-1.414%201.414L3%2012.414%204.414%2011l6-6z%22%2F%3E%3C%2Fsvg%3E')`;
