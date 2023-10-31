import React from 'react';
import classnames from 'classnames';
import { ArrowIcon } from '..';

export const variantFilterap = {
  gradient: 'pui-moduleCard-gradient'
};

export type ModuleCardProps = {
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
  content?: string;
  /**
   * Card button label
   * @default string
   */
  buttonContent?: string;
  /**
   * Card button callback
   * @default void
   */
  onPressButton?: () => void;
  /**
   * Extended classes
   * @default string
   */
  className?: string;
  /**
   * Extended classes for title
   * @default string
   */
  classNameTitle?: string;
  /**
   * Extended classes for content
   * @default string
   */
  classNameContent?: string;
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
 * @param props.content Set the text content for the card
 * @param props.buttonContent Set the button label for the card
 * @param props.className The input className
 * @param props.onPressButton The callback when pressing the button
 * @param props.classNameTitle The title className
 * @param props.classNameContent The content className
 * @param props.classNameFilter The filter className
 */
export const ModuleCard: React.FC<ModuleCardProps> = ({
  filter,
  imageUrl,
  title,
  content,
  buttonContent,
  onPressButton,
  className,
  classNameTitle,
  classNameContent,
  classNameFilter
}) => {
  return (
    <div className={classnames('pui-moduleCard', className)}>
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
      <div className="flex flex-col flex-1 p-6">
        <h4 className={classnames('text-lg font-bold mb-3', classNameTitle)}>{title}</h4>
        <div className={classnames('text-base mb-6 font-normal', classNameContent)}>{content}</div>
        <div className="flex-1 inline-flex justify-end items-end w-full">
          <button
            type="button"
            onClick={onPressButton}
            className="inline-flex items-center pui-chip-bordered h-8 justify-items-end cursor-pointer font-bold focus:outline-none"
          >
            {buttonContent}
            <ArrowIcon className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
