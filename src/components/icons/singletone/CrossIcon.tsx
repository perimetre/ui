import React from 'react';

/**
 * CrossIcon icon to use with JSX
 *
 * @param props the icon props
 */
export const CrossIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M19.308 20.705l-7.306-7.304-7.31 7.308-1.401-1.4 7.31-7.31-7.31-7.308 1.401-1.4 7.31 7.308 7.306-7.304 1.401 1.4L13.404 12l7.305 7.305z"
      />
    </g>
  </svg>
);

/**
 * CrossIcon icon to use with CSS
 */
export const CrossIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%2F%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M19.308%2020.705l-7.306-7.304-7.31%207.308-1.401-1.4%207.31-7.31-7.31-7.308%201.401-1.4%207.31%207.308%207.306-7.304%201.401%201.4L13.404%2012l7.305%207.305z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')`;
