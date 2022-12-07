import { createCalendar, DateValue } from '@internationalized/date';
import React, { useRef } from 'react';
import { AriaDateFieldProps, useDateField, useDateSegment } from 'react-aria';
import { DateFieldState, DateSegment as DateSegmentType, useDateFieldState } from 'react-stately';

type DateSegmentProps = {
  /**
   * Segment provided by `useDateFieldState`
   */
  segment: DateSegmentType;
  /**
   * State provided by `useDateFieldState`
   */
  state: DateFieldState;
};

/**
 * Renders a single segment (day or month or year) of the date within the date field
 *
 * @param props The segment props
 * @param props.segment Segment provided by `useDateFieldState`
 * @param props.state State provided by `useDateFieldState`
 */
const DateSegment: React.FC<DateSegmentProps> = ({ segment, state }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={`group box-content rounded-sm px-0.5 text-right tabular-nums outline-none focus:bg-pui-placeholder-color focus:text-white ${
        !segment.isEditable ? 'text-gray-500' : 'text-gray-800'
      }`}
      style={{
        ...segmentProps.style,
        minWidth: (segment.maxValue != null && String(segment.maxValue).length + 'ch') || undefined
      }}
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
      <span
        aria-hidden="true"
        className="block w-full text-center italic text-gray-500 group-focus:text-white"
        style={{
          visibility: segment.isPlaceholder ? undefined : 'hidden',
          height: segment.isPlaceholder ? '' : 0,
          pointerEvents: 'none'
        }}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? '' : segment.text}
    </div>
  );
};

type DateFieldProps<T extends DateValue = DateValue> = AriaDateFieldProps<T> & {
  /**
   * The current app locale
   */
  locale: string;
};

/**
 * Renders all segments for a inner section of a date field
 *
 * @param props The props for the inner date field
 * @param props.locale The current app locale
 */
export const DateField: React.FC<DateFieldProps> = ({ locale, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  });
  const { fieldProps } = useDateField(props, state, ref);

  return (
    <div {...fieldProps} ref={ref} className="flex">
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </div>
  );
};
