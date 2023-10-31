import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { colorOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { puiColorClassnameMap } from '../../storybookMappers';
import { PercentageCircle, PercentageCircleProps } from '.';

export default {
  title: 'Components/PercentageCircle',
  component: PercentageCircle,
  argTypes: {
    color: {
      options: colorOptions,
      control: {
        type: 'select'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    },
    percentage: {
      control: {
        type: 'number'
      }
    }
  },
  args: {
    color: 'pui-primary',
    percentage: 50
  }
} as Meta;

/**
 * A story that displays a list connector
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.className the classes for element
 */
const Template: StoryFn<
  PercentageCircleProps & { color?: keyof typeof puiColorClassnameMap } & { className?: string }
> = ({ color, className, ...props }) => (
  <div
    className={classnames(
      'flex align-middle w-32 font-semibold text-pui-paragraph-900',
      { [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary' },
      className
    )}
  >
    <PercentageCircle {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  percentage: 45
};
