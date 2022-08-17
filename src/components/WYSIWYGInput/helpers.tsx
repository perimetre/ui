import { CompositeDecorator, ContentState, convertFromRaw, convertToRaw, EditorState, RawDraftEntity } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import DOMPurify from 'isomorphic-dompurify';

/**
 * Returns a new editor state with the contents based off of a html value string
 *
 * @param htmlValue html value to set the editor state to
 * @param defaultDecorators the decorators setting to use if any
 * @param editorState an existing editor state to derive to, if any
 */
export const getStateFromHtml = async (
  htmlValue: string,
  defaultDecorators?: CompositeDecorator,
  editorState?: EditorState
) => {
  const htmlToDraft = (await import('html-to-draftjs')).default;

  // Ref(HTML part at the end): https://jpuri.github.io/react-draft-wysiwyg/#/docs
  const contentBlock = htmlToDraft(DOMPurify.sanitize(htmlValue, { ADD_ATTR: ['target'] }));

  if (!editorState) {
    return EditorState.createWithContent(
      ContentState.createFromBlockArray(contentBlock.contentBlocks, contentBlock.entityMap),
      defaultDecorators
    );
  } else {
    const newEditorState = EditorState.createWithContent(
      ContentState.createFromBlockArray(contentBlock.contentBlocks, contentBlock.entityMap),
      defaultDecorators
    );

    const selection = editorState.getSelection();

    EditorState.forceSelection(newEditorState, selection);

    return newEditorState;
  }
};

/**
 * Returns the html value for the provided editor state
 *
 * @param editorState the draftjs editor state to get the html value for
 * @param entityLinkTransform the function to use to transform entity links
 * @returns a purifyed html value
 */
export const getSanitizedHtmlFromState = (
  editorState: EditorState,
  entityLinkTransform?: (entity: RawDraftEntity, text: string) => string | undefined
) => {
  // Ref(HTML part at the end): https://jpuri.github.io/react-draft-wysiwyg/#/docs
  const htmlData = draftToHtml(convertToRaw(editorState.getCurrentContent()), {}, false, entityLinkTransform);

  // Add ADD_ATTR to prevent sanitize to replace target _blank
  return DOMPurify.sanitize(htmlData, { ADD_ATTR: ['target'] });
};

/**
 * Returns a default empty editor state
 *
 * @param id an id to use for the editor state
 * @param defaultDecorators the decorators setting to use if any
 */
export const getEmptyState = (id: string, defaultDecorators?: CompositeDecorator) =>
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
  );
