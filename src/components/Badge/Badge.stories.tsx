// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Badge, BadgeProps } from '.';
import { colorOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { BellIcon } from '../Icons';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    content: {
      defaultValue: 2,
      control: {
        type: 'number'
      }
    },
    color: {
      defaultValue: 'pui-primary',
      control: {
        type: 'select',
        options: colorOptions
      }
    }
  }
} as Meta;

/**
 * A story that displays a Badge example
 *
 * @param props the story props
 * @param props.color the color property set on controls
 */
const Template: Story<BadgeProps & { color?: string }> = ({ color, ...props }) => (
  <span className={classnames({ [`pui-color-${color}`]: color !== 'pui-primary' })}>
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
