import classnames from 'classnames';
import parse, { HTMLReactParserOptions } from 'html-react-parser';
import DOMPurify, { Config } from 'isomorphic-dompurify';
import React from 'react';

export type HTMLParsedContentProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  /**
   * The content that should be parsed
   */
  content?: string;
  /**
   * The options that are passed down to the parser
   */
  parserOptions?: HTMLReactParserOptions;
  /**
   * The options that are passed down to the sanitizer
   */
  sanitizerOptions?: Config;
};

/**
 * A component that sanitizes then parses and styles a plain rich text/html content
 *
 * @param props The component props
 * @param props.content The content that should be parsed
 * @param props.parserOptions The options that are passed down to the parser
 * @param props.sanitizerOptions The options that are passed down to the sanitizer
 * @param props.className The component className values
 */
export const HTMLParsedContent: React.FC<HTMLParsedContentProps> = ({
  content,
  parserOptions,
  sanitizerOptions,
  className,
  ...props
}) => {
  /**
   * options
   */
  const options: HTMLReactParserOptions = {
    /**
     * Replace all links with https:// if needed
     *
     * @param domNode DomNode
     */
    replace: (domNode) => {
      // Get all 'a' tags that have a href attribute
      if (domNode.parent?.name === 'a' && domNode.parent?.attribs?.href) {
        // If the link on the tag doesn't have a http:// or https:// return the new link
        if (!new RegExp(['http://', 'https://'].join('|')).test(domNode.parent.attribs.href)) {
          return (
            <a {...domNode.parent.attribs} href={`https://${domNode.parent.attribs.href}`}>
              {domNode.data}
            </a>
          );
        }
      }
      return;
    },
    ...parserOptions
  };

  return content ? (
    <div {...props} className={classnames('pui-prose', className)}>
      {parse(
        (sanitizerOptions
          ? DOMPurify.sanitize(content, sanitizerOptions)
          : DOMPurify.sanitize(content, { ADD_ATTR: ['target'] })) as string,
        options
      )}
    </div>
  ) : null;
};
