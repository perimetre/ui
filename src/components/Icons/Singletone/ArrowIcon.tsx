import React from 'react';
import classnames from 'classnames';

/**
 * Arrow icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const ArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="13" height="12" viewBox="0 0 13 12" {...props} className={classnames('fill-current', className)}>
    <path d="M5.65563 1.56799L6.26981 1.04768C6.52987 0.827368 6.95039 0.827368 7.20769 1.04768L12.586 5.60159C12.846 5.8219 12.846 6.17815 12.586 6.39612L7.20769 10.9524C6.94763 11.1727 6.5271 11.1727 6.26981 10.9524L5.65563 10.4321C5.3928 10.2094 5.39833 9.84612 5.66669 9.62815L9.00044 6.93752H1.04924C0.68128 6.93752 0.385254 6.68674 0.385254 6.37502V5.62502C0.385254 5.31331 0.68128 5.06252 1.04924 5.06252H9.00044L5.66669 2.3719C5.39557 2.15393 5.39003 1.79065 5.65563 1.56799Z" />
  </svg>
);

/**
 * ArrowIcon icon to use with CSS
 */
export const ArrowIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2213%22%20height%3D%2212%22%20viewBox%3D%220%200%2013%2012%22%3E%3Cpath%20d%3D%22M5.65563%201.56799L6.26981%201.04768C6.52987%200.827368%206.95039%200.827368%207.20769%201.04768L12.586%205.60159C12.846%205.8219%2012.846%206.17815%2012.586%206.39612L7.20769%2010.9524C6.94763%2011.1727%206.5271%2011.1727%206.26981%2010.9524L5.65563%2010.4321C5.3928%2010.2094%205.39833%209.84612%205.66669%209.62815L9.00044%206.93752H1.04924C0.68128%206.93752%200.385254%206.68674%200.385254%206.37502V5.62502C0.385254%205.31331%200.68128%205.06252%201.04924%205.06252H9.00044L5.66669%202.3719C5.39557%202.15393%205.39003%201.79065%205.65563%201.56799Z%22%2F%3E%3C%2Fsvg%3E')`;