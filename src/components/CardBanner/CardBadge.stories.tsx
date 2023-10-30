import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { colorOptions, weightOptions } from '../../prebuiltTailwindTheme';
import { StarIcon } from '../Icons';
import classnames from 'classnames';
import { fontWeightClassnameMap, puiColorClassnameMap, textColorClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/CardBadge',
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
    content: 'Recommended'
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
