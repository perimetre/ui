import classnames from 'classnames';
import {
  CompositeDecorator,
  DraftStyleMap,
  Editor,
  EditorProps,
  EditorState,
  getDefaultKeyBinding,
  RichUtils
} from 'draft-js';
import React, {
  forwardRef,
  PropsWithChildren,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';
import { toggleBlockData } from '../../utils/wysiwyg';
import { blockStyleFn, getBlockDataByName } from './Blocks';
import { entityLinkTransform, linkDecorator } from './Decorators/Link';
import { getEmptyState, getSanitizedHtmlFromState, getStateFromHtml } from './helpers';
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

const sizeClassnameMap = {
  small: 'min-h-44',
  medium: 'min-h-56',
  large: 'min-h-96'
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
  /**
   * Resets editor state to defaultHtmlValue
   */
  resetInitialValue: () => void;
};

export type WYSIWYGInputProps = PropsWithChildren<
  Omit<EditorProps, 'editorState' | 'onChange'> & {
    /**
     * The input id
     */
    id: string;
    /**
     * If provided, displays a label above the input
     */
    label?: React.ReactNode;
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
     * This makes the toolbar position always fixed at the top of the container, so it will not follow scroll
     */
    disableStickyToolbar?: boolean;
    /**
     * The translation object
     */
    translations?: WYSIWYGTranslations;
    /**
     * The initial html value to fill the input with. Remember that this is the "default" version. So it'll only work in the first render. And this is how it should behave.
     */
    defaultHtmlValue?: string;
    /**
     * The html value to fill the input with
     */
    htmlValueSlow?: string;
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
    onChange?: (editorState: EditorState) => void;
    /**
     * The initial size of the component
     */
    size?: 'small' | 'medium' | 'large';
  }
>;

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
      size = 'medium',
      defaultHtmlValue,
      htmlValueSlow,
      disableStickyToolbar,
      ...editorProps
    },
    ref
  ) => {
    // Refs are good for storing state that you don't need to display or react to on re-render
    const wasLastStateUpdateFromHtmlValue = useRef(false);
    const isEditorStateInitialized = useRef(false);
    const lastHtmlValueSlow = useRef(htmlValueSlow);

    // This is an implementation of:
    // Ref: https://github.com/facebook/draft-js/blob/master/website/src/components/DraftEditorExample/index.js
    // But with custom blocks and custom styling

    // If we ever need to filter the content, we can do so with:
    // https://github.com/thibaudcolas/draftjs-filters

    // I specifically don't want to update the translations on every update
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const translations = useMemo(() => ({ ...defaultWYSIWYGTranslations, ...translationsProps }), []);

    const defaultDecorators = useMemo(() => new CompositeDecorator([linkDecorator]), []);

    const [editorState, setEditorState] = useState(() => getEmptyState(id, defaultDecorators));
    const editor = useRef<Editor | null>(null);

    /**
     * Make an onChange callback
     * @param editorState the current editor state
     */
    const onChange = (editorState: EditorState) => {
      // Update the editor state but making sure to keep the decorators
      wasLastStateUpdateFromHtmlValue.current = false;
      setEditorState(EditorState.set(editorState, { decorator: defaultDecorators }));
    };

    useEffect(() => {
      // If the onChange prop is provided and we are finished initializing the component state
      if (onChangeProps && isEditorStateInitialized.current) {
        // Notify the change
        onChangeProps(editorState);
      }
      // If the editor state changes
    }, [editorState, onChangeProps]);

    useEffect(() => {
      // If the onChange prop is provided and we have initialized the component state
      if (onHtmlChangeSlow && isEditorStateInitialized.current && !wasLastStateUpdateFromHtmlValue.current) {
        const htmlSlow = getSanitizedHtmlFromState(editorState, entityLinkTransform);
        if (htmlSlow !== lastHtmlValueSlow.current) {
          onHtmlChangeSlow(htmlSlow);
          lastHtmlValueSlow.current = htmlSlow;
        }
      }
      // If the editor state changes
    }, [editorState, onHtmlChangeSlow]);

    useEffect(() => {
      /**
       * An async wrapper with a dynamic import.
       * That will update the editor state based on the html value
       * @param htmlValue html value to set the editor state to
       */
      const updateFromHtml = async (htmlValue?: string) => {
        if (htmlValue) setEditorState(await getStateFromHtml(htmlValue, defaultDecorators));

        // make sure to set component as initialized so that it will start sending onChange events
        isEditorStateInitialized.current = true;
      };

      if (!isEditorStateInitialized.current) {
        if (htmlValueSlow) {
          wasLastStateUpdateFromHtmlValue.current = true;
        }
        lastHtmlValueSlow.current = htmlValueSlow;
        updateFromHtml(defaultHtmlValue || htmlValueSlow);
      }

      // Disable because we only want this to update on the first render or when editor state is reinitialized
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      /**
       * An async wrapper with a dynamic import.
       * That will update the editor state based on the html value
       * @param htmlValue html value to set the editor state to
       */
      const updateFromHtml = async (htmlValue?: string) => {
        setEditorState(await getStateFromHtml(htmlValue || '', defaultDecorators));
        lastHtmlValueSlow.current = htmlValue;
      };

      if (isEditorStateInitialized.current && lastHtmlValueSlow.current !== htmlValueSlow) {
        wasLastStateUpdateFromHtmlValue.current = true;
        updateFromHtml(htmlValueSlow);
      }
      // Disable because we know defaultDecoratos is unique and we don't want to re-render based on it
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [htmlValueSlow]);

    // Extends the ref
    useImperativeHandle(ref, () => ({
      /**
       * Returns a sanitized html from the current editor state
       */
      getSanitizedHtml: () => getSanitizedHtmlFromState(editorState, entityLinkTransform),
      /**
       * Returns a plain text string from the current editor state
       */
      getPlainText: () => editorState.getCurrentContent().getPlainText(),
      /**
       * Resets editor state to defaultHtmlValue
       */
      resetInitialValue: () => setEditorState(getEmptyState(id, defaultDecorators))
    }));

    const focus = useCallback(() => {
      if (editor?.current) {
        editor.current.focus();
      }
    }, []);

    const handleKeyCommand = useCallback(
      (command: string, editorState: EditorState) => {
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (e: any) => {
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
        {label && (
          <label className="pui-label-input" htmlFor={id}>
            {label}
          </label>
        )}
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
              disableSticky={disableStickyToolbar}
            />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div
              className={classnames('pui-wysiwyg-editor', sizeClassnameMap[size], {
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
