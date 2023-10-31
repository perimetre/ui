import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { borderStyleOptions, colorOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { CrossIcon } from '../Icons';
import { borderStyleClassnameMap, puiColorClassnameMap, textColorClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Chip',
  argTypes: {
    variant: {
      options: ['default', 'bordered'],
      control: {
        type: 'radio'
      }
    },
    border: {
      options: borderStyleOptions,
      control: {
        type: 'check'
      }
    },
    color: {
      options: colorOptions,
      control: {
        type: 'select'
      }
    },
    text: {
      options: colorOptions,
      control: {
        type: 'select'
      }
    },
    content: {
      control: {
        type: 'text'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    variant: 'default',
    color: 'pui-primary',
    content: 'Chip content'
  }
} as Meta;

const variantClassnameMap = {
  default: 'pui-chip-default',
  bordered: 'pui-chip-bordered'
};

type StoryFnProps = Record<string, unknown> & {
  variant?: keyof typeof variantClassnameMap;
  border?: keyof typeof borderStyleClassnameMap;
  color?: keyof typeof puiColorClassnameMap;
  text?: keyof typeof textColorClassnameMap;
  className?: string;
  content?: React.ReactNode;
};

/**
 * A story that displays a chip example
 * @param props the story props
 * @param props.variant the variant property set on controls
 * @param props.border the border property set on controls
 * @param props.color the color property set on controls
 * @param props.content the content property set on controls
 * @param props.text the text property set on controls
 * @param props.className the component classes
 */
const Template: StoryFn<StoryFnProps> = ({ variant, border, color, content, text, className, ...props }) => (
  <span
    {...props}
    className={classnames(
      variantClassnameMap[variant || 'default'],
      {
        [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary',
        [borderStyleClassnameMap[border || 'none']]: border && border.length > 0,
        [textColorClassnameMap[text || 'transparent']]: text && text.length > 0
      },
      className
    )}
  >
    {content}
  </span>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'pui-secondary'
};

export const BorderedPrimary = Template.bind({});
BorderedPrimary.args = {
  variant: 'bordered'
};

export const Dashed = Template.bind({});
Dashed.args = {
  variant: 'bordered',
  border: 'dashed'
};

export const ColoredText = Template.bind({});
ColoredText.args = {
  color: 'gray-200',
  text: 'pui-paragraph-500'
};

/**
 * A story that displays a chip example
 * @param props the story props
 * @param props.variant the variant property set on controls
 * @param props.border the border property set on controls
 * @param props.color the color property set on controls
 * @param props.content the content property set on controls
 * @param props.text the text property set on controls
 * @param props.className the component classes
 */
const WithIconTemplate: StoryFn<StoryFnProps> = ({ variant, border, color, content, text, className, ...props }) => (
  <span
    {...props}
    className={classnames(
      'inline-flex items-center',
      variantClassnameMap[variant || 'default'],
      {
        [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary',
        [borderStyleClassnameMap[border || 'none']]: border && border.length > 0,
        [textColorClassnameMap[text || 'transparent']]: text && text.length > 0
      },
      className
    )}
  >
    {content}
    <CrossIcon className="h-4 w-4 ml-2 mt-1 pui-animate-scaleHover-single cursor-pointer" />
  </span>
);

export const WithIcon = WithIconTemplate.bind({});
