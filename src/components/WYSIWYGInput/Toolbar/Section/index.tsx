import { EditorState } from 'draft-js';
import React from 'react';
import { WYSIWYGTranslations } from '../../translations';
import { ToolbarOptions } from '../ToolbarOptions';
import { SectionItems } from './Item';

type BlockSectionProps = {
  /**
   * The section object for the current section
   */
  section: ToolbarOptions['sections'][number];
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
 * An block section
 *
 * @param props The component props
 * @param props.section The section object for the current section
 * @param props.editorState The current editor state
 * @param props.onToggle The toggle method for a style
 * @param props.translations The translation object
 */
const BlockSection: React.FC<BlockSectionProps> = ({ section, editorState, onToggle, translations }) => (
  <SectionItems
    display={section.display}
    items={section.items}
    editorState={editorState}
    onToggle={onToggle}
    translations={translations}
  />
);

type InlineSectionProps = {
  /**
   * The section object for the current section
   */
  section: ToolbarOptions['sections'][number];
  /**
   * The current editor state
   */
  editorState: EditorState;
  /**
   * The toggle method for a style
   */
  onToggle: (itemType: string) => void;
  /**
   * The translation object
   */
  translations: WYSIWYGTranslations;
};

/**
 * An inline section
 *
 * @param props The component props
 * @param props.section The section object for the current section
 * @param props.editorState The current editor state
 * @param props.onToggle The toggle method for a style
 * @param props.translations The translation object
 */
const InlineSection: React.FC<InlineSectionProps> = ({ section, editorState, onToggle, translations }) => (
  <SectionItems
    display={section.display}
    items={section.items}
    editorState={editorState}
    onToggle={onToggle}
    translations={translations}
  />
);

type ToolbarSectionProps = {
  /**
   * The section object for the current section
   */
  section: ToolbarOptions['sections'][number];
  /**
   * The current editor state
   */
  editorState: EditorState;
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
};

/**
 * A single toolbar section
 *
 * @param props the component props
 * @param props.section The section object for the current section
 * @param props.editorState The current editor state
 * @param props.onBlockToggle The toggle method for a block style
 * @param props.onInlineToggle The toggle method for an inline style
 * @param props.translations The translation object
 */
export const ToolbarSection: React.FC<ToolbarSectionProps> = ({
  section,
  editorState,
  onBlockToggle,
  onInlineToggle,
  translations
}) => {
  switch (section.type) {
    case 'block':
      return (
        <span className="pui-wysiwyg-toolbar-section">
          <BlockSection
            section={section}
            editorState={editorState}
            onToggle={onBlockToggle}
            translations={translations}
          />
        </span>
      );
    case 'inline':
      return (
        <span className="pui-wysiwyg-toolbar-section">
          <InlineSection
            section={section}
            editorState={editorState}
            onToggle={onInlineToggle}
            translations={translations}
          />
        </span>
      );
    default:
      return <div>Section {section.type} not implemented</div>;
  }
};
