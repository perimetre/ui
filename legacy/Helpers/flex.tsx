import { css } from 'styled-components';
import { responsiveMediaCss } from '../mediaQueryUtils';

// These values are equivalent of tailwind: https://tailwindcss.com/docs/flex
type ValueType = 'initial' | '1' | 'auto' | 'none';

export type FlexProps = {
  flex?: ValueType;
  ['sm-flex']?: ValueType;
  ['md-flex']?: ValueType;
  ['lg-flex']?: ValueType;
  ['xl-flex']?: ValueType;
};

const getFlex = (flex: ValueType) => {
  switch (flex) {
    case 'initial':
      return css`
        flex: 0 1 auto;
      `;
    case '1':
      return css`
        flex: 1 1 0%;
      `;
    case 'auto':
      return css`
        flex: 1 1 auto;
      `;
    case 'none':
      return css`
        flex: none;
      `;
  }
};

export const flexCss = css<FlexProps>`
  ${(props) => props.flex && getFlex(props.flex)}
  ${(props) => props['sm-flex'] && responsiveMediaCss(getFlex(props['sm-flex']), 'mobile')}
  ${(props) => props['md-flex'] && responsiveMediaCss(getFlex(props['md-flex']), 'tablet')}
  ${(props) => props['lg-flex'] && responsiveMediaCss(getFlex(props['lg-flex']), 'laptop')}
  ${(props) => props['xl-flex'] && responsiveMediaCss(getFlex(props['xl-flex']), 'desktop')}
`;
