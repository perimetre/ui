import React from 'react';
import classnames from 'classnames';

/**
 * Calendar icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg width="25" height="22" viewBox="0 0 25 22" {...props} className={classnames('fill-current', className)}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3492 3.91313H11.088C10.5173 3.91313 10.0546 3.44591 10.0546 2.86965C10.0546 2.29339 10.5173 1.82617 11.088 1.82617H14.3492C14.9199 1.82617 15.3826 2.29339 15.3826 2.86965C15.3826 3.44591 14.9199 3.91313 14.3492 3.91313ZM24.6019 20.6087V2.96609C24.6019 2.38983 24.1393 1.82609 23.5686 1.82609H21.1532C20.5825 1.82609 20.1198 2.2933 20.1198 2.86957C20.1198 3.44583 20.5825 3.91304 21.1532 3.91304H22.5353V8.34783H2.90166V3.91304H4.2835C4.85417 3.91304 5.31685 3.44583 5.31685 2.86957C5.31685 2.2933 4.85417 1.82609 4.2835 1.82609H1.86831C1.29764 1.82609 0.834961 2.38983 0.834961 2.96609V20.6087C0.834961 21.185 1.29764 21.6522 1.86831 21.6522H23.5686C24.1393 21.6522 24.6019 21.185 24.6019 20.6087ZM18.9182 4.64504C18.9182 5.3653 18.3398 5.94939 17.6265 5.94939C16.913 5.94939 16.3348 5.3653 16.3348 4.64504V1.30435C16.3348 0.584087 16.913 0 17.6265 0C18.3398 0 18.9182 0.584087 18.9182 1.30435V4.64504ZM6.51849 1.30435V4.64504C6.51849 5.3653 7.09665 5.94939 7.81017 5.94939C8.52344 5.94939 9.10186 5.3653 9.10186 4.64504V1.30435C9.10186 0.584087 8.52344 0 7.81017 0C7.09665 0 6.51849 0.584087 6.51849 1.30435Z"
    />
  </svg>
);

/**
 * CalendarIcon icon to use with CSS
 */
export const CalendarIconURL = `url('data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2222%22%20viewBox%3D%220%200%2025%2022%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.3492%203.91313H11.088C10.5173%203.91313%2010.0546%203.44591%2010.0546%202.86965C10.0546%202.29339%2010.5173%201.82617%2011.088%201.82617H14.3492C14.9199%201.82617%2015.3826%202.29339%2015.3826%202.86965C15.3826%203.44591%2014.9199%203.91313%2014.3492%203.91313ZM24.6019%2020.6087V2.96609C24.6019%202.38983%2024.1393%201.82609%2023.5686%201.82609H21.1532C20.5825%201.82609%2020.1198%202.2933%2020.1198%202.86957C20.1198%203.44583%2020.5825%203.91304%2021.1532%203.91304H22.5353V8.34783H2.90166V3.91304H4.2835C4.85417%203.91304%205.31685%203.44583%205.31685%202.86957C5.31685%202.2933%204.85417%201.82609%204.2835%201.82609H1.86831C1.29764%201.82609%200.834961%202.38983%200.834961%202.96609V20.6087C0.834961%2021.185%201.29764%2021.6522%201.86831%2021.6522H23.5686C24.1393%2021.6522%2024.6019%2021.185%2024.6019%2020.6087ZM18.9182%204.64504C18.9182%205.3653%2018.3398%205.94939%2017.6265%205.94939C16.913%205.94939%2016.3348%205.3653%2016.3348%204.64504V1.30435C16.3348%200.584087%2016.913%200%2017.6265%200C18.3398%200%2018.9182%200.584087%2018.9182%201.30435V4.64504ZM6.51849%201.30435V4.64504C6.51849%205.3653%207.09665%205.94939%207.81017%205.94939C8.52344%205.94939%209.10186%205.3653%209.10186%204.64504V1.30435C9.10186%200.584087%208.52344%200%207.81017%200C7.09665%200%206.51849%200.584087%206.51849%201.30435Z%22%2F%3E%3C%2Fsvg%3E')`;
