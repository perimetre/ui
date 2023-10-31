import classnames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import { HTMLParsedContent } from '../HTMLParsedContent';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
};

export type ToggleInputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'children' | 'type'
> & {
  label?: string | React.ReactNode;
  error?: string;
  help?: string;
};

/**
 * A toggle input component
 * @param props the component props
 * @param props.label the label of the input
 * @param props.error the error message
 * @param props.help help message if any
 */
export const ToggleInput: React.FC<ToggleInputProps> = ({ label, error, help, ...props }) => (
  <div>
    <label
      className={classnames(props.className, {
        'cursor-pointer': !props.disabled && !props.readOnly
      })}
    >
      <input type="checkbox" {...props} className="hidden" />
      <div className="flex items-center gap-2">
        <div
          className={classnames(
            'h-6.5 flex w-10 rounded-xl border-2 border-solid bg-white p-0.5 transition-colors',
            props.checked ? 'justify-end' : 'justify-start',
            !props.disabled ? (error ? 'border-pui-error' : 'border-pui-placeholder-color') : 'border-gray-300'
          )}
        >
          <motion.div
            layout
            className={classnames(
              'h-4 w-4 rounded-lg transition-colors',
              !props.disabled ? 'bg-pui-placeholder-color' : 'bg-gray-300'
            )}
            transition={spring}
          />
        </div>
        <span className="select-none">
          {typeof label === 'string' ? <HTMLParsedContent content={label} className="max-w-none" /> : label}
        </span>
      </div>
    </label>
    <div>
      {help && !error && <p className="pui-help-text-input">{help}</p>}
      {error && <p className="pui-animate-fadeDown pui-help-text-input text-pui-error">{error}</p>}
    </div>
  </div>
);
