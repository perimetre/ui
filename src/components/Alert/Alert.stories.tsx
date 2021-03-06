import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { colorOptions, weightOptions } from '../../prebuiltTailwindTheme';
import { AttentionIcon } from '../Icons';
import classnames from 'classnames';
import { fontWeightClassnameMap, puiColorClassnameMap, textColorClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Alert',
  argTypes: {
    color: {
      defaultValue: 'pui-primary',
      control: {
        type: 'select',
        options: colorOptions
      }
    },
    text: {
      control: {
        type: 'select',
        options: colorOptions
      }
    },
    weight: {
      control: {
        defaultValue: 'normal',
        type: 'select',
        options: weightOptions
      }
    },
    content: {
      defaultValue: 'A simple alert!',
      control: {
        type: 'text'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    }
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
const Template: Story = ({ color, content, text, weight, className, ...props }) => (
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
const WithIconTemplate: Story = ({ color, content, text, weight, className, ...props }) => (
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
