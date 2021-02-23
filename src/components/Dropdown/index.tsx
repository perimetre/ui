import React, { forwardRef, useCallback } from 'react';
import { Tooltip, TooltipProps } from '../Tooltip';

export type DropdownItem = {
  /**
   * A unique ID, will be used s the value for Key
   */
  id: string;
  /**
   * The content of the item
   */
  content?: React.ReactNode;
};

type DropdownContentOrList =
  | DropdownItem[]
  | ((getLinkList: (items: DropdownItem[]) => React.ReactNode) => JSX.Element);

export type DropdownProps = Omit<TooltipProps, 'arrow' | 'content'> & {
  /**
   * A list of items or a function that returns a react component with what should be displayed in the dropdown's header
   */
  header?: DropdownContentOrList;
  /**
   * A list of items or a function that returns a react component with what should be displayed in the dropdown's content
   */
  content?: DropdownContentOrList;
  /**
   * A list of items or a function that returns a react component with what should be displayed in the dropdown's footer
   */
  footer?: DropdownContentOrList;
};

/**
 * A dropdown
 *
 * @param props The component props
 * @param props.children The provided children
 * @param props.header The dropdown HA list of items or a function that returns a react component with what should be displayed in the dropdown's header
 * @param props.content A list of items or a function that returns a react component with what should be displayed in the dropdown's content
 * @param props.footer A list of items or a function that returns a react component with what should be displayed in the dropdown's footer
 */
export const Dropdown: React.FC<DropdownProps> = forwardRef<Element, DropdownProps>(
  ({ children, content, header, footer, ...props }, ref) => {
    // A function that returns the link list JSX from a list of items
    const getLinkList = useCallback(
      (items: DropdownItem[]) => (
        <ul>
          {items.map(({ id, content }) => (
            <li key={id}>{content}</li>
          ))}
        </ul>
      ),
      []
    );

    return (
      <Tooltip
        placement="bottom-start"
        {...props}
        ref={ref}
        interactive
        arrow={false}
        trigger="click"
        contentClassName="p-0"
        offset={[0, 0]}
        popperOptions={{
          modifiers: [
            {
              name: 'preventOverflow',
              options: {
                padding: 0
              }
            },
            {
              name: 'flip',
              options: {
                padding: 0
              }
            }
          ]
        }}
        content={
          <>
            {header && (
              <div className="pui-dropdown-menu-header">
                {Array.isArray(header) ? getLinkList(header as DropdownItem[]) : header(getLinkList)}
              </div>
            )}
            {content && (
              <div className="pui-dropdown-menu-content">
                {Array.isArray(content) ? getLinkList(content as DropdownItem[]) : content(getLinkList)}
              </div>
            )}
            {footer && (
              <div className="pui-dropdown-menu-footer">
                {Array.isArray(footer) ? getLinkList(footer as DropdownItem[]) : footer(getLinkList)}
              </div>
            )}
          </>
        }
      >
        <>{children}</>
      </Tooltip>
    );
  }
);
