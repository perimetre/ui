import classnames from 'classnames';
import { EditorState } from 'draft-js';
import React from 'react';
import { Dropdown } from '../../../../Dropdown';
import { AngleDownIcon } from '../../../../Icons';
import { WYSIWYGTranslations } from '../../../translations';
import { ToolbarOptions } from '../../ToolbarOptions';

type SectionItemsProps = {
  /**
   * How this should be displayed
   */
  display: ToolbarOptions['sections'][number]['display'];
  /**
   * The list of items
   */
  items: ToolbarOptions['sections'][number]['items'];
  /**
   * The current editor state
   */
  editorState: EditorState;
  /**
   * The toggle method for a style
   */
  onToggle: (itemType: string, name: string) => void;
  /**
   * The translation object
   */
  translations: WYSIWYGTranslations;
};

/**
 * A list of items in a section
 *
 * @param props The component props
 * @param props.display How this should be displayed
 * @param props.items The list of items
 * @param props.editorState The current editor state
 * @param props.onToggle The toggle method for a style
 * @param props.translations The translation object
 */
export const SectionItems: React.FC<SectionItemsProps> = ({ display, items, onToggle, translations, editorState }) => {
  switch (display) {
    case 'button':
      return (
        <>
          {items.map((item) => {
            const active = item.isActive(editorState);
            return (
              <button
                key={item.name}
                className={classnames(
                  'pui-btn-icon p-0 h-8 w-8 flex items-center justify-center border border-gray-200',
                  {
                    'text-pui-paragraph-500': !active,
                    'text-pui-primary': active
                  }
                )}
                onClick={(e) => {
                  e.preventDefault();
                  onToggle(item.type, item.name);
                }}
                onMouseDown={(e) => e.preventDefault()}
              >
                {item.content()}
              </button>
            );
          })}
        </>
      );
    case 'dropdown':
      return (
        <Dropdown
          buttonProps={{
            className: 'h-8 border border-gray-200 text-pui-paragraph-500',
            /**
             * The on mouse down button callback.
             *
             * This callback is preventing the input to lose focus if the use clicks the button
             *
             * @param e the button event prop
             */
            onMouseDown: (e) => e.preventDefault()
          }}
          content={items.map((item) => ({
            id: item.name,
            content: (
              <button
                type="button"
                className={classnames('text-left', { 'text-pui-primary': item.isActive(editorState) })}
                onClick={(e) => {
                  e.preventDefault();
                  onToggle(item.type, item.name);
                }}
                // This callback is preventing the input to lose focus if the use clicks the button
                onMouseDown={(e) => e.preventDefault()}
              >
                {item.content()}
              </button>
            )
          }))}
        >
          <>
            <span>{translations.textStyleDropdown}</span>
            <AngleDownIcon className="pui-animate-scaleHover-target ml-2" />
          </>
        </Dropdown>
      );
    default:
      return <div>Section item {display} not implemented</div>;
  }
};
