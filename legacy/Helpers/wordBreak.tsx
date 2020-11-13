import { css } from 'styled-components';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = 'break-normal' | 'break-words' | 'break-all' | 'truncate';

export type WordBreakProps = {
  wordBreak?: ValueType;
  ['sm-wordBreak']?: ValueType;
  ['md-wordBreak']?: ValueType;
  ['lg-wordBreak']?: ValueType;
  ['xl-wordBreak']?: ValueType;
};

const getWordBreak = (wordBreak: ValueType) => {
  switch (wordBreak) {
    case 'break-normal':
      return css`
        word-break: normal;
        overflow-wrap: normal;
      `;
    case 'break-words':
      return css`
        overflow-wrap: break-word;
      `;
    case 'break-all':
      return css`
        word-break: break-all;
      `;
    case 'truncate':
      return css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `;
    default:
      return css``;
  }
};

export const wordBreakCss = css<WordBreakProps>`
  ${(props) => props.wordBreak && getWordBreak(props.wordBreak)}
  ${(props) => props['sm-wordBreak'] && responsiveMediaCss(getWordBreak(props['sm-wordBreak']), 'mobile')}
  ${(props) => props['md-wordBreak'] && responsiveMediaCss(getWordBreak(props['md-wordBreak']), 'tablet')}
  ${(props) => props['lg-wordBreak'] && responsiveMediaCss(getWordBreak(props['lg-wordBreak']), 'laptop')}
  ${(props) => props['xl-wordBreak'] && responsiveMediaCss(getWordBreak(props['xl-wordBreak']), 'desktop')}
`;
