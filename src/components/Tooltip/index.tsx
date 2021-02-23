import React, { forwardRef } from 'react';
import Tippy, { TippyProps } from '@tippyjs/react/headless';
import { classNameTrim } from '../../utils';

export type TooltipProps = TippyProps & {
  /**
   * Determines if the tooltip has an arrow.
   */
  arrow?: boolean;
  /**
   * The props for the button handler
   */
  buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
  /**
   * Classname to be appended to content classes
   */
  contentClassName?: string;
};

/**
 * Displays a toltip
 *
 * @param props The component props
 * @param props.arrow Determines if the tooltip has an arrow.
 * @param props.buttonProps The props for the button handler
 * @param props.contentClassName Classname to be appended to content classes
 * @param props.content The tooltip content
 * @param props.children The provided children
 */
export const Tooltip: React.FC<TooltipProps> = forwardRef<Element, TooltipProps>(
  ({ children, content, buttonProps, arrow = true, contentClassName, ...props }, ref) => (
    <Tippy
      {...props}
      ref={ref}
      render={(attrs) => (
        <div className="pui-tooltip" tabIndex={-1} {...attrs}>
          <div className={classNameTrim(`pui-tooltip-content ${contentClassName || ''}`)}>{content}</div>
          {arrow && (
            <div data-popper-arrow="">
              <div className="pui-tooltip-arrow" />
            </div>
          )}
        </div>
      )}
    >
      {/* For correct accessibility reasons, it's recommended that the tooltip element is a button */}
      <button
        {...buttonProps}
        className={classNameTrim(`pui-btn-icon flex items-center ${buttonProps?.className || ''}`)}
      >
        {children}
      </button>
    </Tippy>
  )
);
