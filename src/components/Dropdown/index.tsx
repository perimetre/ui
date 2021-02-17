import React, { useCallback } from 'react';
import { Tooltip, TooltipProps } from '../Tooltip';

export type DropdownItem = {
  id: string;
  content?: React.ReactNode;
};

type DropdownContentOrList =
  | DropdownItem[]
  | ((getLinkList: (items: DropdownItem[]) => React.ReactNode) => JSX.Element);

export type DropdownProps = Omit<TooltipProps, 'arrow' | 'content'> & {
  header?: DropdownContentOrList;
  content?: DropdownContentOrList;
  footer?: DropdownContentOrList;
};

/**
 * A dropdown
 *
 * @param props The component props
 * @param props.children The provided children
 * @param props.content
 * @param props.header
 * @param props.footer
 */
export const Dropdown: React.FC<DropdownProps> = ({ children, content, header, footer, ...props }) => {
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
      interactive
      arrow={false}
      trigger="click"
      contentClassName="p-0"
      offset={[0, 0]}
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
};
