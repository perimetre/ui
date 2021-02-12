import React from 'react';
import { classNameTrim } from '../../utils/string';

export type TextInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
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
 * @param props.className The input className
 * @param props.children If provided, the children will be appended under the input helper texts
 */
export const TextInput: React.FC<TextInputProps> = ({
  label,
  help,
  error,
  success,
  loading,
  containerClassName,
  className,
  children,
  ...props
}) => (
  <div>
    <label className="pui-label-input" htmlFor={props.id}>
      {label}
    </label>
    <span
      className={classNameTrim(
        `${containerClassName || ''} ${error ? 'pui-text-input-error' : ''} ${
          success ? 'pui-text-input-success' : ''
        } ${loading ? 'pui-text-input-loading' : ''}`
      )}
    >
      <input {...props} className={classNameTrim(`pui-text-input ${className || ''}`)} />
      {children}
    </span>
    {help && !error && <p className="pui-help-text-input">{help}</p>}
    {error && <p className="pui-animate-fadeDown pui-help-text-input text-pui-error">{error}</p>}
  </div>
);
