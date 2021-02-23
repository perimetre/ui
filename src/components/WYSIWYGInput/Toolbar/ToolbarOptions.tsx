/* eslint-disable jsdoc/require-jsdoc */
import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faBold,
  faItalic,
  faListOl,
  faListUl,
  faUnderline
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DraftBlockType, DraftInlineStyleType, EditorState } from 'draft-js';
import React from 'react';
import { getLinkIfAny, isBlockActiveByData, isBlockActiveByType, isInlineActiveByType } from '../../../utils/wysiwyg';
import { WYSIWYGTranslations } from '../translations';
import { Hyperlink } from './Options/Hyperlink';

export type ToolbarOptions = {
  sections: {
    /**
     * The section name, will primarily be used as a key
     */
    name: string;
    /**
     * The draft.js style type
     */
    type: 'block' | 'inline' | 'unstyled';
    /**
     * The display type for this section
     */
    display: 'button' | 'dropdown' | 'unstyled';
    /**
     * The label if the display supports it
     */
    label?: (translations: WYSIWYGTranslations) => string;
    /**
     * The items contained in the section
     */
    items: {
      /**
       * The item nem, will be used as a key and an identifier to style the block
       */
      name: string;
      /**
       * Whether or not this item should have its active state
       */
      isActive: (editorState: EditorState) => boolean;
      /**
       * The internal string used by draft.js to understand how the content should be styled
       */
      type: DraftBlockType | DraftInlineStyleType; // <--- You can open this type and look for 'CoreDraftBlockType' to know the available types
      /**
       * The renderer function for this item
       */
      content: (
        translations: WYSIWYGTranslations,
        isActive?: boolean,
        editorState?: EditorState,
        setEditorState?: (editorState: EditorState) => void,
        onToggle?: (itemType: string, name: string) => void
      ) => React.ReactNode;
    }[];
  }[];
};

// Ref: https://draftjs.org/docs/api-reference-content-block
export const toolbarOptions: ToolbarOptions = {
  sections: [
    {
      name: 'inlineText',
      type: 'inline',
      display: 'button',
      items: [
        {
          name: 'BOLD',
          type: 'BOLD',
          isActive: (editorState) => isInlineActiveByType(editorState, 'BOLD'),
          content: () => <FontAwesomeIcon icon={faBold} />
        },
        {
          name: 'ITALIC',
          type: 'ITALIC',
          isActive: (editorState) => isInlineActiveByType(editorState, 'ITALIC'),
          content: () => <FontAwesomeIcon icon={faItalic} />
        },
        {
          name: 'UNDERLINE',
          type: 'UNDERLINE',
          isActive: (editorState) => isInlineActiveByType(editorState, 'UNDERLINE'),
          content: () => <FontAwesomeIcon icon={faUnderline} />
        }
      ]
    },
    {
      name: 'fontStyles',
      type: 'block',
      display: 'dropdown',
      label: (translations) => translations.textStyleDropdown,
      items: [
        {
          name: 'normalButton',
          type: 'unstyled',
          isActive: (editorState) => isBlockActiveByType(editorState, 'unstyled'),
          content: () => 'Normal'
        },
        // Paragraph is commented because is not supported for html output
        // {
        //   name: 'paragraph',
        //   type: 'paragraph',
        //   isActive: (editorState) => isBlockActiveByType(editorState, 'paragraph'),
        //   content: () => 'Paragraph'
        // },
        {
          name: 'blockquote',
          type: 'blockquote',
          isActive: (editorState) => isBlockActiveByType(editorState, 'blockquote'),
          content: () => 'Blockquote'
        },
        {
          name: 'header-one',
          type: 'header-one',
          isActive: (editorState) => isBlockActiveByType(editorState, 'header-one'),
          content: () => 'Heading 1'
        },
        {
          name: 'header-two',
          type: 'header-two',
          isActive: (editorState) => isBlockActiveByType(editorState, 'header-two'),
          content: () => 'Heading 2'
        },
        {
          name: 'header-three',
          type: 'header-three',
          isActive: (editorState) => isBlockActiveByType(editorState, 'header-three'),
          content: () => 'Heading 3'
        },
        {
          name: 'header-four',
          type: 'header-four',
          isActive: (editorState) => isBlockActiveByType(editorState, 'header-four'),
          content: () => 'Heading 4'
        },
        {
          name: 'header-five',
          type: 'header-five',
          isActive: (editorState) => isBlockActiveByType(editorState, 'header-five'),
          content: () => 'Heading 5'
        },
        {
          name: 'header-six',
          type: 'header-six',
          isActive: (editorState) => isBlockActiveByType(editorState, 'header-six'),
          content: () => 'Heading 6'
        }
      ]
    },
    {
      name: 'list',
      type: 'block',
      display: 'button',
      items: [
        {
          name: 'ordered-list-item',
          type: 'ordered-list-item',
          isActive: (editorState) => isBlockActiveByType(editorState, 'ordered-list-item'),
          content: () => <FontAwesomeIcon icon={faListOl} />
        },
        {
          name: 'unordered-list-item',
          type: 'unordered-list-item',
          isActive: (editorState) => isBlockActiveByType(editorState, 'unordered-list-item'),
          content: () => <FontAwesomeIcon icon={faListUl} />
        }
      ]
    },
    {
      name: 'textAlign',
      type: 'block',
      display: 'button',
      items: [
        {
          name: 'pui-align-left',
          type: 'unstyled', // 'pui-align-left'
          isActive: (editorState) => isBlockActiveByData(editorState, 'text-align', 'left'),
          content: () => <FontAwesomeIcon icon={faAlignLeft} />
        },
        {
          name: 'pui-align-center',
          type: 'unstyled', // 'pui-align-center'
          isActive: (editorState) => isBlockActiveByData(editorState, 'text-align', 'center'),
          content: () => <FontAwesomeIcon icon={faAlignCenter} />
        },
        {
          name: 'pui-align-right',
          type: 'unstyled', // 'pui-align-right'
          isActive: (editorState) => isBlockActiveByData(editorState, 'text-align', 'right'),
          content: () => <FontAwesomeIcon icon={faAlignRight} />
        },
        {
          name: 'pui-align-justify',
          type: 'unstyled', // 'pui-align-justify'
          isActive: (editorState) => isBlockActiveByData(editorState, 'text-align', 'justify'),
          content: () => <FontAwesomeIcon icon={faAlignJustify} />
        }
      ]
    },
    {
      name: 'media',
      type: 'inline',
      display: 'unstyled', // This is an unstyled section which means each button will take care of its style AND logic
      items: [
        {
          name: 'pui-hyperlink',
          type: 'unstyled',
          isActive: (editorState) => getLinkIfAny(editorState),
          content: (translations, isActive, editorState, setEditorState) => (
            <Hyperlink
              translations={translations}
              isActive={isActive}
              editorState={editorState}
              setEditorState={setEditorState}
            />
          )
        }
      ]
    }
  ]
};
