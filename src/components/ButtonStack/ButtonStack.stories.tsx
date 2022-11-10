import React from 'react';
import { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import classnames from 'classnames';
import { ButtonStack, ButtonStackProps } from '.';
import { colorOptions } from '../../prebuiltTailwindTheme';
import { puiColorClassnameMap } from '../../storybookMappers';
import { BellIcon } from '../Icons';

export default {
  title: 'Components/ButtonStack',
  component: ButtonStack,
  argTypes: {
    color: {
      defaultValue: 'pui-primary',
      control: {
        type: 'select',
        options: colorOptions
      }
    },
    disabled: {
      defaultValue: false,
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
  }
} as Meta;

/**
 * A story that displays a button stack example
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.disabled the disabled color set on controls
 */
const WithTooltipTemplate: Story<ButtonStackProps & { border?: string; color?: string; disabled?: boolean }> = ({
  color,
  disabled,
  ...props
}) => {
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
 *
 * @param props the story props
 * @param props.color the color property set on controls
 * @param props.disabled the disabled color set on controls
 */
const NoTooltipTemplate: Story<ButtonStackProps & { border?: string; color?: string; disabled?: boolean }> = ({
  color,
  disabled,
  ...props
}) => {
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