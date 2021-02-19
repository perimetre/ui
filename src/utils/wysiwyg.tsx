import { EditorState } from 'draft-js';

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
