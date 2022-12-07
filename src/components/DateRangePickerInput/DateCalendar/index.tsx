import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createCalendar } from '@internationalized/date';
import React, { useState } from 'react';
import { AriaRangeCalendarProps, useRangeCalendar } from 'react-aria';
import { useRangeCalendarState } from 'react-stately';
import { Instance as TippyInstance } from 'tippy.js';
import { DateValue } from '../../DatePickerInput';
import { CalendarButton } from '../../DatePickerInput/DateCalendar';
import { CalendarGrid } from '../../DatePickerInput/DateCalendar/CalendarGrid';

type DateCalendarProps<T extends DateValue = DateValue> = AriaRangeCalendarProps<T> & {
  /**
   * The current app locale
   */
  locale: string;
  /**
   * Instance for the tooltip component
   */
  tippyInstance?: TippyInstance;
  elementRef: HTMLDivElement;
};

/**
 * Calendar that renders the days in a grid for the date input
 *
 * @param props Calendar props for `useCalendar`
 * @param props.locale The current app locale
 * @param props.tippyInstance Instance for the tooltip component
 * @param props.elementRef The element that the calendar is attached to
 */
const DateCalendar: React.FC<DateCalendarProps> = ({ locale, tippyInstance, elementRef, ...props }) => {
  const state = useRangeCalendarState({
    ...props,
    locale,
    createCalendar
  });

  const { calendarProps, prevButtonProps, nextButtonProps, title } = useRangeCalendar(props, state, {
    current: elementRef
  });

  return (
    <div {...calendarProps} className="inline-block text-gray-800">
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

/**
 * Calendar that renders the days in a grid for the date input
 *
 * @param props Calendar props for `useCalendar`
 * @param props.locale The current app locale
 * @param props.tippyInstance Instance for the tooltip component
 */
export const DateRangeCalendar: React.FC<Omit<DateCalendarProps, 'elementRef'>> = (props) => {
  // Workaround for bug "cannot find addEventListener"
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  return <div ref={setRef}>{ref && <DateCalendar {...props} elementRef={ref} />}</div>;
};
