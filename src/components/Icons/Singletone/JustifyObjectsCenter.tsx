import React from 'react';
import classnames from 'classnames';

/**
 * JustifyObjectsCenter icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const JustifyObjectsCenterIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="16" height="15" viewBox="0 0 16 15" {...props} className={classnames('fill-current', className)}>
    <rect y="9" width="3" height="16" rx="1.5" transform="rotate(-90 0 9)" />
    <rect x="4" width="3" height="15" rx="1.5" />
    <rect x="9" y="3" width="3" height="9" rx="1.5" />
  </svg>
);

/**
 * JustifyObjectsCenter icon to use with CSS
 */
export const JustifyObjectsCenterIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2215%22%20viewBox%3D%220%200%2016%2015%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20y%3D%229%22%20width%3D%223%22%20height%3D%2216%22%20rx%3D%221.5%22%20transform%3D%22rotate(-90%200%209)%22%2F%3E%3Crect%20x%3D%224%22%20width%3D%223%22%20height%3D%2215%22%20rx%3D%221.5%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%223%22%20width%3D%223%22%20height%3D%229%22%20rx%3D%221.5%22%2F%3E%3C%2Fsvg%3E')`;
