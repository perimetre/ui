import React from 'react';
import classnames from 'classnames';

/**
 * AlignObjectsLeft icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const AlignObjectsLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="17" height="14" viewBox="0 0 17 14" {...props} className={classnames('fill-current', className)}>
    <rect width="3" height="14" rx="1.5" />
    <rect x="16.0063" y="2" width="3" height="12" rx="1.5" transform="rotate(90 16.0063 2)" />
    <rect x="12.0063" y="9" width="3" height="8" rx="1.5" transform="rotate(90 12.0063 9)" />
  </svg>
);

/**
 * AlignObjectsLeft icon to use with CSS
 */
export const AlignObjectsLeftIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2217%22%20height%3D%2214%22%20viewBox%3D%220%200%2017%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%223%22%20height%3D%2214%22%20rx%3D%221.5%22%2F%3E%3Crect%20x%3D%2216.0063%22%20y%3D%222%22%20width%3D%223%22%20height%3D%2212%22%20rx%3D%221.5%22%20transform%3D%22rotate(90%2016.0063%202)%22%2F%3E%3Crect%20x%3D%2212.0063%22%20y%3D%229%22%20width%3D%223%22%20height%3D%228%22%20rx%3D%221.5%22%20transform%3D%22rotate(90%2012.0063%209)%22%2F%3E%3C%2Fsvg%3E')`;
