import { ContentBlock } from 'draft-js';

/**
 * Function that returns a block data object, based on a provided name.
 * The data is more useful when the content gets converted to html.
 * Because this is what will be converted as the tag "styles"
 * @param name the block name
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getBlockDataByName = (name: string): any => {
  switch (name) {
    case 'pui-align-left':
      return { 'text-align': 'left' };
    case 'pui-align-center':
      return { 'text-align': 'center' };
    case 'pui-align-right':
      return { 'text-align': 'right' };
    case 'pui-align-justify':
      return { 'text-align': 'justify' };
    default:
      return {};
  }
};

const textAlignClassnameMap = {
  left: 'pui-wysiwyg-left',
  center: 'pui-wysiwyg-center',
  right: 'pui-wysiwyg-right',
  justify: 'pui-wysiwyg-justify'
};

/**
 * Function that allows to define class names to apply to the given block when it is rendered.
 * This is only to render the content inside the editor itself, and not for the output html.
 * @param block The provided DraftJs content block
 */
export const blockStyleFn = (block: ContentBlock): string => {
  const textAlignData = block.getData() && block.getData().get('text-align');
  if (textAlignData) {
    return textAlignClassnameMap[textAlignData as keyof typeof textAlignClassnameMap];
  } else {
    switch (block.getType()) {
      default:
        return '';
    }
  }
};

/**
 * For a given `ContentBlock` object, return an object that specifies
 * a custom block component and/or props. If no object is returned,
 * the default `TextEditorBlock` is used.
 * @param block The provided DraftJs content block
 */
// Ref: https://draftjs.org/docs/advanced-topics-block-components#custom-block-components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const blockRendererFn = (block: ContentBlock): any => {
//   switch (block.getType()) {
//     case 'pui-align-left':
//       return {
//         component: AlignLeft,
//         editable: true
//       };
//     case 'pui-align-center':
//       return {
//         component: AlignCenter,
//         editable: true
//       };
//     case 'pui-align-right':
//       return {
//         component: AlignRight,
//         editable: true
//       };
//     case 'pui-align-justify':
//       return {
//         component: Justify,
//         editable: true
//       };
//   }
// };

/**
 * Provide a map of block rendering configurations. Each block type maps to
 * an element tag and an optional react element wrapper. This configuration
 * is used for both rendering and paste processing.
 */
// Ref: https://draftjs.org/docs/advanced-topics-custom-block-render-map/#configuring-block-render-map
// const blockRenderMap: DraftBlockRenderMap = Immutable.Map({
//   MyCustomBlock: {
//     element: 'div'
//   }
// });

// keep support for other draft default block types and add our block types
// export const extendedBlockRenderMap: DraftBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);
