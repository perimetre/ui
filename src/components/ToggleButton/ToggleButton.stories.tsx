// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { ToggleButton, ToggleButtonProps } from '.';
import { colorOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { puiColorClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Inputs/ToggleButton',
  component: ToggleButton,
  argTypes: {
    offLabel: { defaultValue: 'Off' },
    onLabel: { defaultValue: 'On' },
    color: {
      defaultValue: 'pui-primary',
      control: {
        type: 'select',
        options: colorOptions
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
  }
} as Meta;

/**
 * A story that displays a ToggleButton example
 *
 * @param props the story props
 * @param props.color User selected color
 */
const Template: Story<ToggleButtonProps & { color?: string }> = ({ color, ...props }) => {
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
