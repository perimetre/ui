import DOMPurify from 'dompurify';
import {
  convertFromRaw,
  convertToRaw,
  DraftStyleMap,
  Editor,
  EditorProps,
  EditorState,
  getDefaultKeyBinding,
  RichUtils
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { setBlockData } from 'draftjs-utils';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { classNameTrim } from '../../utils';
import { blockStyleFn, getBlockDataByName } from './Blocks';
import { Toolbar } from './Toolbar';
import { defaultWYSIWYGTranslations, WYSIWYGTranslations } from './translations';

// Custom overrides for "code" style.
const styleMap: DraftStyleMap = {
  // CODE: {
  //   backgroundColor: 'rgba(0, 0, 0, 0.05)',
  //   fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
  //   fontSize: 16,
  //   padding: 2
  // }
};

export type WYSIWYGInputRef = {
  /**
   * Returns a sanitized html from the current editor state
   */
  getSanitizedHtml: () => string;
};

export type WYSIWYGInputProps = EditorProps & {
  /**
   * The input id
   */
  id: string;
  /**
   * If provided, displays a label above the input
   */
  label?: string;
  /**
   * If provided, displays a help text under the input
   */
  help?: string;
  /**
   * The error text to replace the help text with
   */
  error?: string;
  /**
   * Shows a success status
   */
  success?: boolean;
  /**
   * Shows a loading status
   */
  loading?: boolean;
  /**
   * The classname string prepended to the input container className
   */
  containerClassName?: string;
  /**
   * The translation object
   */
  translations?: WYSIWYGTranslations;
  /**
   * The editor onHtmlChange callback. Provides a sanitizedHtml for the text input
   */
  onHtmlChangeSlow?: (sanitizedHtml: string) => void;
};
/**
 * A Rich text WYSIWYG editor
 *
 * @param props The input props
 * @param props.id The input id
 * @param props.label If provided, displays a label above the input
 * @param props.help If provided, displays a help text under the input
 * @param props.error The error text to replace the help text with
 * @param props.success Shows a success status
 * @param props.loading Shows a loading status
 * @param props.containerClassName The classname string prepended to the input container className
 * @param props.translations The translation object
 * @param props.onChange The editor onChange callback
 * @param props.onHtmlChangeSlow The editor onHtmlChangeSlow callback. Provides a sanitizedHtml for the text input
 * @param props.children If provided, the children will be appended under the input helper texts
 */
export const WYSIWYGInput = forwardRef<WYSIWYGInputRef, WYSIWYGInputProps>(
  (
    {
      id,
      label,
      help,
      error,
      success,
      loading,
      containerClassName,
      children,
      translations: translationsProps,
      onChange,
      onHtmlChangeSlow,
      ...editorProps
    },
    ref
  ) => {
    // This is an implementation of:
    // Ref: https://github.com/facebook/draft-js/blob/master/website/src/components/DraftEditorExample/index.js
    // But with custom blocks and custom styling

    // If we ever need to filter the content, we can do so with:
    // https://github.com/thibaudcolas/draftjs-filters

    // I specifically don't want to update the translations on every update
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const translations = useMemo(() => translationsProps || defaultWYSIWYGTranslations, []);

    const [editorState, setEditorState] = useState(() =>
      EditorState.createWithContent(
        convertFromRaw({
          entityMap: {},
          blocks: [
            {
              text: '',
              key: id,
              type: 'unstyled',
              entityRanges: [],
              depth: 0,
              inlineStyleRanges: []
            }
          ]
        })
      )
    );
    const editor = useRef<Editor | null>(null);

    useEffect(() => {
      // If the onChange prop is provided
      if (onChange) {
        // Notify the change
        onChange(editorState);
      }
      // If the editor state changes
    }, [editorState, onChange]);

    useEffect(() => {
      // If the onChange prop is provided
      if (onHtmlChangeSlow) {
        // Ref(HTML part at the end): https://jpuri.github.io/react-draft-wysiwyg/#/docs
        const htmlData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        onHtmlChangeSlow(DOMPurify.sanitize(htmlData));
      }
      // If the editor state changes
    }, [editorState, onHtmlChangeSlow]);

    // Extends the ref
    useImperativeHandle(ref, () => ({
      /**
       * Returns a sanitized html from the current editor state
       */
      getSanitizedHtml: () => {
        // Ref(HTML part at the end): https://jpuri.github.io/react-draft-wysiwyg/#/docs
        const htmlData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        return DOMPurify.sanitize(htmlData);
      }
    }));

    const focus = useCallback(() => {
      if (editor?.current) {
        editor.current.focus();
      }
    }, []);

    const handleKeyCommand = useCallback(
      (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          setEditorState(newState);
          return 'handled';
        }
        return 'not-handled';
      },
      // We do want to update the hook based on this
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [editorState, setEditorState]
    );

    const mapKeyToEditorCommand = useCallback(
      (e) => {
        switch (e.keyCode) {
          case 9: // TAB
            const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
            if (newEditorState !== editorState) {
              setEditorState(newEditorState);
            }
            return null;
        }
        return getDefaultKeyBinding(e);
      },
      [editorState, setEditorState]
    );

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'pui-wysiwyg-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' pui-wysiwyg-hidePlaceholder';
      }
    }

    return (
      <div>
        <label className="pui-label-input" htmlFor={id}>
          {label}
        </label>
        <span
          className={classNameTrim(
            `${containerClassName || ''} ${error ? 'pui-wysiwyg-input-error' : ''} ${
              success ? 'pui-wysiwyg-input-success' : ''
            } ${loading ? 'pui-wysiwyg-input-loading' : ''}`
          )}
        >
          <div className="pui-wysiwyg-root">
            <Toolbar
              translations={translations}
              editorState={editorState}
              onBlockToggle={(blockType, name) => {
                const newState = RichUtils.toggleBlockType(editorState, blockType);
                setEditorState(setBlockData(newState, getBlockDataByName(name)));
              }}
              onInlineToggle={(inlineStyle) => {
                const newState = RichUtils.toggleInlineStyle(editorState, inlineStyle);
                setEditorState(newState);
              }}
            />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div className={className} onClick={focus} role="textbox" tabIndex={0}>
              <Editor
                spellCheck={true}
                {...editorProps}
                blockStyleFn={blockStyleFn}
                // blockRenderMap={extendedBlockRenderMap}
                // blockRendererFn={blockRendererFn}
                customStyleMap={styleMap}
                editorState={editorState}
                handleKeyCommand={handleKeyCommand}
                keyBindingFn={mapKeyToEditorCommand}
                onChange={setEditorState}
                editorKey={id}
                ref={editor}
              />
            </div>
          </div>
          {children}
        </span>
        {help && !error && <p className="pui-help-text-input">{help}</p>}
        {error && <p className="pui-animate-fadeDown pui-help-text-input text-pui-error">{error}</p>}
      </div>
    );
  }
);
