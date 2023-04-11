// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { ToggleInput, ToggleInputProps } from '.';
import { colorOptions } from '../../prebuiltTailwindTheme';

export default {
  title: 'Components/Inputs/Toggle',
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
    defaultValue: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    readOnly: {
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
 */
const Template: Story<ToggleInputProps> = (props) => {
  const [checked, setChecked] = useState(false);

  return <ToggleInput {...props} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
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
