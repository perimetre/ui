import { EditorState } from 'draft-js';
import xss, { IWhiteList } from 'xss';

/**
 * A helper method to check whether this inline style should be active or not, from its type property
 *
 * @param editorState the current editor state
 * @param itemType the inline item type
 */
export const isInlineActiveByType = (editorState: EditorState, itemType: string) => {
  const currentStyle = editorState.getCurrentInlineStyle();
  return currentStyle.has(itemType);
};

/**
 * A helper method to check whether this block style should be active or not, from its type property
 *
 * @param editorState the current editor state
 * @param itemType the inline item type
 */
export const isBlockActiveByType = (editorState: EditorState, itemType: string) => {
  const selection = editorState.getSelection();
  return itemType === editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
};

/**
 * A helper method to check whether this block style should be active or not, from its data property
 *
 * @param editorState the current editor state
 * @param dataKey the key in the data object
 * @param expectedValue the expected value for the data to be
 */
export const isBlockActiveByData = (editorState: EditorState, dataKey: string, expectedValue: string) => {
  const selection = editorState.getSelection();
  return (
    expectedValue === editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getData().get(dataKey)
  );
};

/**
 * A method which will remove an object data if already exists, and add if it doesn't
 *
 * @param editorState The current editor state
 * @param data The provided block metadata
 */
export const toggleBlockData = async (
  editorState: EditorState,
  data: Record<string, unknown>
): Promise<EditorState> => {
  // Get the current data for this block
  const selection = editorState.getSelection();
  const currentData = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getData();

  // Create a new data object
  const newData = {};

  // For each entry in the provided data object
  Object.entries(data || {}).forEach(([key, value]) => {
    // If the current data DOES NOT have the key
    // Of if there is but the value is a different one, we then want to update the value
    if (!currentData.has(key) || currentData.get(key) !== value) {
      // Add the key to the new data, because we should keep it
      newData[key] = value;
    }

    // If the current data DOES HAVE the key
    // Don't do anything, because we don't want it to be added, since we want to remove it.
  });

  const { setBlockData } = await import('draftjs-utils');

  return setBlockData(editorState, newData);
};

/**
 * A method which will return the url from the current selection if there is any
 *
 * @param editorState  The current editor state
 */
export const getLinkIfAny = (editorState?: EditorState) => {
  // Get the selection
  const selection = editorState?.getSelection();

  // If there's a selection
  if (editorState && selection && !selection.isCollapsed()) {
    // Gets the state for the current content
    const contentState = editorState.getCurrentContent();

    // Gets both the start points
    const startKey = editorState.getSelection().getStartKey();
    const startOffset = editorState.getSelection().getStartOffset();

    // Get the block using the current start point
    const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);

    // Get if there's a key in the current start point
    const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

    // If there's a key
    if (linkKey) {
      // Get the key entity
      const linkInstance = contentState.getEntity(linkKey);
      // Get the key value
      return linkInstance.getData().url;
    }
  }

  // If nothing was returning up until here, there is no link
  return '';
};

export const editorSanitizeWhiteList: IWhiteList = {
  p: ['style'],
  h1: ['style'],
  h2: ['style'],
  h3: ['style'],
  h4: ['style'],
  h5: ['style'],
  h6: ['style'],
  blockquote: [],
  ul: [],
  ol: [],
  strong: [],
  em: [],
  ins: [],
  li: [],
  a: ['style', 'href', 'target'],
  br: []
};

/**
 * A helper method to sanitize the html content used by the rich text editor and prevent XSS vulnerability
 *
 * @param htmlData the html content
 */
export const sanitizeHtml = (htmlData: string) => xss(htmlData, { whiteList: editorSanitizeWhiteList });
