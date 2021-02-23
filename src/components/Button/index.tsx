import React from 'react';
import classnames from 'classnames';

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  /**
   * The size
   *
   * @default medium
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * The button type variant
   *
   * @default default
   */
  variant?: 'default' | 'bordered' | 'icon';
  /**
   * Whether or not this button should be a chip button
   *
   * @default false
   */
  isChip?: boolean;
};

/**
 * A button
 *
 * @param props The input props
 * @param props.size The size
 * @param props.variant The button type variant
 * @param props.isChip Whether or not this button should be a chip button
 * @param props.className The input className
 * @param props.children The component children
 */
export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  variant = 'default',
  isChip,
  className,
  children,
  ...props
}) => {
  const isIcon = variant === 'icon';
  return (
    <button
      type="button"
      {...props}
      className={classnames(
        {
          'pui-btn-icon': isIcon,
          [`pui-btn-${size}`]: !isIcon,
          [`pui-btn-${variant}`]: !isIcon,
          'pui-chip-btn': isChip
        },
        className
      )}
    >
      {children}
    </button>
  );
};
