import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TextAreaInput, TextAreaInputProps } from './TextAreaInput';

export default {
  title: 'Components/Inputs/Text Area',
  component: TextAreaInput,
  argTypes: {
    id: { defaultValue: 'input-id' },
    label: { defaultValue: 'Input' },
    placeholder: {
      defaultValue: 'Type here...',
      control: {
        type: 'text'
      }
    },
    rows: {
      defaultValue: 4,
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
