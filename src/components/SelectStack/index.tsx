import classNames from 'classnames';
import React from 'react';

export type SelectStackProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'onClick'
> & {
  /** The items to display */
  items?: string[];
  /** The active item */
  activeItem?: string;
  /**The container class name */
  containerClassName?: string;
  /** On click event handler */
  onClick?: (item: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

/**
 * A stack of selectable buttons
 *
 * @param props The component props
 * @param props.items The items to display
 * @param props.activeItem The active item
 * @param props.onClick On click event handler
 * @param props.containerClassName The container class name
 */
export const SelectStack: React.FC<SelectStackProps> = ({
  items,
  activeItem,
  onClick,
  containerClassName,
  ...props
}) => {
  return (
    <div className={classNames('mb-2 flex items-center', containerClassName)}>
      {items?.map((item, index) => {
        const active = item === activeItem;
        return (
          <button
            key={index}
            type="button"
            {...props}
            onClick={onClick ? (e) => onClick(item, e) : undefined}
            className={classNames(
              'border border-black px-4 py-1 rounded-full transition-colors ',
              {
                'rounded-l-none': index > 0, // All BUT first
                'rounded-r-none border-r-0': index < items.length - 1 // All BUT last,
              },
              active ? (!props.disabled ? 'text-pui-placeholder-color' : 'text-gray-500') : 'text-gray-400',
              !props.disabled ? 'hover:bg-gray-100' : 'border-gray-300 bg-gray-50',
              props.className
            )}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
