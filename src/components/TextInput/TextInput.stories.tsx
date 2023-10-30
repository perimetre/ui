import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'Components/Inputs/Text',
  component: TextInput,
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
 * A story that displays a TextInput example
 *
 * @param props the story props
 * @param props.ref grab the ref to fix the issue with forwardRef typing
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: StoryFn<TextInputProps> = ({ ref, ...props }) => <TextInput {...props} />;

export const Text = Template.bind({});

export const WithHelp = Template.bind({});
WithHelp.args = {
  help: 'You can also have a help text'
};

export const HelpJSX = Template.bind({});
HelpJSX.args = {
  help: (
    <p>
      You can also have a {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="text-pui-primary underline">
        help text
      </a>
    </p>
  )
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Input is required'
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  containerClassName: 'pui-absolute-icon-after-right-padded pui-icon-question after:pui-color-pui-paragraph-500'
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  containerClassName: 'pui-absolute-icon-after-left-padded pui-icon-bell after:pui-color-pui-paragraph-500'
};

/**
 * A story that displays a TextInput example with datalist
 *
 * @param props the story props
 * @param props.ref grab the ref to fix the issue with forwardRef typing
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DataListTemplate: StoryFn<TextInputProps> = ({ ref, ...props }) => (
  <TextInput {...props} list="listOptions">
    <datalist id="listOptions">
      {Array(10)
        .fill(null)
        .map((_, i) => (
          <option key={i} value={`Option ${i + 1}`}>
            Option {i + 1}
          </option>
        ))}
    </datalist>
  </TextInput>
);

export const DataList = DataListTemplate.bind({});
