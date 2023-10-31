import React from 'react';
import classnames from 'classnames';

/**
 * Attention2Icon icon to use with JSX
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const Attention2Icon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" {...props} className={classnames('fill-current', className)}>
    <g fill="none">
      <path d="M0 0h32v32H0z" />
      <path
        d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 20a2 2 0 100 4 2 2 0 000-4zm0-12a2 2 0 00-2 2v6a2 2 0 104 0v-6a2 2 0 00-2-2z"
        fill="currentColor"
      />
    </g>
  </svg>
);

/**
 * Attention2Icon icon to use with CSS
 */
export const Attention2IconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M0%200h32v32H0z%22%2F%3E%3Cpath%20d%3D%22M16%200c8.837%200%2016%207.163%2016%2016s-7.163%2016-16%2016S0%2024.837%200%2016%207.163%200%2016%200zm0%2020a2%202%200%20100%204%202%202%200%20000-4zm0-12a2%202%200%2000-2%202v6a2%202%200%20104%200v-6a2%202%200%2000-2-2z%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')`;
