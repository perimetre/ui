import { EditorBlock } from 'draft-js';
import React from 'react';

/**
 * The align right draft.js block
 * @param props EditorBlock props
 */
export const AlignRight: React.FC = (props) => (
  <div className="pui-wysiwyg-right">
    <EditorBlock {...props} />
  </div>
);
