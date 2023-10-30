import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Badge, BadgeProps } from '.';
import { colorOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { BellIcon } from '../Icons';
import { puiColorClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    content: {
      control: {
        type: 'number'
      }
    },
    color: {
      options: colorOptions,
      control: {
        type: 'select'
      }
    }
  },
  args: {
    content: 2,
    color: 'pui-primary'
  }
} as Meta;

/**
 * A story that displays a Badge example
 *
 * @param props the story props
 * @param props.color the color property set on controls
 */
const Template: StoryFn<BadgeProps & { color?: string }> = ({ color, ...props }) => (
  <span className={classnames({ [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary' })}>
    <Badge {...props}>
      <BellIcon />
    </Badge>
  </span>
);

export const Default = Template.bind({});

export const Pulsing = Template.bind({});
Pulsing.args = {
  pulse: true
};

export const Mini = Template.bind({});
Mini.args = {
  variant: 'mini'
};

export const Dot = Template.bind({});
Dot.args = {
  variant: 'dot'
};

export const BigValue = Template.bind({});
BigValue.args = {
  content: 20
};

export const MaxValue = Template.bind({});
MaxValue.args = {
  content: 20,
  maxValue: 15
};
