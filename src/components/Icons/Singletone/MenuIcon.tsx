import React from 'react';
import classnames from 'classnames';

/**
 * MenuIcon icon to use with JSX
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...props} className={classnames('fill-current', className)}>
    <defs>
      <filter x="-15.3%" y="-223.9%" width="130.6%" height="547.8%" filterUnits="objectBoundingBox" id="prefix_12Uc4_a">
        <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="52.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0908817745 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter x="-.3%" y="-4.4%" width="100.6%" height="108.9%" filterUnits="objectBoundingBox" id="prefix_12Uc4_b">
        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0829873252 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#prefix_12Uc4_a)" transform="translate(-37 -32)">
      <g filter="url(#prefix_12Uc4_b)">
        <path d="M61 49v2H37v-2h24zm0-6v2H37v-2h24zm0-6v2H37v-2h24z" />
      </g>
    </g>
  </svg>
);

/**
 * MenuIcon icon to use with CSS
 */
export const MenuIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cfilter%20x%3D%22-15.3%25%22%20y%3D%22-223.9%25%22%20width%3D%22130.6%25%22%20height%3D%22547.8%25%22%20filterUnits%3D%22objectBoundingBox%22%20id%3D%22prefix_wW_jp_a%22%3E%3CfeOffset%20dy%3D%222%22%20in%3D%22SourceAlpha%22%20result%3D%22shadowOffsetOuter1%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%2252.5%22%20in%3D%22shadowOffsetOuter1%22%20result%3D%22shadowBlurOuter1%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.0908817745%200%22%20in%3D%22shadowBlurOuter1%22%20result%3D%22shadowMatrixOuter1%22%2F%3E%3CfeMerge%3E%3CfeMergeNode%20in%3D%22shadowMatrixOuter1%22%2F%3E%3CfeMergeNode%20in%3D%22SourceGraphic%22%2F%3E%3C%2FfeMerge%3E%3C%2Ffilter%3E%3Cfilter%20x%3D%22-.3%25%22%20y%3D%22-4.4%25%22%20width%3D%22100.6%25%22%20height%3D%22108.9%25%22%20filterUnits%3D%22objectBoundingBox%22%20id%3D%22prefix_wW_jp_b%22%3E%3CfeOffset%20dy%3D%221%22%20in%3D%22SourceAlpha%22%20result%3D%22shadowOffsetOuter1%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%22.5%22%20in%3D%22shadowOffsetOuter1%22%20result%3D%22shadowBlurOuter1%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.0829873252%200%22%20in%3D%22shadowBlurOuter1%22%20result%3D%22shadowMatrixOuter1%22%2F%3E%3CfeMerge%3E%3CfeMergeNode%20in%3D%22shadowMatrixOuter1%22%2F%3E%3CfeMergeNode%20in%3D%22SourceGraphic%22%2F%3E%3C%2FfeMerge%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg%20filter%3D%22url(%23prefix_wW_jp_a)%22%20transform%3D%22translate(-37%20-32)%22%3E%3Cg%20filter%3D%22url(%23prefix_wW_jp_b)%22%3E%3Cpath%20d%3D%22M61%2049v2H37v-2h24zm0-6v2H37v-2h24zm0-6v2H37v-2h24z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')`;
