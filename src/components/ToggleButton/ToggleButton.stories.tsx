import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { ToggleButton, ToggleButtonProps } from '.';
import { colorOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { puiColorClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Inputs/ToggleButton',
  component: ToggleButton,
  argTypes: {
    color: {
      options: colorOptions,
      control: {
        type: 'select'
      }
    },
    defaultChecked: {
      control: {
        type: 'boolean'
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
    onChange: { action: 'onChange' },
    onBlur: { action: 'onBlur' },
    onFocus: { action: 'onFocus' }
  },
  args: {
    offLabel: 'Off',
    onLabel: 'On',
    color: 'pui-primary'
  }
} as Meta;

/**
 * A story that displays a ToggleButton example
 * @param props the story props
 * @param props.color User selected color
 */
const Template: StoryFn<ToggleButtonProps & { color?: keyof typeof puiColorClassnameMap }> = ({ color, ...props }) => {
  const [checked, setChecked] = useState(false);

  return (
    <ToggleButton
      {...props}
      className={classnames(
        { [puiColorClassnameMap[color || 'transparent']]: color !== 'pui-primary' },
        props.className
      )}
      checked={checked}
      onChange={(e) => {
        setChecked(e.target.checked);
        if (props.onChange) props.onChange(e);
      }}
    />
  );
};

export const Default = Template.bind({});
