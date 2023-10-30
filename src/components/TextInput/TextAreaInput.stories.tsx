import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TextAreaInput, TextAreaInputProps } from './TextAreaInput';

export default {
  title: 'Components/Inputs/Text Area',
  component: TextAreaInput,
  argTypes: {
    placeholder: {
      control: {
        type: 'text'
      }
    },
    rows: {
      control: {
        type: 'number'
      }
    },
    defaultValue: {
      control: {
        type: 'text'
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
    disabled: false,
    readOnly: false
  }
} as Meta;

/**
 * A story that displays a TextAreaInput example
 *
 * @param props the story props
 */
const Template: StoryFn<TextAreaInputProps> = (props) => <TextAreaInput {...props} />;

export const TextArea = Template.bind({});

export const WithHelp = Template.bind({});
WithHelp.args = {
  help: 'You can also have a help text'
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Input is required'
};
