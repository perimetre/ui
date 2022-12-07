/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { CalendarDate, getDayOfWeek, isSameDay } from '@internationalized/date';
import { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import classnames from 'classnames';
import React, { useRef } from 'react';
import { mergeProps, useCalendarCell, useFocusRing } from 'react-aria';
import { Instance as TippyInstance } from 'tippy.js';

type CalendarCellProps = {
  /**
   * The calendar date value
   */
  date: CalendarDate;
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
 * Renders a single calendar cell
 *
 * @param props Props for the calendar cell
 * @param props.state The calendar state from `useCalendarState`
 * @param props.date The calendar date value
 * @param props.locale The current app locale
 * @param props.tippyInstance Instance for the tooltip component
 */
export const CalendarCell: React.FC<CalendarCellProps> = ({ state, date, locale, tippyInstance }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { cellProps, buttonProps, isSelected, isOutsideVisibleRange, isDisabled, formattedDate, isInvalid } =
    useCalendarCell({ date }, state, ref);

  // IF this is a range selection calendar
  // The start and end date of the selected range will have
  // an emphasized appearance.
  const isSelectionStart = (state as RangeCalendarState).highlightedRange
    ? isSameDay(date, (state as RangeCalendarState).highlightedRange.start)
    : isSelected;
  const isSelectionEnd = (state as RangeCalendarState).highlightedRange
    ? isSameDay(date, (state as RangeCalendarState).highlightedRange.end)
    : isSelected;

  // We add rounded corners on the left for the first day of the month,
  // the first day of each week, and the start date of the selection.
  // We add rounded corners on the right for the last day of the month,
  // the last day of each week, and the end date of the selection.
  const dayOfWeek = getDayOfWeek(date, locale);
  const isRoundedLeft = isSelected && (isSelectionStart || dayOfWeek === 0 || date.day === 1);
  const isRoundedRight =
    isSelected && (isSelectionEnd || dayOfWeek === 6 || date.day === date.calendar.getDaysInMonth(date));

  const { focusProps, isFocusVisible } = useFocusRing();
  const finalButtonProps = mergeProps(buttonProps, focusProps);

  return (
    <td {...cellProps} className={`relative py-0.5 ${isFocusVisible ? 'z-10' : 'z-0'}`}>
      <div
        {...finalButtonProps}
        onPointerUp={(e) => {
          finalButtonProps.onPointerUp?.(e);

          if ('highlightedRange' in state ? !state.isDragging : true) {
            // Makes sure to run hide on the next tick
            setTimeout(() => tippyInstance?.hide(), 10);
          }
        }}
        onKeyUp={(e) => {
          finalButtonProps.onKeyUp?.(e);

          // If it's finished selecting a range, or if it's a single date picker
          if (('highlightedRange' in state ? !state.isDragging : true) && e.key === 'Enter') {
            // Makes sure to run hide on the next tick
            setTimeout(() => tippyInstance?.hide(), 10);
          }
        }}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={classnames(
          'group h-10 w-10 outline-none',
          {
            'rounded-l-full': isRoundedLeft,
            'rounded-r-full': isRoundedRight,
            disabled: isDisabled,
            // Hover state for non-selected cells.
            'hover:bg-gray-100': !isSelected && !isDisabled
          },
          isSelected ? (isInvalid ? 'bg-red-300' : 'bg-gray-300') : undefined
        )}
      >
        <div
          className={classnames(
            'flex h-full w-full items-center justify-center rounded-full',
            {
              'text-gray-400': isDisabled && !isInvalid,
              // Focus ring, visible while the cell has keyboard focus.
              'group-focus:z-2 ring-2 ring-pui-placeholder-color ring-offset-2': isFocusVisible
            },
            // Darker selection background for the start and end.
            isSelectionStart || isSelectionEnd
              ? isInvalid
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-pui-placeholder-color text-white hover:bg-pui-placeholder-color'
              : undefined,
            // Hover state for cells in the middle of the range.
            isSelected && !isDisabled && !(isSelectionStart || isSelectionEnd)
              ? isInvalid
                ? 'hover:bg-red-400'
                : 'hover:bg-pui-placeholder-color'
              : undefined,
            'cursor-default'
          )}
        >
          {formattedDate}
        </div>
      </div>
    </td>
  );
};
