import { EditorBlock } from 'draft-js';
import React from 'react';

/**
 * The justify draft.js block
 *
 * @param props EditorBlock props
 */
export const Justify: React.FC = (props) => (
  <div className="pui-wysiwyg-justify">
    <EditorBlock {...props} />
  </div>
);
