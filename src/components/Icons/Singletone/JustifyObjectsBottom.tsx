import React from 'react';
import classnames from 'classnames';

/**
 * JustifyObjectsBottom icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const JustifyObjectsBottomIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="15" height="17" viewBox="0 0 15 17" {...props} className={classnames('fill-current', className)}>
    <rect
      x="0.00341797"
      y="16.0034"
      width="2.99881"
      height="14"
      rx="1.49941"
      transform="rotate(-90 0.00341797 16.0034)"
    />
    <rect x="2.00342" y="0.00341797" width="3" height="11.9952" rx="1.5" />
    <rect x="9.00342" y="4.00195" width="3" height="7.99683" rx="1.5" />
  </svg>
);

/**
 * JustifyObjectsBottom icon to use with CSS
 */
export const JustifyObjectsBottomIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2217%22%20viewBox%3D%220%200%2015%2017%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%220.00341797%22%20y%3D%2216.0034%22%20width%3D%222.99881%22%20height%3D%2214%22%20rx%3D%221.49941%22%20transform%3D%22rotate(-90%200.00341797%2016.0034)%22%2F%3E%3Crect%20x%3D%222.00342%22%20y%3D%220.00341797%22%20width%3D%223%22%20height%3D%2211.9952%22%20rx%3D%221.5%22%2F%3E%3Crect%20x%3D%229.00342%22%20y%3D%224.00195%22%20width%3D%223%22%20height%3D%227.99683%22%20rx%3D%221.5%22%2F%3E%3C%2Fsvg%3E')`;
