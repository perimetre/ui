import React from 'react';
import classnames from 'classnames';
import { ArrowIcon, CalendarIcon, TagsIcon } from '..';

export type EventCardProps = {
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
   * Sponsor Image label
   *
   * @default string
   */
  sponsorLabel?: string;
  /**
   * Event date
   *
   * @default string
   */
  date?: string;
  /**
   * Extended classes
   *
   * @default string
   */
  className?: string;
  /**
   * Extended classes for bar
   *
   * @default string
   */
  classNameBar?: string;
  /**
   * Card button callback
   *
   * @default void
   */
  onPressButton?: () => void;
  /**
   * Gradient bar initial color value
   *
   * @default string
   */
  tags?: string;
  /**
   * Events Tags
   *
   * @default string
   */
  tagsLabel?: string;
};

/**
 * A Percentage Circle
 *
 * @param props The input props
 * @param props.date The event date
 * @param props.title Set the event title
 * @param props.content Set the event text content
 * @param props.buttonContent Set the button label
 * @param props.sponsorLabel Set the sponsor image label
 * @param props.imageUrl Set the sponsor image
 * @param props.className The input className
 * @param props.tagsLabel The Events tags label
 * @param props.tags The Events tags
 * @param props.classNameBar The bar className
 * @param props.onPressButton The callback when pressing the button
 */
export const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  title,
  content,
  buttonContent,
  date,
  sponsorLabel,
  className,
  tags,
  tagsLabel,
  classNameBar,
  onPressButton
}) => {
  return (
    <div className={classnames('pui-event-card', className)}>
      <div
        className={classnames(
          'gradient-bar bg-gradient-to-b from-pui-primary to-pui-current to-pui-secondary',
          classNameBar
        )}
      />
      <div className="icon-wrapper py-6 ml-6">
        <CalendarIcon className="icon h-6 w-6 pui-color-pui-primary" />
      </div>
      <div className="p-6 pl-4 w-full text-pui-paragraph-900">
        <span className="text-base font-medium mb-3 inline-block">{date}</span>
        <h4 className="text-lg font-bold mb-3">{title}</h4>
        <p className="text-base mb-6 font-normal">{content}</p>
        <div className="inline-flex justify-start items-center w-full mb-6">
          <TagsIcon className="text-pui-primary" />
          <p className="ml-2">
            <b>{tagsLabel}</b>: {tags}
          </p>
        </div>
        <div className="inline-flex justify-between items-center w-full p-0">
          <div className="sponsor">
            <p className="text-sm font-normal mr-2 min-w-20">{sponsorLabel}</p>
            <div
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center left'
              }}
              className="h-12 w-32 bg-contain bg-no-repeat"
            />
          </div>
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
