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
   * The update function to update the editor state
   */
  setEditorState: (editorState: EditorState) => void;
  /**
   * The toggle method for a style
   */
  onToggle?: (itemType: string, name: string) => void;
  /**
   * The label string
   */
  label?: string;
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
 * @param props.label The label string
 * @param props.translations The translation object
 * @param props.setEditorState The update function to update the editor state
 */
export const SectionItems: React.FC<SectionItemsProps> = ({
  display,
  items,
  onToggle,
  editorState,
  label,
  translations,
  setEditorState
}) => {
  switch (display) {
    case 'button':
      return (
        <>
          {items?.map((item) => {
            const isActive = item.isActive(editorState);
            return (
              <button
                key={item.name}
                className={classnames(
                  'pui-btn-icon p-0 h-8 w-8 flex items-center justify-center border border-gray-200',
                  {
                    'text-pui-paragraph-500': !isActive,
                    'text-pui-primary': isActive
                  }
                )}
                onClick={(e) => {
                  e.preventDefault();
                  if (onToggle) onToggle(item.type, item.name);
                }}
                onMouseDown={(e) => e.preventDefault()}
              >
                {item.content(translations, isActive, editorState, setEditorState, onToggle)}
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
          content={items?.map((item) => {
            const isActive = item.isActive(editorState);
            return {
              id: item.name,
              content: (
                <button
                  type="button"
                  className={classnames('text-left', { 'text-pui-primary': isActive })}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onToggle) onToggle(item.type, item.name);
                  }}
                  // This callback is preventing the input to lose focus if the use clicks the button
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {item.content(translations, isActive, editorState, setEditorState, onToggle)}
                </button>
              )
            };
          })}
        >
          <>
            <span>{label}</span>
            <AngleDownIcon className="pui-animate-scaleHover-target ml-2" />
          </>
        </Dropdown>
      );
    case 'unstyled':
      return (
        <>
          {items?.map((item) => (
            <React.Fragment key={item.name}>
              {item.content(translations, item.isActive(editorState), editorState, setEditorState, onToggle)}
            </React.Fragment>
          ))}
        </>
      );
    default:
      return <div>Section item {display} not implemented</div>;
  }
};
