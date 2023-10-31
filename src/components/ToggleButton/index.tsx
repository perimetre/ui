import classnames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 36
};

export type ToggleButtonProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'children' | 'type'
> & {
  /**
   * Label text for the button's off state
   */
  offLabel: string;
  /**
   * Label text for the button's on state
   */
  onLabel: string;
};

/**
 * A toggle input component
 * @param props the component props
 * @param props.offLabel Label text for the button's off state
 * @param props.onLabel Label text for the button's on state
 */
export const ToggleButton: React.FC<ToggleButtonProps> = ({ offLabel, onLabel, ...props }) => (
  <motion.label
    layout
    layoutRoot
    className={classnames(
      'flex w-fit relative border rounded-full items-center justify-around overflow-hidden isolate',
      { 'cursor-pointer': !props.disabled && !props.readOnly, 'select-none': !props.readOnly },
      !props.disabled ? 'border-black' : 'border-gray-300',
      props.className
    )}
  >
    {/* Hidden input so it fakes as a real html input and can be used with forms, it also gives us the full range of event inputs to listen to */}
    <input type="checkbox" {...props} className="hidden" />

    {[offLabel, onLabel].map((label, index) => {
      const selected = (!props.checked && index === 0) || (props.checked && index === 1);
      return (
        // This defines the sizing that the background will copy from
        <div key={index} className="relative w-fit flex items-center justify-center px-8 py-1">
          {/* Label text */}
          <p className={classnames(selected ? (!props.disabled ? 'text-white' : 'text-gray-500') : 'text-gray-400')}>
            {label}
          </p>

          {/* This is the background that will get animated on toggle */}
          {selected ? (
            <motion.div
              className={classnames(
                'absolute -z-10 inset-0 rounded-full',
                !props.disabled ? 'bg-pui-placeholder-color' : 'bg-gray-100'
              )}
              layoutId="underline"
              transition={spring}
            />
          ) : null}
        </div>
      );
    })}
  </motion.label>
);
