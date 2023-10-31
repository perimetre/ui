import classNames from 'classnames';
import { EditorState } from 'draft-js';
import React from 'react';
import { WYSIWYGTranslations } from '../translations';
import { ToolbarSection } from './Section';
import { toolbarOptions } from './ToolbarOptions';

type ToolbarProps = {
  /**
   * The current editor state
   */
  editorState: EditorState;
  /**
   * The update function to update the editor state
   */
  setEditorState: (editorState: EditorState) => void;
  /**
   * The toggle method for a block style
   */
  onBlockToggle: (blockType: string, name: string) => void;
  /**
   * The toggle method for an inline style
   */
  onInlineToggle: (inlineStyle: string) => void;
  /**
   * The translation object
   */
  translations: WYSIWYGTranslations;
  /**
   * This makes the toolbar position always fixed at the top of the container
   */
  disableSticky?: boolean;
};

/**
 * The rich text editor toolbar
 * @param props the component props
 * @param props.editorState The current editor state
 * @param props.onBlockToggle The toggle method for a block style
 * @param props.onInlineToggle The toggle method for an inline style
 * @param props.translations The translation object
 * @param props.setEditorState The update function to update the editor state
 * @param props.disableSticky This makes the toolbar position always fixed at the top of the container, so it will not follow scroll
 */
export const Toolbar: React.FC<ToolbarProps> = ({
  editorState,
  onBlockToggle,
  onInlineToggle,
  translations,
  setEditorState,
  disableSticky
}) => (
  <div className={classNames('pui-wysiwyg-toolbar', { sticky: !disableSticky })}>
    {toolbarOptions.sections.map((section) => (
      <ToolbarSection
        key={section.name}
        section={section}
        editorState={editorState}
        setEditorState={setEditorState}
        onBlockToggle={onBlockToggle}
        onInlineToggle={onInlineToggle}
        translations={translations}
      />
    ))}
  </div>
);
