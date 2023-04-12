// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { ToggleInput, ToggleInputProps } from '.';
import { colorOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { puiColorClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Inputs/ToggleInput',
  component: ToggleInput,
  argTypes: {
    label: { defaultValue: 'Input' },
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
    placeholder: {
      defaultValue: 'Type here...',
      control: {
        type: 'text'
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
 * A story that displays a ToggleInput example
 *
 * @param props the story props
 * @param props.color User selected color
 */
const Template: Story<ToggleInputProps & { color?: string }> = ({ color, ...props }) => {
  const [checked, setChecked] = useState(false);

  return (
    <ToggleInput
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

export const WithLabel = Template.bind({});

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: undefined
};

export const WithHelp = Template.bind({});
WithHelp.args = {
  help: 'You can also have a help text'
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Input is required'
};
