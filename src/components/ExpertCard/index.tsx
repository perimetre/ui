import React from 'react';
import classnames from 'classnames';

export type ExpertCardProps = {
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
   * Advisor Name
   *
   * @default string
   */
  advisorLastname?: string;
  /**
   * Advisor email
   *
   * @default string
   */
  email?: string;
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
 * @param props.imageUrl Set the advisor image
 * @param props.advisorName Set the advisor name
 * @param props.advisorLastname Set the advisor lastname
 * @param props.advisorTitle Set the title for the advisor
 * @param props.email Set the advisor email
 * @param props.content Set the advisor description
 * @param props.className The input className
 * @param props.gradientInitialColor The gradient bar initial color value
 * @param props.gradientMiddleColor The input className
 * @param props.gradientFinalColor The input className
 */
export const ExpertCard: React.FC<ExpertCardProps> = ({
  imageUrl,
  content,
  email,
  advisorTitle,
  advisorName,
  advisorLastname,
  className,
  gradientInitialColor,
  gradientMiddleColor,
  gradientFinalColor
}) => {
  return (
    <div className={classnames('pui-expert-card', className)}>
      <div className="flex items-center justify-items-start w-full">
        <div
          className={classnames(
            'pui-expertImage',
            `bg-gradient-to-b ${gradientInitialColor} ${gradientMiddleColor} ${gradientFinalColor}`,
            'inline-flex items-cent w-28 h-28 mr-4',
            className
          )}
        >
          <img src={imageUrl} alt="" className="rounded-full w-full h-full" />
        </div>
        <div className="text-pui-paragraph-900">
          <p className="text-2xl font-bold">
            {advisorName}
            <span className="font-normal"> {advisorLastname}</span>
          </p>
          <p className="text-base font-normal">{advisorTitle}</p>
          <p className="text-base font-normal">{email}</p>
        </div>
      </div>
      <div className="text-base font-normal flex items-center justify-between ml-32">
        <p>{content}</p>
      </div>
    </div>
  );
};
