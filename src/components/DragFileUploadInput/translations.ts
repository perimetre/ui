export const defaultDragFileUploadTranslations = {
  hasDragSupportDescription: 'Click to upload or drag and drop here',
  noDragSupportDescription: 'Click to upload',
  dropConfirm: 'Drop to confirm',
  /**
   * A method to return the multiple files selected translation
   * @param count the current number of selected files
   */
  multipleFilesSelected: (count: number) => `${count} files selected`,
  wrongFileType: 'The provided file type is not allowed',
  bigFileSize: 'File size is too big'
};

export type DragFileUploadTranslations = typeof defaultDragFileUploadTranslations;
