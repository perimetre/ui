import classNames from 'classnames';
import { startCase } from 'lodash';
import React from 'react';
import { Button, ButtonProps } from '../Button';
import { Tooltip, TooltipProps } from '../Tooltip';

export type ButtonStackItem = {
  key: string;
  icon: () => React.ReactNode;
};

export type ButtonStackProps = {
  /** The list of buttons that should be displayed */
  items: (ButtonStackItem & (Omit<TooltipProps, 'ref'> | Omit<ButtonProps, 'ref'>))[];
  /** Which button key, from the list of provided `items` should be active */
  activeKey?: string;
  /** Whether or not it should have a tooltip on hover or not */
  hasTooltip?: boolean;
  /** Classname for the container that wrapps all the buttons */
  containerClassname?: string;
};

/**
 * A list of buttons besides each other
 *
 * @param props The component props
 * @param props.items The list of buttons that should be displayed
 * @param props.activeKey Which button key, from the list of provided `items` should be active
 * @param props.hasTooltip Whether or not it should have a tooltip on hover or not
 * @param props.containerClassname Classname for the container that wrapps all the buttons
 */
export const ButtonStack: React.FC<ButtonStackProps> = ({
  items,
  activeKey,
  hasTooltip = true,
  containerClassname
}) => (
  <div className={classNames('mb-2 flex items-center', containerClassname)}>
    {hasTooltip
      ? items.map(({ key, icon, ...props }, index) => {
          const tooltipProps = props as Omit<TooltipProps, 'ref'>;

          // ! If any change is done to some of these props, remember to also apply to the <Button> version when `hasTooltip` is false
          return (
            <Tooltip
              key={key}
              content={<p className="text-center">{startCase(key)}</p>}
              {...tooltipProps}
              buttonProps={{
                ...tooltipProps.buttonProps,
                className: classNames(
                  'pui-btn-bordered flex items-center justify-center w-9 px-1',
                  {
                    'bg-pui-placeholder-color text-pui-paragraph-0':
                      !tooltipProps.buttonProps?.disabled && activeKey === key, // If active
                    'rounded-l-none': index > 0, // All BUT first
                    'rounded-r-none border-r-0': index < items.length - 1 // All BUT last
                  },
                  tooltipProps.buttonProps?.className
                )
              }}
            >
              <>{icon()}</>
            </Tooltip>
          );
        })
      : items.map(({ key, icon, ...props }, index) => {
          const buttonProps = props as Omit<ButtonProps, 'ref'>;

          // ! If any change is done to some of these props, remember to also apply to the <Tooltip> version when `hasTooltip` is true
          return (
            <Button
              key={key}
              variant="bordered"
              {...buttonProps}
              className={classNames('pui-btn-bordered flex items-center justify-center w-9 px-1', {
                'bg-pui-placeholder-color text-pui-paragraph-0': !buttonProps?.disabled && activeKey === key, // If active
                'rounded-l-none': index > 0, // All BUT first
                'rounded-r-none border-r-0': index < items.length - 1 // All BUT last
              })}
            >
              <>{icon()}</>
            </Button>
          );
        })}
  </div>
);
