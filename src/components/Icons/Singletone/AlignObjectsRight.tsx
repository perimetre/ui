import React from 'react';
import classnames from 'classnames';

/**
 * AlignObjectsRight icon to use with JSX
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const AlignObjectsRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="17" height="14" viewBox="0 0 17 14" {...props} className={classnames('fill-current', className)}>
    <rect width="3" height="14" rx="1.5" transform="matrix(-1 0 0 1 16.0063 0)" />
    <rect width="3" height="12" rx="1.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 2)" />
    <rect width="3" height="8" rx="1.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 4 9)" />
  </svg>
);

/**
 * AlignObjectsRight icon to use with CSS
 */
export const AlignObjectsRightIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2217%22%20height%3D%2214%22%20viewBox%3D%220%200%2017%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%223%22%20height%3D%2214%22%20rx%3D%221.5%22%20transform%3D%22matrix(-1%200%200%201%2016.0063%200)%22%2F%3E%3Crect%20width%3D%223%22%20height%3D%2212%22%20rx%3D%221.5%22%20transform%3D%22matrix(4.37114e-08%201%201%20-4.37114e-08%200%202)%22%2F%3E%3Crect%20width%3D%223%22%20height%3D%228%22%20rx%3D%221.5%22%20transform%3D%22matrix(4.37114e-08%201%201%20-4.37114e-08%204%209)%22%2F%3E%3C%2Fsvg%3E')`;
