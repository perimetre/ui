import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { EditorState, RichUtils } from 'draft-js';
import { useFormik } from 'formik';
import React, { useCallback, useRef, useState } from 'react';
import { object, string, StringSchema } from 'yup';
import { getLinkIfAny } from '../../../../utils/wysiwyg';
import { Dropdown } from '../../../Dropdown';
import { TextInput } from '../../../TextInput';
import { WYSIWYGTranslations } from '../../translations';

type HyperlinkProps = {
  /**
   * The translation object
   */
  translations: WYSIWYGTranslations;
  /**
   * Whether or not this item is active
   */
  isActive?: boolean;
  /**
   * The current editor state
   */
  editorState?: EditorState;
  /**
   * The update function to update the editor state
   */
  setEditorState?: (editorState: EditorState) => void;
};

/**
 * A hyperlink toolbar button
 *
 * @param props The component props
 * @param props.translations The translation object
 * @param props.isActive Whether or not this item is active
 * @param props.editorState The current editor state
 * @param props.setEditorState The update function to update the editor state
 */
export const Hyperlink: React.FC<HyperlinkProps> = ({ translations, isActive, editorState, setEditorState }) => {
  // Ref(look for "link example"): https://draftjs.org/docs/advanced-topics-decorators/#decorator-components
  // Ref: https://github.com/facebook/draft-js/blob/master/examples/draft-0-10-0/link/link.html

  // Make a ref for the input so we can use it to focus later
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Make a ref for the tooltip so we can use it to close the tooltip later
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tooltipRef = useRef<any | null>(null);

  // Whether it has initial url
  const [hasInitialUrl, setHasInitialUrl] = useState(false);

  // A callback used to add a link to the current editorstate
  const addLink = useCallback(
    (editorState?: EditorState, link?: string) => {
      // Gets the current content state
      const contentState = editorState?.getCurrentContent();

      // If there's both editor state and contentState
      if (editorState && contentState) {
        // Create the link entity that will be read from the decorator
        const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', { url: link });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

        // Apply entity
        let nextEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });

        // Apply selection
        nextEditorState = RichUtils.toggleLink(nextEditorState, nextEditorState.getSelection(), entityKey);

        // Update the state
        if (setEditorState) setEditorState(nextEditorState);
      }
    },
    [setEditorState]
  );

  // A callback used to remove a link in the current editor state
  const removeLink = useCallback(
    (editorState?: EditorState) => {
      // Get the user selection
      const selection = editorState?.getSelection();

      // If there's a selection
      if (editorState && selection && !selection.isCollapsed()) {
        // Update the editor state by toggling the link to null, thus, removing it
        if (setEditorState) setEditorState(RichUtils.toggleLink(editorState, selection, null));
      }

      // Declare that it doesn't has initial url anymore
      setHasInitialUrl(false);
    },
    [setEditorState]
  );

  // Create a formik instance for the link field
  const formik = useFormik({
    // Adds the yup validation
    validationSchema: object().shape({
      link: string()
        // Use a conditional validation
        .when((
          link: string | undefined,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          schema: StringSchema<string | undefined, Record<string, any>, string | undefined>
        ) =>
          // If the link has at least one character, then validate if it's an url and it should be required
          // If the link doesn't have a character, return the schema without appending any validation.
          // This is useful because the user can delete a link by not typing anything
          // So we only validate if the user has typed something, or else the user wouldn't be able
          // To continue with no text
          link && link.length > 0 ? schema.url().required() : schema
        )
        .label(translations.linkInputLabel)
    }),
    initialValues: {
      link: ''
    },
    /**
     * Submission handler
     *
     * @param values The formik values
     */
    onSubmit: (values) => {
      // If there's anything written in the textbox
      if (values.link && values.link.length > 0) {
        // Add the link
        addLink(editorState, values.link);
      } else {
        // If nothing is written, remove the linke
        removeLink(editorState);
      }

      // The same as close(). we can't call the method here unfortunately
      // If we managed to grab a ref for the tooltip, hide it
      if (tooltipRef?.current?._tippy?.hide) tooltipRef.current._tippy.hide();
      // Clear the form
      formik.resetForm();
      // Declare that it doesn't has initial url anymore, if any
      setHasInitialUrl(false);
    }
  });

  const close = useCallback(() => {
    // If we managed to grab a ref for the tooltip, hide it
    if (tooltipRef?.current?._tippy?.hide) tooltipRef.current._tippy.hide();
    // Clear the form
    formik.resetForm();
    // Declare that it doesn't has initial url anymore, if any
    setHasInitialUrl(false);
  }, [formik]);

  return (
    <Dropdown
      ref={tooltipRef}
      placement="bottom-end"
      buttonProps={{
        className: classnames('h-8 border border-gray-200', {
          'text-pui-paragraph-500': !isActive,
          'text-pui-primary': isActive
        }),
        /**
         * The on mouse down button callback.
         *
         * This callback is preventing the input to lose focus if the use clicks the button
         *
         * @param e the button event prop
         */
        onMouseDown: (e) => e.preventDefault()
      }}
      content={() => (
        <div className="p-4">
          <form className="flex flex-col" onSubmit={formik.handleSubmit}>
            <TextInput
              ref={inputRef}
              id="link"
              name="link"
              label={translations.linkInputLabel}
              onChange={formik.handleChange}
              value={formik.values.link}
              error={formik.errors.link}
            />
            <div className="flex items-center justify-end space-x-2">
              <button
                type="button"
                className="pui-btn-default mt-2 pui-color-pui-error"
                disabled={!hasInitialUrl}
                onClick={() => {
                  removeLink(editorState);
                  close();
                }}
              >
                Clear
              </button>
              <button
                type="submit"
                className="pui-btn-default mt-2"
                disabled={!!formik.errors.link && !!formik.touched.link}
              >
                {translations.linkInputSubmit}
              </button>
            </div>
          </form>
        </div>
      )}
      onShow={() => {
        // When the tooltip opens

        // Get if has link
        const link = getLinkIfAny(editorState);

        // Update the formik state
        formik.setFieldValue('link', link);

        // Update whether or not has initial url to enable the button
        setHasInitialUrl(!!link);

        // Focus the input
        inputRef?.current?.focus();
      }}
    >
      <FontAwesomeIcon icon={faLink} />
    </Dropdown>
  );
};
