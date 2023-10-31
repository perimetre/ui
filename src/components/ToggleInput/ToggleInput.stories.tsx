import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { ToggleInput, ToggleInputProps } from '.';
import { colorOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { puiColorClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/Inputs/ToggleInput',
  component: ToggleInput,
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
    placeholder: {
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
  },
  args: {
    label: 'Input',
    color: 'pui-primary',
    placeholder: 'Type here...'
  }
} as Meta;

/**
 * A story that displays a ToggleInput example
 * @param props the story props
 * @param props.color User selected color
 */
const Template: StoryFn<ToggleInputProps & { color?: keyof typeof puiColorClassnameMap }> = ({ color, ...props }) => {
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
