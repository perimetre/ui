import React from 'react';
import classnames from 'classnames';
import { ArrowIcon } from '..';

export type WorkSessionCardProps = {
  /**
   * Card Image url
   *
   * @default string
   */
  imageUrl?: string;
  /**
   * Event tilte
   *
   * @default string
   */
  title?: string;
  /**
   * Event description
   *
   * @default string
   */
  content?: string;
  /**
   * Card button label
   *
   * @default string
   */
  buttonContent?: string;
  /**
   * title for the advisor
   *
   * @default string
   */
  advisorTitle?: string;
  /**
   * Advisor Name
   *
   * @default string
   */
  advisorName?: string;
  /**
   * pendind tasks number
   *
   * @default string
   */
  counter?: string;
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
 * @param props.counter The number of task per session
 * @param props.title Set the event title
 * @param props.content Set the event text content
 * @param props.buttonContent Set the button label
 * @param props.advisorTitle Set the title for the advisor
 * @param props.imageUrl Set the sponsor image
 * @param props.className The input className
 * @param props.gradientInitialColor The gradient bar initial color value
 * @param props.gradientMiddleColor The input className
 * @param props.gradientFinalColor The input className
 */
export const WorkSessionCard: React.FC<WorkSessionCardProps> = ({
  imageUrl,
  title,
  content,
  buttonContent,
  counter,
  advisorTitle,
  advisorName,
  className,
  gradientInitialColor,
  gradientMiddleColor,
  gradientFinalColor
}) => {
  return (
    <div className={classnames('pui-worksession-card', className)}>
      <div
        className={classnames(
          'gradient-bar',
          `bg-gradient-to-b ${gradientInitialColor} ${gradientMiddleColor} ${gradientFinalColor}`,
          className
        )}
      ></div>
      <div className="p-6 pl-8 w-full text-pui-paragraph-900">
        <h4 className="text-lg font-bold mb-3">{title}</h4>
        <div className="text-base font-normal flex items-center justify-between">
          <p>{content}</p>
          <span className="text-base font-medium mb-3 inline-block">{counter}</span>
        </div>
        <div className="text-base font-normal flex items-center justify-between">
          <p>{content}</p>
          <span className="text-base font-medium mb-3 inline-block">{counter}</span>
        </div>
        <div className="text-base font-normal flex items-center justify-between">
          <p>{content}</p>
          <span className="text-base font-medium mb-3 inline-block">{counter}</span>
        </div>
        <div className="inline-flex justify-between items-center w-full p-0 mt-6">
          <div className="flex items-center justify-between">
            <div
              className={classnames(
                'pui-expertImage',
                `bg-gradient-to-b ${gradientInitialColor} ${gradientMiddleColor} ${gradientFinalColor}`,
                'inline-flex items-cent w-14 h-14 mr-2',
                className
              )}
            >
              <img src={imageUrl} alt="" className="rounded-full w-full h-full" />
            </div>
            <div>
              <p className="text-sm font-normal mr-2 min-w-20">{advisorTitle}</p>
              <p className="text-base font-semibold mr-2 min-w-20">{advisorName}</p>
            </div>
          </div>
          <span className="inline-flex items-center pui-chip-bordered h-8 justify-items-end cursor-pointer">
            {buttonContent}
            <ArrowIcon className="h-4 w-4 ml-2" />
          </span>
        </div>
      </div>
    </div>
  );
};
