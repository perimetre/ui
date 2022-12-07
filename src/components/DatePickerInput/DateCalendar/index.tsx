import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createCalendar } from '@internationalized/date';
import classnames from 'classnames';
import React, { PropsWithChildren, useRef } from 'react';
import { AriaButtonProps, AriaCalendarProps, mergeProps, useButton, useCalendar, useFocusRing } from 'react-aria';
import { useCalendarState } from 'react-stately';
import { DateValue } from '..';
import { Button } from '../../Button';
import { CalendarGrid } from './CalendarGrid';
import { Instance as TippyInstance } from 'tippy.js';

type CalendarButtonProps = AriaButtonProps<'button'> & {
  /**
   * Whether the button is currently pressed
   */
  isPressed?: boolean;
};

/**
 * Renders a single button for the calendar
 *
 * @param props Button props
 * @param props.children Content for the button
 */
const CalendarButton: React.FC<PropsWithChildren<CalendarButtonProps>> = ({ children, ...props }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const { buttonProps } = useButton(props, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Button
      variant="icon"
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={classnames(
        'rounded-full p-2 outline-none',
        props.isDisabled ? 'text-gray-400' : 'hover:bg-gray-100 active:bg-gray-200',
        {
          'ring-2 ring-pui-placeholder-color ring-offset-2': isFocusVisible
        }
      )}
      data-hide-menu-on-press="false"
    >
      {children}
    </Button>
  );
};

type DateCalendarProps<T extends DateValue = DateValue> = AriaCalendarProps<T> & {
  /**
   * The current app locale
   */
  locale: string;
  /**
   * Instance for the tooltip component
   */
  tippyInstance?: TippyInstance;
};

/**
 * Calendar that renders the days in a grid for the date input
 *
 * @param props Calendar props for `useCalendar`
 * @param props.locale The current app locale
 * @param props.tippyInstance Instance for the tooltip component
 */
export const DateCalendar: React.FC<DateCalendarProps> = ({ locale, tippyInstance, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  const state = useCalendarState({
    ...props,
    locale,
    createCalendar
  });

  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(props, state);

  return (
    <div {...calendarProps} ref={ref} className="inline-block text-gray-800">
      <div className="flex items-center pb-4">
        <h2 className="ml-2 flex-1 text-xl font-bold">{title}</h2>
        <CalendarButton {...prevButtonProps}>
          <FontAwesomeIcon className="h-6 w-6" icon={faChevronLeft} />
        </CalendarButton>
        <CalendarButton {...nextButtonProps}>
          <FontAwesomeIcon className="h-6 w-6" icon={faChevronRight} />
        </CalendarButton>
      </div>
      <CalendarGrid locale={locale} state={state} tippyInstance={tippyInstance} />
    </div>
  );
};
