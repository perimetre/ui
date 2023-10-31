import React from 'react';
import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import classnames from 'classnames';
import { ButtonStack, ButtonStackProps } from '.';
import { colorOptions } from '../../prebuiltTailwindTheme';
import { puiColorClassnameMap } from '../../storybookMappers';
import { BellIcon } from '../Icons';

export default {
  title: 'Components/Buttons/Stack',
  component: ButtonStack,
  argTypes: {
    color: {
      control: {
        options: colorOptions,
        type: 'select'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    },
    onClick: { action: 'onClick' }
  },
  args: {
    color: 'pui-primary',
    disabled: false
  }
} as Meta;

type StoryFnProps = ButtonStackProps & {
  border?: string;
  color?: keyof typeof puiColorClassnameMap;
  disabled?: boolean;
};

/**
 * A story that displays a button stack example
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.disabled the disabled color set on controls
 */
const WithTooltipTemplate: StoryFn<StoryFnProps> = ({ color, disabled, ...props }) => {
  const [activeKey, setActiveKey] = useState('button-1');

  const dropdownContentItems = Array(4)
    .fill(null)
    .map((_, i) => ({
      key: `button-${i + 1}`,
      /**
       * The icon example
       */
      icon: () => <BellIcon />,
      buttonProps: {
        /**
         * Callback for when the button is clicked
         */
        onClick: () => setActiveKey(`button-${i + 1}`),
        disabled
      }
    }));

  return (
    <ButtonStack
      {...props}
      containerClassname={classnames({
        [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'
      })}
      activeKey={activeKey}
      items={dropdownContentItems}
    />
  );
};

export const WithTooltip = WithTooltipTemplate.bind({});

/**
 * A story that displays a button stack example
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.disabled the disabled color set on controls
 */
const NoTooltipTemplate: StoryFn<StoryFnProps> = ({ color, disabled, ...props }) => {
  const [activeKey, setActiveKey] = useState('button-1');

  const dropdownContentItems = Array(4)
    .fill(null)
    .map((_, i) => ({
      key: `button-${i + 1}`,
      /**
       * The icon example
       */
      icon: () => <BellIcon />,
      /**
       * Callback for when the button is clicked
       */
      onClick: () => setActiveKey(`button-${i + 1}`),
      disabled
    }));

  return (
    <ButtonStack
      {...props}
      hasTooltip={false}
      containerClassname={classnames({
        [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary'
      })}
      activeKey={activeKey}
      items={dropdownContentItems}
    />
  );
};

export const NoTooltip = NoTooltipTemplate.bind({});
