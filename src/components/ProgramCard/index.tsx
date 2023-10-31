import React from 'react';
import classnames from 'classnames';
import { ArrowIcon } from '..';

const variantFilterap = {
  gradient: 'pui-moduleCard-gradient'
};

export type ProgramCardProps = {
  /**
   * The card filter variant
   * @default default
   */
  filter?: keyof typeof variantFilterap;
  /**
   * Card Image url
   * @default string
   */
  imageUrl?: string;
  /**
   * Card title
   * @default string
   */
  title?: string;
  /**
   * Card description
   * @default string
   */
  percentage?: string;
  /**
   * Card button label
   * @default string
   */
  buttonPercentage?: string;
  /**
   * Extended classes
   * @default string
   */
  className?: string;
  /**
   * Card button callback
   * @default void
   */
  onPressButton?: () => void;
  /**
   * Extended classes for title
   * @default string
   */
  classNameTitle?: string;
  /**
   * Extended classes for filter
   * @default string
   */
  classNameFilter?: string;
};

/**
 * A Percentage Circle
 * @param props The input props
 * @param props.filter The filter variant
 * @param props.imageUrl Set the image for the card
 * @param props.title Set the title for the card
 * @param props.percentage Set the text percentage for the card
 * @param props.buttonPercentage Set the button label for the card
 * @param props.className The input className
 * @param props.onPressButton The callback when pressing the button
 * @param props.classNameTitle The title className
 * @param props.classNameFilter The filter className
 */
export const ProgramCard: React.FC<ProgramCardProps> = ({
  imageUrl,
  title,
  percentage,
  buttonPercentage,
  className,
  filter,
  onPressButton,
  classNameTitle,
  classNameFilter
}) => {
  return (
    <div className={classnames('pui-programCard', className)}>
      <div className="w-full h-28 overflow-hidden relative">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        {filter && (
          <div
            className={classnames(
              'absolute opacity-25 z-10 inset-0 w-full h-full bg-gradient-to-r from-pui-primary to-pui-secondary',
              classNameFilter
            )}
          />
        )}
      </div>
      <div
        className={classnames(
          'p-6 pui-color-pui-paragraph-0 text-pui-paragraph-0 bg-pui-secondary bg-gradient-to-b from-pui-primary to-pui-current to-pui-secondary',
          className
        )}
      >
        <h4 className={classnames('text-2xl font-bold mb-3', classNameTitle)}>{title}</h4>
        <div className="w-full flex items-center justify-between mb-6">
          <div className="percentage-bar">
            <span className="progress-bar" style={{ width: percentage + '%' }}></span>
          </div>
          {percentage}%
        </div>
        <div className="inline-flex justify-end items-center w-full">
          <button
            type="button"
            onClick={onPressButton}
            className="inline-flex items-center pui-chip-bordered h-8 justify-items-end cursor-pointer font-bold focus:outline-none"
          >
            {buttonPercentage}
            <ArrowIcon className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
