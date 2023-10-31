import React from 'react';
import classnames from 'classnames';

/**
 * JustifyObjectsTop icon to use with JSX
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const JustifyObjectsTopIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="15" height="17" viewBox="0 0 15 17" {...props} className={classnames('fill-current', className)}>
    <rect
      width="2.99881"
      height="14"
      rx="1.49941"
      transform="matrix(4.37114e-08 1 1 -4.37114e-08 0.00341797 0.00341797)"
    />
    <rect width="3" height="11.9952" rx="1.5" transform="matrix(1 -8.74054e-08 -8.74401e-08 -1 2.00342 16.0034)" />
    <rect width="3" height="7.99683" rx="1.5" transform="matrix(1 -8.74054e-08 -8.74401e-08 -1 9.00342 12.0049)" />
  </svg>
);

/**
 * JustifyObjectsTop icon to use with CSS
 */
export const JustifyObjectsTopIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2217%22%20viewBox%3D%220%200%2015%2017%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%222.99881%22%20height%3D%2214%22%20rx%3D%221.49941%22%20transform%3D%22matrix(4.37114e-08%201%201%20-4.37114e-08%200.00341797%200.00341797)%22%2F%3E%3Crect%20width%3D%223%22%20height%3D%2211.9952%22%20rx%3D%221.5%22%20transform%3D%22matrix(1%20-8.74054e-08%20-8.74401e-08%20-1%202.00342%2016.0034)%22%2F%3E%3Crect%20width%3D%223%22%20height%3D%227.99683%22%20rx%3D%221.5%22%20transform%3D%22matrix(1%20-8.74054e-08%20-8.74401e-08%20-1%209.00342%2012.0049)%22%2F%3E%3C%2Fsvg%3E')`;
