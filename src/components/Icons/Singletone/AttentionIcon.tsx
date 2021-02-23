import React from 'react';
import classnames from 'classnames';

/**
 * AttentionIcon icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const AttentionIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" {...props} className={classnames('fill-current', className)}>
    <g fill="none">
      <path d="M-1-1h24v24H-1z" />
      <path
        d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm0 2a9 9 0 100 18 9 9 0 000-18zm0 12c.513 0 .936.383.993.883L12 15a.997.997 0 01-.883.993L11 16c-.552 0-1-.444-1-1 0-.513.383-.936.883-.993L11 14zm0-8c.552 0 1 .438 1 1.003v4.994a1 1 0 01-.883.996L11 13c-.552 0-1-.438-1-1.003V7.003a1 1 0 01.883-.996L11 6z"
        fill="currentColor"
      />
    </g>
  </svg>
);

/**
 * AttentionIcon icon to use with CSS
 */
export const AttentionIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2222%22%20height%3D%2222%22%20viewBox%3D%220%200%2022%2022%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M-1-1h24v24H-1z%22%2F%3E%3Cpath%20d%3D%22M11%200c6.075%200%2011%204.925%2011%2011s-4.925%2011-11%2011S0%2017.075%200%2011%204.925%200%2011%200zm0%202a9%209%200%20100%2018%209%209%200%20000-18zm0%2012c.513%200%20.936.383.993.883L12%2015a.997.997%200%2001-.883.993L11%2016c-.552%200-1-.444-1-1%200-.513.383-.936.883-.993L11%2014zm0-8c.552%200%201%20.438%201%201.003v4.994a1%201%200%2001-.883.996L11%2013c-.552%200-1-.438-1-1.003V7.003a1%201%200%2001.883-.996L11%206z%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')`;
