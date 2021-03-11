import React from 'react';
import parse, { HTMLReactParserOptions } from 'html-react-parser';
import xss, { IFilterXSSOptions } from 'xss';
import classnames from 'classnames';
import { editorSanitizeWhiteList } from '../../utils/wysiwyg';

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
  sanitizerOptions?: IFilterXSSOptions;
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
}) =>
  content ? (
    <div {...props} className={classnames('pui-prose', className)}>
      {parse(
        xss(content, {
          /**
           * If a string is returned, the tag would be replaced with the string
           *
           * @param tag tag is the name of current tag, e.g. 'a' for tag <a>
           * @param html html is the HTML of this tag, e.g. '<a>' for tag <a>
           */
          onIgnoreTag: (tag, html) => {
            if (['figure', 'figcaption'].includes(tag)) {
              return html;
            }
            return undefined;
          },
          // Apply default whiteList
          whiteList: editorSanitizeWhiteList,
          ...sanitizerOptions
        }) as string,
        parserOptions
      )}
    </div>
  ) : null;
