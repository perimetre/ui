import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import { HTMLParsedContent } from '../HTMLParsedContent';

const sizeClassnameMap = {
  small: 'pui-check-radio-small',
  medium: 'pui-check-radio-medium',
  large: 'pui-check-radio-large'
};

export type CheckboxRadioInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  /**
   * The input type
   */
  type: 'checkbox' | 'radio';
  /**
   * Whether or not the checkbox is currently indeterminate
   */
  indeterminate?: boolean;
  /**
   * If provided, displays a label above the input. If value provided is of type string, the content will be parsed as rich text/html content
   */
  label?: React.ReactNode;
  /**
   * If provided, displays a help text under the input
   */
  help?: string;
  /**
   * The error text to replace the help text with
   */
  error?: string;
  /**
   * The size
   */
  size?: keyof typeof sizeClassnameMap;
};

/**
 * A checkbox or radio input
 * @param props The input props
 * @param props.type The input type
 * @param props.indeterminate Whether or not the checkbox is currently indeterminate
 * @param props.label If provided, displays a label above the input
 * @param props.help If provided, displays a help text under the input
 * @param props.error The error text to replace the help text with
 * @param props.size The size
 * @param props.className The input className
 */
export const CheckboxRadioInput: React.FC<CheckboxRadioInputProps> = ({
  label,
  help,
  error,
  size = 'medium' as const,
  className,
  indeterminate,
  type,
  ...props
}) => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    // You can’t make a checkbox indeterminate through HTML.
    // There is no indeterminate attribute.
    // It is a property of checkboxes though, which you can change via JavaScript.

    if (indeterminate !== undefined && inputRef?.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const input = (
    <input
      ref={inputRef}
      {...props}
      type={type}
      className={classnames(
        {
          'pui-checkbox': !label && type === 'checkbox',
          'pui-radio': !label && type !== 'checkbox'
        },
        sizeClassnameMap[size],
        className
      )}
    />
  );

  const bottom = (
    <div>
      {help && !error && <p className="pui-help-text-input">{help}</p>}
      {error && <p className="pui-animate-fadeDown pui-help-text-input text-pui-error">{error}</p>}
    </div>
  );

  // ! TODO: label should be a simple string, at most render the string as html but perhaps even that can be removed and done instead in
  // !       the project that imports this (set a label tag separate from this component when more customization is needed and use htmlFor)
  return typeof label === 'string' ? (
    <div>
      <label className={`${type === 'checkbox' ? 'pui-checkbox-label-clickable' : 'pui-radio-label-clickable'}`}>
        {input}
        <span>
          <HTMLParsedContent content={label} className="max-w-none" />
        </span>
      </label>
      {bottom}
    </div>
  ) : label ? (
    <div>
      <div className={`${type === 'checkbox' ? 'pui-checkbox-label' : 'pui-radio-label'}`}>
        {input}
        <span>{label}</span>
      </div>
      {bottom}
    </div>
  ) : (
    <div>
      <span>{input}</span>
      {bottom}
    </div>
  );
};
