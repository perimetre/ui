import React from 'react';
import { classNameTrim } from '../../utils/string';

export type SelectInputProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
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
   * The classname string prepended to the input container className
   */
  containerClassName?: string;
};

/**
 * A text input
 *
 * @param props The input props
 * @param props.label If provided, displays a label above the input
 * @param props.help If provided, displays a help text under the input
 * @param props.error The error text to replace the help text with
 * @param props.success Shows a success status
 * @param props.loading Shows a loading status
 * @param props.containerClassName The classname string prepended to the input container className
 * @param props.appendButton If provided, this input will have a button appended in it
 * @param props.multiple Whether or not this select is a multi select
 * @param props.children If provided, the children will be appended under the input helper texts
 */
export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  help,
  error,
  success,
  loading,
  containerClassName,
  children,
  multiple,
  ...props
}) => (
  <div>
    <label className="pui-label-input" htmlFor={props.id}>
      {label}
    </label>
    <div
      className={classNameTrim(
        `${containerClassName || ''} ${!multiple ? 'pui-select-input-icon' : ''} ${
          error ? 'pui-text-input-error' : ''
        } ${success ? 'pui-text-input-success' : ''} ${loading ? 'pui-text-input-loading' : ''}`
      )}
    >
      <select {...props} multiple={multiple}>
        {children}
      </select>
    </div>
    {help && !error && <p className="pui-help-text-input">{help}</p>}
    {error && <p className="pui-animate-fadeDown pui-help-text-input text-pui-error">{error}</p>}
  </div>
);
