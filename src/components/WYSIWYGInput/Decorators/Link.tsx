import React, { PropsWithChildren } from 'react';
import { DraftDecorator, ContentState, ContentBlock, RawDraftEntity } from 'draft-js';

/**
 * The draft strategy to find link entities
 * @param contentBlock a ContentBlock object provided by draft
 * @param callback a callback with start/end values corresponding to relevant matches in the document text.
 * @param contentState the content state provided by draft
 */
const findLinkEntities = (
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState
) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
};

type InternalLinkRenderProps = {
  /**
   * The entity key provided by draft
   */
  entityKey: string;
  /**
   * The content state provided by draft
   */
  contentState: ContentState;
};

/**
 * A component used to render the link inside the editor from the decorator
 * @param props The component props
 * @param props.children The provided children
 * @param props.entityKey The entity key provided by draft
 * @param props.contentState The content state provided by draft
 */
const InternalLinkRender: React.FC<PropsWithChildren<InternalLinkRenderProps>> = ({
  children,
  entityKey,
  contentState
}) => {
  const { url } = contentState.getEntity(entityKey).getData();
  return (
    <a href={url} className="pui-link">
      {children}
    </a>
  );
};

export const linkDecorator: DraftDecorator = {
  strategy: findLinkEntities,
  component: InternalLinkRender
};

/**
 *  Transform all the links adding the target="_blank" and rel="noreferrer" attributes
 * @param entity The current entity
 * @param text The current text
 * @returns The link tag as string with the new attributes
 */
export const entityLinkTransform = (entity: RawDraftEntity, text: string) => {
  if (entity.type !== 'LINK') return;
  return `<a href="${entity.data.url}" target="_blank" rel="noreferrer">${text}</a>`;
};
