import React from 'react';
import classnames from 'classnames';

export type BaseCardProps = {
  /**
   * Show gradient background for the card image
   *
   * @default true
   */
  imageGradient?: boolean;
  /**
   * Show left gradient bar on the card
   *
   * @default true
   */
  leftGradientBar?: boolean;
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
  imageAlt?: string;
  /**
   * Extended classes
   *
   * @default string
   */
  className: string;
  /**
   * Extended classes for content
   *
   * @default string;
   */
  classNameContent?: string;
  /**
   * Extended classes for filter
   *
   * @default string
   */
  classNameGradientImage?: string;
};

/**
 * A Percentage Circle
 *
 * @param props The input props
 * @param props.imageGradient The gradient background over the image
 * @param props.leftGradientBar The left gradient bar on the card
 * @param props.imageUrl Set the image for the card
 * @param props.imageAlt Set the title for the card
 * @param props.className The input className
 * @param props.classNameContent The content on the card className
 * @param props.classNameGradientImage The filter className
 * @param props.children The content of the card

 */
export const BaseCard: React.FC<BaseCardProps> = ({
  imageGradient,
  leftGradientBar,
  imageUrl,
  imageAlt,
  children,
  className,
  classNameContent,
  classNameGradientImage
}) => {
  return (
    <div className={classnames('pui-baseCard', className)}>
      {leftGradientBar && (
        <div className={classnames('gradient-bar', `bg-gradient-to-b from-pui-primary to-pui-secondary`)}></div>
      )}
      <div className="flex flex-col w-full">
        {imageUrl && (
          <div className="w-full h-28 overflow-hidden relative">
            <img src={imageUrl} alt={imageAlt} className="w-full h-full" />

            {imageGradient && (
              <div
                className={classnames(
                  'absolute opacity-25 z-10 inset-0 w-full h-full bg-gradient-to-r from-pui-primary to-pui-secondary',
                  classNameGradientImage
                )}
              />
            )}
          </div>
        )}
        <div className={classnames('flex flex-col flex-1 p-6', classNameContent)}>{children}</div>
      </div>
    </div>
  );
};
