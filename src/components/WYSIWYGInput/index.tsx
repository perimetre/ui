import classnames from 'classnames';
import xss from 'xss';
import {
  CompositeDecorator,
  ContentState,
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
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { toggleBlockData } from '../../utils/wysiwyg';
import { blockStyleFn, getBlockDataByName } from './Blocks';
import { linkDecorator } from './Decorators/Link';
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
  /**
   * Returns a plain text string from the current editor state
   */
  getPlainText: () => string;
};

export type WYSIWYGInputProps = Omit<EditorProps, 'editorState' | 'onChange'> & {
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
   * The initial html value to fill the input with. Remember that this is the "default" version. So it'll only work in the first render. And this is how it should behave.
   */
  defaultHtmlValue?: string;
  /**
   * The editor onHtmlChange callback. Provides a sanitizedHtml for the text input.
   *
   * This callback can make the app slower. So it is recommended to wrap it in a debouncer
   */
  onHtmlChangeSlow?: (sanitizedHtml: string) => void;
  /**
   * Whether or not the input should be disabled
   */
  disabled?: boolean;
  /**
   * The editor onChange callback.
   */
  onChange?(editorState: EditorState): void;
};

/**
 * A Rich text WYSIWYG editor
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
      onChange: onChangeProps,
      onHtmlChangeSlow,
      disabled,
      readOnly,
      defaultHtmlValue,
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

    const defaultDecorators = useMemo(() => new CompositeDecorator([linkDecorator]), []);

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
        }),
        defaultDecorators
      )
    );
    const editor = useRef<Editor | null>(null);

    /**
     * Make an onChange callback
     *
     * @param editorState the current editor state
     */
    const onChange = (editorState: EditorState) => {
      // Update the editor state but making sure to keep the decorators
      setEditorState(EditorState.set(editorState, { decorator: defaultDecorators }));
    };

    useEffect(() => {
      // If the onChange prop is provided
      if (onChangeProps) {
        // Notify the change
        onChangeProps(editorState);
      }
      // If the editor state changes
    }, [editorState, onChangeProps]);

    useEffect(() => {
      // If the onChange prop is provided
      if (onHtmlChangeSlow) {
        // Ref(HTML part at the end): https://jpuri.github.io/react-draft-wysiwyg/#/docs
        const htmlData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        onHtmlChangeSlow(xss(htmlData));
      }
      // If the editor state changes
    }, [editorState, onHtmlChangeSlow]);

    useEffect(() => {
      /**
       * An async wrapper with a dynamic import.
       * That will update the editor state based on the default html value
       */
      const updateFromHtml = async () => {
        const htmlToDraft = (await import('html-to-draftjs')).default;

        // Ref(HTML part at the end): https://jpuri.github.io/react-draft-wysiwyg/#/docs
        const contentBlock = htmlToDraft(defaultHtmlValue ? xss(defaultHtmlValue) : '');

        setEditorState(
          EditorState.createWithContent(
            ContentState.createFromBlockArray(contentBlock.contentBlocks, contentBlock.entityMap)
          )
        );
      };

      setEditorState(EditorState.set(editorState, { decorator: defaultDecorators }));

      if (defaultHtmlValue) {
        updateFromHtml();
      }
      // Disable because we only want this to update on the first render
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Extends the ref
    useImperativeHandle(ref, () => ({
      /**
       * Returns a sanitized html from the current editor state
       */
      getSanitizedHtml: () => {
        // Ref(HTML part at the end): https://jpuri.github.io/react-draft-wysiwyg/#/docs
        const htmlData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        return xss(htmlData);
      },
      /**
       * Returns a plain text string from the current editor state
       */
      getPlainText: () => editorState.getCurrentContent().getPlainText()
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

    const contentState = editorState.getCurrentContent();

    return (
      <div>
        <label className="pui-label-input" htmlFor={id}>
          {label}
        </label>
        <span
          className={classnames(containerClassName, {
            'pui-wysiwyg-input-error': !!error,
            'pui-wysiwyg-input-success': success,
            'pui-wysiwyg-input-loading': loading
          })}
        >
          <div className={classnames('pui-wysiwyg-root', { disabled })}>
            <Toolbar
              translations={translations}
              editorState={editorState}
              setEditorState={setEditorState}
              onBlockToggle={async (blockType, name) => {
                const newState = RichUtils.toggleBlockType(editorState, blockType);

                // Set the editor state with the returned state from the setBlockData method.
                // Toggle block data is a helper that will set any object as a metadata in a block.
                // This is useful because this metadata is also what gets mapped to the "styles" attribute
                // When the content gets converted to html.
                setEditorState(await toggleBlockData(newState, getBlockDataByName(name)));
              }}
              onInlineToggle={(inlineStyle) => {
                const newState = RichUtils.toggleInlineStyle(editorState, inlineStyle);
                setEditorState(newState);
              }}
            />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div
              className={classnames('pui-wysiwyg-editor', {
                'pui-wysiwyg-hidePlaceholder':
                  // If the user changes block type before entering any text, we can
                  // either style the placeholder or hide it. Let's just hide it now.
                  !contentState.hasText() && contentState.getBlockMap().first().getType() !== 'unstyled'
              })}
              onClick={focus}
              role="textbox"
              tabIndex={0}
            >
              <Editor
                readOnly={disabled || readOnly}
                spellCheck={true}
                {...editorProps}
                blockStyleFn={blockStyleFn}
                // blockRenderMap={extendedBlockRenderMap}
                // blockRendererFn={blockRendererFn}
                customStyleMap={styleMap}
                editorState={editorState}
                handleKeyCommand={handleKeyCommand}
                keyBindingFn={mapKeyToEditorCommand}
                onChange={onChange}
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
