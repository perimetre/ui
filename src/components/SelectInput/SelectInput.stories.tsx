// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { SelectInput, SelectInputProps } from '.';

export default {
  title: 'Components/Inputs/Select',
  component: SelectInput,
  argTypes: {
    id: { defaultValue: 'input-id' },
    label: {
      defaultValue: 'Input'
    },
    placeholder: {
      defaultValue: 'Type here...',
      control: {
        type: 'text'
      }
    },
    defaultValue: {
      control: {
        type: 'text'
      }
    },
    multiple: {
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
 * A story that displays a Select Input example
 *
 * @param props the story props
 */
const Template: Story<SelectInputProps> = (props) => (
  <SelectInput {...props}>
    {Array(10)
      .fill(null)
      .map((_, i) => (
        <option key={i} value={`option-${i}`}>
          Option {i + 1}
        </option>
      ))}
  </SelectInput>
);

export const Select = Template.bind({});

export const WithHelp = Template.bind({});
WithHelp.args = {
  help: 'You can also have a help text'
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Input is required'
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true
};

/**
 * A story that displays a Select Input example
 *
 * @param props the story props
 */
const OptionGroupTemplate: Story<SelectInputProps> = (props) => (
  <SelectInput {...props}>
    <optgroup label="First list">
      {Array(10)
        .fill(null)
        .map((_, i) => (
          <option key={i} value={`option-${i}`}>
            Option {i + 1}
          </option>
        ))}
    </optgroup>
    <optgroup label="Second list">
      {Array(10)
        .fill(null)
        .map((_, i) => (
          <option key={i} value={`option-${i}`} disabled={i > 2 && i < 7}>
            Option {i + 1}
          </option>
        ))}
    </optgroup>
  </SelectInput>
);

export const OptionGroups = OptionGroupTemplate.bind({});
