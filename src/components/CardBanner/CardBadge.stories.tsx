import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { colorOptions, weightOptions } from '../../prebuiltTailwindTheme';
import { StarIcon } from '../Icons';
import classnames from 'classnames';
import { fontWeightClassnameMap, puiColorClassnameMap, textColorClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/CardBadge',
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
      defaultValue: 'Recommended',
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
      'pui-cardBadge',
      {
        [puiColorClassnameMap[color]]: color !== 'pui-primary',
        [textColorClassnameMap[text]]: text && text.length > 0,
        [fontWeightClassnameMap[weight]]: weight && weight.length > 0
      },
      'inline-flex items-center',
      className
    )}
  >
    <div>
      <StarIcon width={14} height={14} className="mr-2" />
    </div>
    <div>{content}</div>
  </div>
);

export const Default = Template.bind({});

export const Locked = Template.bind({});
Locked.args = {
  color: 'gray-300'
};
