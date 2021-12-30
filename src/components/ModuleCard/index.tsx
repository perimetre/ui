import React from 'react';
import classnames from 'classnames';
import { ArrowIcon } from '..';

export type ModuleCardProps = {
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
  content?: string;
  /**
   * Card button label
   *
   * @default string
   */
  buttonContent?: string;
  /**
   * Extended classes
   *
   * @default string
   */
  className?: string;
};

/**
 * A Percentage Circle
 *
 * @param props The input props
 * @param props.imageUrl Set the image for the card
 * @param props.title Set the title for the card
 * @param props.content Set the text content for the card
 * @param props.buttonContent Set the button label for the card
 * @param props.className The input className
 */
export const ModuleCard: React.FC<ModuleCardProps> = ({ imageUrl, title, content, buttonContent, className }) => {
  return (
    <div className={classnames('pui-moduleCard', className)}>
      <img src={imageUrl} alt="" className="w-full max-h-28" />
      <div className="p-6">
        <h4 className="text-lg font-bold mb-3">{title}</h4>
        <p className="text-base mb-6 font-normal">{content}</p>
        <div className="inline-flex justify-end items-center w-full">
          <span className="inline-flex items-center pui-chip-bordered h-8 justify-items-end cursor-pointer">
            {buttonContent}
            <ArrowIcon className="h-4 w-4 ml-2" />
          </span>
        </div>
      </div>
    </div>
  );
};
