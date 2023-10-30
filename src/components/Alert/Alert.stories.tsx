import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { colorOptions, weightOptions } from '../../prebuiltTailwindTheme';
import { AttentionIcon } from '../Icons';
import classnames from 'classnames';
import { fontWeightClassnameMap, puiColorClassnameMap, textColorClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Alert',
  argTypes: {
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
    weight: {
      options: weightOptions,
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
    color: 'pui-primary',
    weight: 'normal',
    content: 'A simple alert!'
  }
} as Meta;

/**
 * A story that displays an alert example
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.text the text property set on controls
 * @param props.content the content property set on controls
 * @param props.className the component classes
 * @param props.weight the weight property set on controls
 */
const Template: StoryFn = ({ color, content, text, weight, className, ...props }) => (
  <div
    {...props}
    className={classnames(
      'pui-alert',
      {
        [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary',
        [textColorClassnameMap[text || 'transparent']]: text && text.length > 0,
        [fontWeightClassnameMap[weight || 'normal']]: weight && weight.length > 0
      },
      className
    )}
  >
    {content}
  </div>
);

export const Colored = Template.bind({});

// "Error" is a javascript keyword :(
export const Errored = Template.bind({});
Errored.args = {
  color: 'pui-error'
};

export const Success = Template.bind({});
Success.args = {
  color: 'pui-success'
};

/**
 * A story that displays an alert example
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.text the text property set on controls
 * @param props.content the content property set on controls
 * @param props.className the component classes
 * @param props.weight the weight property set on controls
 */
const WithIconTemplate: StoryFn = ({ color, content, text, weight, className, ...props }) => (
  <div
    {...props}
    className={classnames(
      'pui-alert',
      {
        [puiColorClassnameMap[color]]: color !== 'pui-primary',
        [textColorClassnameMap[text]]: text && text.length > 0,
        [fontWeightClassnameMap[weight]]: weight && weight.length > 0
      },
      'flex items-center space-x-4',
      className
    )}
  >
    <div>
      <AttentionIcon />
    </div>
    <div>{content}</div>
  </div>
);

export const WithIcon = WithIconTemplate.bind({});
WithIcon.args = {
  color: 'pui-error'
};
