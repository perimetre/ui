import React from 'react';
import classnames from 'classnames';
import { ArrowIcon } from '..';

export type ProgramCardProps = {
  /**
   * Card Image url
   *
   * @default string
   */
  imageUrl?: string;
  /**
   * Card title
   *
   * @default string
   */
  title?: string;
  /**
   * Card description
   *
   * @default string
   */
  percentage?: string;
  /**
   * Card button label
   *
   * @default string
   */
  buttonpercentage?: string;
  /**
   * Extended classes
   *
   * @default string
   */
  className?: string;
  /**
   * Gradient bar initial color value
   *
   * @default string
   */
  gradientInitialColor?: string;
  /**
   * Gradient bar initial color value if needed
   *
   * @default string
   */
  gradientMiddleColor?: string;
  /**
   * Gradient bar final color value
   *
   * @default string
   */
  gradientFinalColor?: string;
};

/**
 * A Percentage Circle
 *
 * @param props The input props
 * @param props.imageUrl Set the image for the card
 * @param props.title Set the title for the card
 * @param props.percentage Set the text percentage for the card
 * @param props.buttonpercentage Set the button label for the card
 * @param props.className The input className
 * @param props.gradientInitialColor The gradient bar initial color value
 * @param props.gradientMiddleColor The input className
 * @param props.gradientFinalColor The input className
 */
export const ProgramCard: React.FC<ProgramCardProps> = ({
  imageUrl,
  title,
  percentage,
  buttonpercentage,
  className,
  gradientInitialColor,
  gradientMiddleColor,
  gradientFinalColor
}) => {
  return (
    <div className={classnames('pui-programCard', className)}>
      <img src={imageUrl} alt="" className="w-full max-h-28" />
      <div
        className={classnames(
          'p-6 pui-color-pui-paragraph-0 text-pui-paragraph-0',
          `bg-gradient-to-b ${gradientInitialColor} ${gradientMiddleColor} ${gradientFinalColor}`,
          className
        )}
      >
        <h4 className="text-2xl font-bold mb-3">{title}</h4>
        <div className="w-full flex items-center justify-between mb-6">
          <div className="percentage-bar">
            <span className="progress-bar" style={{ width: percentage + '%' }}></span>
          </div>
          {percentage}%
        </div>
        <div className="inline-flex justify-end items-center w-full">
          <span className="inline-flex items-center pui-chip-bordered h-8 justify-items-end cursor-pointer font-bold">
            {buttonpercentage}
            <ArrowIcon className="h-4 w-4 ml-2" />
          </span>
        </div>
      </div>
    </div>
  );
};
