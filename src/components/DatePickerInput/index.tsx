import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CalendarDate, CalendarDateTime, ZonedDateTime } from '@internationalized/date';
import classnames from 'classnames';
import React, { useRef } from 'react';
import { AriaDatePickerProps, useButton, useDatePicker } from 'react-aria';
import { useDatePickerState } from 'react-stately';
import { Instance as TippyInstance } from 'tippy.js';
import { Tooltip } from '../Tooltip';
import { DateCalendar } from './DateCalendar';
import { DateField } from './DateField';

const buttonVariantClassnameMap = {
  default: 'pui-btn-default rounded-l-none border-l-0 text-white',
  bordered: 'pui-btn-bordered pui-text-input-border rounded-l-none'
};

export type DatePickerState = ReturnType<typeof useDatePickerState>;

export type DateValue = CalendarDate | CalendarDateTime | ZonedDateTime;

export type DatePickerProps<T extends DateValue = DateValue> = AriaDatePickerProps<T> & {
  /**
   * The button type variant
   * @default default
   */
  variant?: keyof typeof buttonVariantClassnameMap;
  /**
   * The input id
   */
  id: string;
  /**
   * If provided, displays a label above the input
   */
  label?: string;
  /**
   * If provided, displays a help text under the input
   */
  help?: string;
  /**
   * The error text to replace the help text with
   */
  error?: string;
  /**
   * Shows a success status
   */
  success?: boolean;
  /**
   * Shows a loading status
   */
  loading?: boolean;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Whether the input is readOnly
   */
  readOnly?: boolean;
  /**
   * The current app locale
   */
  locale: string;
  /**
   * The classname string prepended to the input container className
   */
  containerClassName?: string;
  /**
   * The input className
   */
  className?: string;
  /**
   * A string that defines the order of the segments
   */
  format?: string;
};

/**
 * An input that allows the user to select a date
 * @param props The input props
 * @param props.variant The button type variant
 * @param props.id The input id
 * @param props.label If provided, displays a label above the input
 * @param props.help If provided, displays a help text under the input
 * @param props.error The error text to replace the help text with
 * @param props.success Shows a success status
 * @param props.loading Shows a loading status
 * @param props.disabled Whether the input is disabled
 * @param props.locale The current app locale
 * @param props.containerClassName The classname string prepended to the input container className
 * @param props.className The input className
 * @param props.format A string that defines the order of the segments
 */
//! Do not destructure label from props since useDatePicker also expects it
export const DatePickerInput: React.FC<DatePickerProps> = ({
  variant = 'default',
  help,
  error,
  success,
  loading,
  locale,
  containerClassName,
  className,
  format,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const tippyRef = useRef<HTMLElement & { _tippy?: TippyInstance }>(null);

  const state = useDatePickerState(props);
  // Ref: https://react-spectrum.adobe.com/react-aria/useDatePicker.html
  // Ref: https://codesandbox.io/s/reverent-faraday-5nwk87?file=/src/DatePicker.js
  const {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps: dateButtonProps,
    // dialogProps,
    calendarProps
  } = useDatePicker(
    { ...props, errorMessage: error, isDisabled: props.disabled, isReadOnly: props.readOnly },
    state,
    ref
  );

  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(dateButtonProps, buttonRef);

  return (
    <div className={classnames('relative inline-flex flex-col text-left w-full', className)}>
      {props.label && (
        <label {...labelProps} className="pui-label-input" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      {/* A flex container that will align the input and button together. Items strech is what will make them the same height */}
      <div {...groupProps} ref={ref} className="group pui-flex-center items-stretch">
        {/* The status wrapper */}
        <span
          className={classnames(containerClassName, 'w-full', {
            'pui-text-input-error': !!error,
            'pui-text-input-success': success,
            'pui-text-input-loading': loading
          })}
        >
          {/* The input background and border styling that actually makes it look like an input */}
          <div
            className={classnames(
              'relative flex items-center pui-text-input rounded-r-none border-r-0 group-focus-within:border-pui-placeholder-color group-hover:border-gray-400 group-focus-within:group-hover:border-pui-placeholder-color',
              {
                disabled: props.disabled
              }
            )}
          >
            {/* The input content, eg the date segments like day, month, year */}
            <DateField locale={locale} format={format} {...fieldProps} />
          </div>
        </span>
        <Tooltip
          ref={tippyRef}
          hideOnClick
          interactive
          disabled={props.disabled || props.readOnly}
          // plugins={[hideOnInnerButtonPress]}
          content={
            <div className="px-2 py-4">
              {state.isOpen && (
                <DateCalendar locale={locale} {...calendarProps} tippyInstance={tippyRef.current?._tippy} />
              )}
            </div>
          }
          placement="bottom-end"
          trigger="click"
          buttonProps={{
            className: classnames('px-6', buttonVariantClassnameMap[variant], {
              active: isPressed || state.isOpen,
              'text-pui-paragraph-300 bg-gray-100': variant === 'bordered' && (props.disabled || props.readOnly)
            }),
            disabled: props.disabled || props.readOnly,
            ...buttonProps,
            ref: buttonRef
          }}
          onHide={state.close}
          onDestroy={() => state?.close && state.close()}
        >
          <FontAwesomeIcon className="h-5 w-5" icon={faCalendar} />
        </Tooltip>
      </div>

      {help && !error && <p className="pui-help-text-input">{help}</p>}
      {error && <p className="pui-animate-fadeDown pui-help-text-input text-pui-error">{error}</p>}
    </div>
  );
};
