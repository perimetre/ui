import { getWeeksInMonth } from '@internationalized/date';
import { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import React from 'react';
import { AriaCalendarGridProps, useCalendarGrid } from 'react-aria';
import { CalendarCell } from './CalendarCell';
import { Instance as TippyInstance } from 'tippy.js';

type CalendarGridProps = AriaCalendarGridProps & {
  /**
   * The calendar state from `useCalendarState`
   */
  state: CalendarState | RangeCalendarState;
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
 * Renders the table with days in a grid for the date input
 * @param props Props for the calendar grid
 * @param props.state The calendar state from `useCalendarState`
 * @param props.locale The current app locale
 * @param props.tippyInstance Instance for the tooltip component
 */
export const CalendarGrid: React.FC<CalendarGridProps> = ({ state, locale, tippyInstance, ...props }) => {
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <table {...gridProps} cellPadding="0" className="flex-1">
      <thead {...headerProps} className="text-gray-600">
        <tr>
          {weekDays.map((day, index) => (
            <th key={index} className="text-center">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell tippyInstance={tippyInstance} locale={locale} key={i} date={date} state={state} />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
