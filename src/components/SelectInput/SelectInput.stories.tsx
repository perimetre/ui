import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { SelectInput, SelectInputProps } from '.';

export default {
  title: 'Components/Inputs/Select',
  component: SelectInput,
  argTypes: {
    placeholder: {
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
  },
  args: {
    id: 'input-id',
    label: 'Input',
    placeholder: 'Type here...',
    defaultValue: '',
    multiple: false,
    disabled: false,
    readOnly: false
  }
} as Meta;

/**
 * A story that displays a Select Input example
 * @param props the story props
 */
const Template: StoryFn<SelectInputProps> = (props) => (
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
 * @param props the story props
 */
const OptionGroupTemplate: StoryFn<SelectInputProps> = (props) => (
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
