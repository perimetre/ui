import React from 'react';
import classnames from 'classnames';

export type ResourcesCardProps = {
  /**
   * Card Image url
   * @default string
   */
  imageUrl?: string;
  /**
   * Event tilte
   * @default string
   */
  title?: string;
  /**
   * Event description
   * @default string
   */
  content?: string;
  /**
   * Card button label
   * @default string
   */
  className?: string;
};

/**
 * A Percentage Circle
 * @param props The input props
 * @param props.title Set the event title
 * @param props.content Set the event text content
 * @param props.imageUrl Set the sponsor image
 * @param props.className The input className
 */
export const ResourcesCard: React.FC<ResourcesCardProps> = ({ imageUrl, title, content, className }) => {
  return (
    <div className={classnames('pui-resources-card', className)}>
      <div className="p-6 w-full text-pui-paragraph-900">
        <div className="inline-block h-12 mb-2">
          <img src={imageUrl} alt="" className="w-full h-full" />
        </div>
        <h4 className="text-lg font-bold mb-2">{title}</h4>
        <div className="text-base font-normal flex items-center justify-between">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
