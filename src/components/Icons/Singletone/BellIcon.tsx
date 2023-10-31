import React from 'react';
import classnames from 'classnames';

/**
 * BellIcon icon to use with JSX
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const BellIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" {...props} className={classnames('fill-current', className)}>
    <g fill="none">
      <path d="M0 0h16v16H0z" />
      <path
        d="M12.364 9.995V6.149c0-2.55-1.954-4.616-4.364-4.616S3.636 3.6 3.636 6.15v3.846a3.2 3.2 0 01-.389 1.538h9.506a3.2 3.2 0 01-.39-1.538zm2.909 3.039H.727c-.97 0-.97-1.533 0-1.533.804 0 1.455-.687 1.455-1.534V6.134C2.182 2.746 4.787 0 8 0c3.213 0 5.818 2.746 5.818 6.134v3.833c0 .847.651 1.534 1.455 1.534.97 0 .97 1.533 0 1.533zm-5.386 1.82C9.497 15.564 8.777 16 8 16c-.778 0-1.497-.437-1.887-1.146-.282-.511.068-.854.629-.854h2.516c.56 0 .91.343.63.854z"
        fill="currentColor"
      />
    </g>
  </svg>
);

/**
 * BellIcon icon to use with CSS
 */
export const BellIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M0%200h16v16H0z%22%2F%3E%3Cpath%20d%3D%22M12.364%209.995V6.149c0-2.55-1.954-4.616-4.364-4.616S3.636%203.6%203.636%206.15v3.846a3.2%203.2%200%2001-.389%201.538h9.506a3.2%203.2%200%2001-.39-1.538zm2.909%203.039H.727c-.97%200-.97-1.533%200-1.533.804%200%201.455-.687%201.455-1.534V6.134C2.182%202.746%204.787%200%208%200c3.213%200%205.818%202.746%205.818%206.134v3.833c0%20.847.651%201.534%201.455%201.534.97%200%20.97%201.533%200%201.533zm-5.386%201.82C9.497%2015.564%208.777%2016%208%2016c-.778%200-1.497-.437-1.887-1.146-.282-.511.068-.854.629-.854h2.516c.56%200%20.91.343.63.854z%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')`;
