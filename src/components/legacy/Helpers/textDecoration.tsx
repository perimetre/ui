import { css } from 'styled-components';
import { Property } from 'csstype';
import { responsiveMediaCss } from '../mediaQueryUtils';

type ValueType = Property.TextDecorationLine;

type TextDecorationNormalProps = {
  textDecoration?: ValueType;
  ['sm-textDecoration']?: ValueType;
  ['md-textDecoration']?: ValueType;
  ['lg-textDecoration']?: ValueType;
  ['xl-textDecoration']?: ValueType;
};

const getTextDecorationNormal = (textDecoration: ValueType) => css`
  text-decoration: ${textDecoration};
`;

const textDecorationNormalCss = css<TextDecorationNormalProps>`
  ${(props) => props.textDecoration && getTextDecorationNormal(props.textDecoration)}
  ${(props) =>
    props['sm-textDecoration'] && responsiveMediaCss(getTextDecorationNormal(props['sm-textDecoration']), 'mobile')}
  ${(props) =>
    props['md-textDecoration'] && responsiveMediaCss(getTextDecorationNormal(props['md-textDecoration']), 'tablet')}
  ${(props) =>
    props['lg-textDecoration'] && responsiveMediaCss(getTextDecorationNormal(props['lg-textDecoration']), 'laptop')}
  ${(props) =>
    props['xl-textDecoration'] && responsiveMediaCss(getTextDecorationNormal(props['xl-textDecoration']), 'desktop')}
`;

type TextDecorationHoverProps = {
  ['textDecoration-hover']?: ValueType;
  ['sm-textDecoration-hover']?: ValueType;
  ['md-textDecoration-hover']?: ValueType;
  ['lg-textDecoration-hover']?: ValueType;
  ['xl-textDecoration-hover']?: ValueType;
};

const getTextDecorationhover = (textDecorationHover: ValueType) => css`
  &:hover {
    text-decoration: ${textDecorationHover};
  }
`;

const textDecorationHoverCss = css<TextDecorationHoverProps>`
  ${(props) => props['textDecoration-hover'] && getTextDecorationhover(props['textDecoration-hover'])}
  ${(props) =>
    props['sm-textDecoration-hover'] &&
    responsiveMediaCss(getTextDecorationhover(props['sm-textDecoration-hover']), 'mobile')}
  ${(props) =>
    props['md-textDecoration-hover'] &&
    responsiveMediaCss(getTextDecorationhover(props['md-textDecoration-hover']), 'tablet')}
  ${(props) =>
    props['lg-textDecoration-hover'] &&
    responsiveMediaCss(getTextDecorationhover(props['lg-textDecoration-hover']), 'laptop')}
  ${(props) =>
    props['xl-textDecoration-hover'] &&
    responsiveMediaCss(getTextDecorationhover(props['xl-textDecoration-hover']), 'desktop')}
`;

export type TextDecorationProps = TextDecorationNormalProps & TextDecorationHoverProps;

export const textDecorationCss = css`
  ${textDecorationNormalCss}
  ${textDecorationHoverCss}
`;
