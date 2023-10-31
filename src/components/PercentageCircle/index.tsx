import React from 'react';

export type PercentageCircleProps = {
  /**
   * Percentage number
   * @default number
   */
  percentage?: number;
};

/**
 * A Percentage Circle
 * @param props The input props
 * @param props.percentage Set the porcentage number
 */
export const PercentageCircle: React.FC<PercentageCircleProps> = ({ percentage }) => {
  return (
    <div className="single-chart">
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path
          className="circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={`${percentage} 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="15" y="20.35" className="percentage">
          {percentage}
        </text>
        <text x="24" y="20.35" className="percentage">
          %
        </text>
      </svg>
    </div>
  );
};
