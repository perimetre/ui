import React from 'react';
import classnames from 'classnames';

/**
 * SearchIcon icon to use with JSX
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" {...props} className={classnames('fill-current', className)}>
    <path d="M16 14.767l-3.906-3.905a6.029 6.029 0 001.233-3.7A6.126 6.126 0 007.164 1 6.127 6.127 0 001 7.164a6.127 6.127 0 006.164 6.164 6.029 6.029 0 003.7-1.233L14.767 16 16 14.767zM4.038 4.041A4.36 4.36 0 017.16 2.764a4.36 4.36 0 014.4 4.4 4.36 4.36 0 01-4.4 4.4 4.36 4.36 0 01-4.4-4.4 4.36 4.36 0 011.277-3.123z" />
  </svg>
);

/**
 * SearchIcon icon to use with CSS
 */
export const SearchIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M16%2014.767l-3.906-3.905a6.029%206.029%200%20001.233-3.7A6.126%206.126%200%20007.164%201%206.127%206.127%200%20001%207.164a6.127%206.127%200%20006.164%206.164%206.029%206.029%200%20003.7-1.233L14.767%2016%2016%2014.767zM4.038%204.041A4.36%204.36%200%20017.16%202.764a4.36%204.36%200%20014.4%204.4%204.36%204.36%200%2001-4.4%204.4%204.36%204.36%200%2001-4.4-4.4%204.36%204.36%200%20011.277-3.123z%22%2F%3E%3C%2Fsvg%3E')`;
