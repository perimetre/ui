import { EditorBlock } from 'draft-js';
import React from 'react';

/**
 * The align left draft.js block
 * @param props EditorBlock props
 */
export const AlignLeft: React.FC = (props) => (
  <div className="pui-wysiwyg-left">
    <EditorBlock {...props} />
  </div>
);
