import React from 'react';
import classnames from 'classnames';

export type TextAreaInputProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  /**
   * The input id
   */
  id: string;
  /**
   * If provided, displays a label above the input
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
 * A text area input
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
export const TextAreaInput: React.FC<TextAreaInputProps> = ({
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
      className={classnames(containerClassName, 'pui-scrollbar', {
        'pui-text-input-error': !!error,
        'pui-text-input-success': success,
        'pui-text-input-loading': loading
      })}
    >
      <textarea {...props} className={classnames('pui-text-input', className)}>
        {children}
      </textarea>
    </span>
    {help && !error && <p className="pui-help-text-input">{help}</p>}
    {error && <p className="pui-animate-fadeDown pui-help-text-input text-pui-error">{error}</p>}
  </div>
);
