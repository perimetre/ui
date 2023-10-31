import React, { forwardRef } from 'react';
import classnames from 'classnames';

const variantClassnameMap = {
  default: 'pui-btn-default',
  bordered: 'pui-btn-bordered',
  icon: 'pui-btn-icon'
};

const sizeClassnameMap = {
  small: 'pui-btn-small',
  medium: 'pui-btn-medium',
  large: 'pui-btn-large',
  xlarge: 'pui-btn-xlarge'
};

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  /**
   * The size
   * @default medium
   */
  size?: keyof typeof sizeClassnameMap;
  /**
   * The button type variant
   * @default default
   */
  variant?: keyof typeof variantClassnameMap;
  /**
   * Whether or not this button should be a chip button
   * @default false
   */
  isChip?: boolean;
};

/**
 * A button
 * @param props The input props
 * @param props.size The size
 * @param props.variant The button type variant
 * @param props.isChip Whether or not this button should be a chip button
 * @param props.className The input className
 * @param props.children The component children
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'medium', variant = 'default', isChip, className, children, ...props }, ref) => {
    const isIcon = variant === 'icon';

    return (
      <button
        type="button"
        {...props}
        ref={ref}
        className={classnames(
          variantClassnameMap[variant],
          {
            [sizeClassnameMap[size]]: !isIcon,
            'pui-chip-btn': isChip
          },
          className
        )}
      >
        {children}
      </button>
    );
  }
);
