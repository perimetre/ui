import { EditorBlock } from 'draft-js';
import React from 'react';

/**
 * The align center draft.js block
 * @param props EditorBlock props
 */
export const AlignCenter: React.FC = (props) => (
  <div className="pui-wysiwyg-center">
    <EditorBlock {...props} />
  </div>
);
